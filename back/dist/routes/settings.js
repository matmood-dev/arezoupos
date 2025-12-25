import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs/promises';
import { query } from '../config/database';
import { authenticateToken, requireAdmin } from '../middleware/auth';
// Simple validation functions
const validateSettingsUpdate = (data) => {
    const errors = [];
    if (data.shop_name !== undefined && (typeof data.shop_name !== 'string' || data.shop_name.trim().length < 1 || data.shop_name.length > 255)) {
        errors.push('Shop name must be between 1 and 255 characters');
    }
    if (data.shop_logo !== undefined && (typeof data.shop_logo !== 'string' || data.shop_logo.length > 500)) {
        errors.push('Shop logo path must be less than 500 characters');
    }
    if (data.currency !== undefined && (typeof data.currency !== 'string' || data.currency.length < 3 || data.currency.length > 10)) {
        errors.push('Currency must be between 3 and 10 characters');
    }
    if (data.tax_rate !== undefined) {
        const taxRate = typeof data.tax_rate === 'string' ? parseFloat(data.tax_rate) : data.tax_rate;
        if (isNaN(taxRate) || taxRate < 0 || taxRate > 100) {
            errors.push('Tax rate must be between 0 and 100');
        }
    }
    if (data.receipt_footer !== undefined && (typeof data.receipt_footer !== 'string' || data.receipt_footer.length > 1000)) {
        errors.push('Receipt footer must be less than 1000 characters');
    }
    return { isEmpty: errors.length === 0, errors };
};
const validateBranchCreate = (data) => {
    const errors = [];
    if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 1 || data.name.length > 255) {
        errors.push('Branch name is required and must be less than 255 characters');
    }
    if (!data.address || typeof data.address !== 'string' || data.address.trim().length < 1 || data.address.length > 1000) {
        errors.push('Branch address is required and must be less than 1000 characters');
    }
    if (data.phone !== undefined && data.phone !== null && (typeof data.phone !== 'string' || data.phone.length > 20)) {
        errors.push('Phone number must be less than 20 characters');
    }
    if (data.active !== undefined && typeof data.active !== 'boolean') {
        errors.push('Active status must be a boolean');
    }
    return { isEmpty: errors.length === 0, errors };
};
const validateBranchUpdate = (data) => {
    const errors = [];
    if (data.name !== undefined && (typeof data.name !== 'string' || data.name.trim().length < 1 || data.name.length > 255)) {
        errors.push('Branch name must be less than 255 characters');
    }
    if (data.address !== undefined && (typeof data.address !== 'string' || data.address.trim().length < 1 || data.address.length > 1000)) {
        errors.push('Branch address must be less than 1000 characters');
    }
    if (data.phone !== undefined && data.phone !== null && (typeof data.phone !== 'string' || data.phone.length > 20)) {
        errors.push('Phone number must be less than 20 characters');
    }
    if (data.active !== undefined && typeof data.active !== 'boolean') {
        errors.push('Active status must be a boolean');
    }
    return { isEmpty: errors.length === 0, errors };
};
const validateCategoryCreate = (data) => {
    const errors = [];
    if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 1 || data.name.length > 100) {
        errors.push('Category name is required and must be less than 100 characters');
    }
    return { isEmpty: errors.length === 0, errors };
};
const router = express.Router();
// Configure multer for logo uploads
const logoStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(process.cwd(), 'uploads', 'logo'));
    },
    filename: (req, file, cb) => {
        // Generate unique filename with timestamp
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, 'logo-' + uniqueSuffix + path.extname(file.originalname));
    }
});
// File filter to only allow images
const logoFileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    }
    else {
        cb(new Error('Only image files are allowed!'));
    }
};
const upload = multer({
    storage: logoStorage,
    fileFilter: logoFileFilter,
    limits: {
        fileSize: 2 * 1024 * 1024 // 2MB limit for logos
    }
});
// Configure file upload directory
const UPLOAD_DIR = path.join(process.cwd(), 'uploads', 'logo');
// Ensure upload directory exists
import { mkdir } from 'fs/promises';
try {
    await mkdir(UPLOAD_DIR, { recursive: true });
}
catch (error) {
    console.log('Upload directory already exists or could not be created');
}
// Get settings
router.get('/', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const result = await query('SELECT * FROM settings WHERE settingid = 1');
        const settings = result.rows[0];
        if (!settings) {
            res.status(404).json({
                success: false,
                message: 'Settings not found'
            });
            return;
        }
        res.json({
            success: true,
            data: settings
        });
    }
    catch (error) {
        console.error('Error fetching settings:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch settings'
        });
    }
});
// Update settings
router.put('/', upload.any(), authenticateToken, requireAdmin, async (req, res) => {
    try {
        console.log('Request body:', req.body);
        console.log('Request files:', req.files);
        console.log('Body keys:', Object.keys(req.body || {}));
        const updateData = req.body || {};
        console.log('updateData:', updateData);
        // Validate input
        const validation = validateSettingsUpdate(updateData);
        console.log('Validation result:', validation);
        if (!validation.isEmpty) {
            res.status(400).json({
                success: false,
                message: 'Validation failed',
                error: validation.errors.join(', ')
            });
            return;
        }
        // Get the current settings to check for existing logo
        const currentSettingsResult = await query('SELECT shop_logo FROM settings WHERE settingid = 1');
        const currentLogo = currentSettingsResult.rows.length > 0 ? currentSettingsResult.rows[0].shop_logo : null;
        const updates = [];
        const values = [];
        Object.entries(updateData).forEach(([key, value]) => {
            if (value !== undefined) {
                // Convert camelCase to snake_case for database columns
                const dbKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
                // Convert string numbers to actual numbers for database
                let processedValue = value;
                if (key === 'tax_rate' && typeof value === 'string') {
                    processedValue = parseFloat(value);
                }
                updates.push(`${dbKey} = ?`);
                values.push(processedValue);
            }
        });
        // Handle logo upload
        const logoFile = req.files?.find((file) => file.fieldname === 'shop_logo');
        if (logoFile) {
            // Delete the old logo file if it exists
            if (currentLogo) {
                try {
                    const oldLogoPath = path.join(UPLOAD_DIR, path.basename(currentLogo));
                    await fs.unlink(oldLogoPath);
                    console.log('Deleted old logo:', oldLogoPath);
                }
                catch (error) {
                    console.log('Could not delete old logo:', error instanceof Error ? error.message : String(error));
                }
            }
            updates.push(`shop_logo = ?`);
            values.push(`/uploads/logo/${logoFile.filename}`);
        }
        if (updates.length === 0) {
            res.status(400).json({
                success: false,
                message: 'No valid fields to update'
            });
            return;
        }
        const updateQuery = `
      UPDATE settings
      SET ${updates.join(', ')}, updated_at = CURRENT_TIMESTAMP
      WHERE settingid = 1
    `;
        await query(updateQuery, values);
        // Fetch updated settings
        const result = await query('SELECT * FROM settings WHERE settingid = 1');
        const updatedSettings = result.rows[0];
        res.json({
            success: true,
            message: 'Settings updated successfully',
            data: updatedSettings
        });
    }
    catch (error) {
        console.error('Error updating settings:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update settings'
        });
    }
});
// Get branches
router.get('/branches', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const result = await query('SELECT * FROM branches ORDER BY name');
        const branches = result.rows;
        res.json({
            success: true,
            data: branches
        });
    }
    catch (error) {
        console.error('Error fetching branches:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch branches'
        });
    }
});
// Create branch
router.post('/branches', express.json(), authenticateToken, requireAdmin, async (req, res) => {
    try {
        const branchData = req.body;
        // Validate input
        const validation = validateBranchCreate(branchData);
        if (!validation.isEmpty) {
            res.status(400).json({
                success: false,
                message: 'Validation failed',
                error: validation.errors.join(', ')
            });
            return;
        }
        const result = await query('INSERT INTO branches (name, address, phone, active) VALUES (?, ?, ?, ?)', [branchData.name, branchData.address, branchData.phone || null, branchData.active ?? true]);
        // Fetch the created branch
        const newBranchResult = await query('SELECT * FROM branches WHERE branchid = ?', [result.rows.insertId]);
        const newBranch = newBranchResult.rows[0];
        res.status(201).json({
            success: true,
            message: 'Branch created successfully',
            data: newBranch
        });
    }
    catch (error) {
        console.error('Error creating branch:', error);
        if (error instanceof Error && error.message.includes('Duplicate entry')) {
            res.status(409).json({
                success: false,
                message: 'Branch name already exists'
            });
            return;
        }
        res.status(500).json({
            success: false,
            message: 'Failed to create branch'
        });
    }
});
// Update branch
router.put('/branches/:id', express.json(), authenticateToken, requireAdmin, async (req, res) => {
    try {
        const branchId = parseInt(req.params.id || '0');
        const updateData = req.body;
        if (isNaN(branchId) || branchId <= 0) {
            res.status(400).json({
                success: false,
                message: 'Invalid branch ID'
            });
            return;
        }
        // Validate input
        const validation = validateBranchUpdate(updateData);
        if (!validation.isEmpty) {
            res.status(400).json({
                success: false,
                message: 'Validation failed',
                error: validation.errors.join(', ')
            });
            return;
        }
        // Check if branch exists
        const existingResult = await query('SELECT * FROM branches WHERE branchid = ?', [branchId]);
        if (existingResult.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: 'Branch not found'
            });
            return;
        }
        // Build update query dynamically
        const updates = [];
        const values = [];
        Object.entries(updateData).forEach(([key, value]) => {
            if (value !== undefined) {
                updates.push(`${key} = ?`);
                values.push(value);
            }
        });
        if (updates.length === 0) {
            res.status(400).json({
                success: false,
                message: 'No valid fields to update'
            });
            return;
        }
        values.push(branchId);
        const updateQuery = `
      UPDATE branches
      SET ${updates.join(', ')}, updated_at = CURRENT_TIMESTAMP
      WHERE branchid = ?
    `;
        await query(updateQuery, values);
        // Fetch updated branch
        const updatedResult = await query('SELECT * FROM branches WHERE branchid = ?', [branchId]);
        const updatedBranch = updatedResult.rows[0];
        res.json({
            success: true,
            message: 'Branch updated successfully',
            data: updatedBranch
        });
    }
    catch (error) {
        console.error('Error updating branch:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update branch'
        });
    }
});
// Delete branch
router.delete('/branches/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const branchId = parseInt(req.params.id || '0');
        if (isNaN(branchId) || branchId <= 0) {
            res.status(400).json({
                success: false,
                message: 'Invalid branch ID'
            });
            return;
        }
        // Check if branch exists
        const existingResult = await query('SELECT * FROM branches WHERE branchid = ?', [branchId]);
        if (existingResult.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: 'Branch not found'
            });
            return;
        }
        await query('DELETE FROM branches WHERE branchid = ?', [branchId]);
        res.json({
            success: true,
            message: 'Branch deleted successfully'
        });
    }
    catch (error) {
        console.error('Error deleting branch:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete branch'
        });
    }
});
// Get categories
router.get('/categories', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const result = await query('SELECT * FROM item_categories ORDER BY name');
        const categories = result.rows;
        res.json({
            success: true,
            data: categories
        });
    }
    catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch categories'
        });
    }
});
// Create category
router.post('/categories', express.json(), authenticateToken, requireAdmin, async (req, res) => {
    try {
        const categoryData = req.body;
        // Validate input
        const validation = validateCategoryCreate(categoryData);
        if (!validation.isEmpty) {
            res.status(400).json({
                success: false,
                message: 'Validation failed',
                error: validation.errors.join(', ')
            });
            return;
        }
        const result = await query('INSERT INTO item_categories (name) VALUES (?)', [categoryData.name]);
        // Fetch the created category
        const newCategoryResult = await query('SELECT * FROM item_categories WHERE categoryid = ?', [result.rows.insertId]);
        const newCategory = newCategoryResult.rows[0];
        res.status(201).json({
            success: true,
            message: 'Category created successfully',
            data: newCategory
        });
    }
    catch (error) {
        console.error('Error creating category:', error);
        if (error instanceof Error && error.message.includes('Duplicate entry')) {
            res.status(409).json({
                success: false,
                message: 'Category name already exists'
            });
            return;
        }
        res.status(500).json({
            success: false,
            message: 'Failed to create category'
        });
    }
});
// Delete category
router.delete('/categories/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const categoryId = parseInt(req.params.id || '0');
        if (isNaN(categoryId) || categoryId <= 0) {
            res.status(400).json({
                success: false,
                message: 'Invalid category ID'
            });
            return;
        }
        // Check if category exists
        const existingResult = await query('SELECT * FROM item_categories WHERE categoryid = ?', [categoryId]);
        if (existingResult.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: 'Category not found'
            });
            return;
        }
        // Check if category is being used by items
        const usageResult = await query('SELECT COUNT(*) as count FROM items WHERE category = ?', [existingResult.rows[0].name]);
        if (usageResult.rows[0].count > 0) {
            res.status(409).json({
                success: false,
                message: 'Cannot delete category that is being used by items'
            });
            return;
        }
        await query('DELETE FROM item_categories WHERE categoryid = ?', [categoryId]);
        res.json({
            success: true,
            message: 'Category deleted successfully'
        });
    }
    catch (error) {
        console.error('Error deleting category:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete category'
        });
    }
});
export default router;
//# sourceMappingURL=settings.js.map