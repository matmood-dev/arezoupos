import express, { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs/promises';
import { query } from '../config/database.js';
import { authenticateToken, requireAdmin, requireAdminForDelete } from '../middleware/auth.js';
import { validateItemCreation, validateItemUpdate, validateIdParam, handleValidationErrors } from '../validators/index.js';
import { Item, CreateItemRequest, UpdateItemRequest, ApiResponse } from '../types/index.js';

const router = express.Router();

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), 'uploads'));
  },
  filename: (req, file, cb) => {
    // Generate unique filename with timestamp
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'item-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// File filter to only allow images
const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

/**
 * @swagger
 * /api/items:
 *   get:
 *     summary: Get all items
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter by category
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search in name and description
 *     responses:
 *       200:
 *         description: List of items retrieved successfully
 */
router.get('/', authenticateToken, async (req: Request, res: Response): Promise<void> => {
  try {
    const { category, search } = req.query;

    let queryText = `
      SELECT itemid, name, description, price, category, stock_quantity, image, created_at, updated_at
      FROM items
      WHERE 1=1
    `;
    const values: any[] = [];

    if (category) {
      queryText += ` AND category = ?`;
      values.push(category);
    }

    if (search) {
      queryText += ` AND (name LIKE ? OR description LIKE ?)`;
      values.push(`%${search}%`);
      values.push(`%${search}%`);
    }

    queryText += ` ORDER BY name ASC`;

    const result = await query(queryText, values);

    res.json({
      success: true,
      data: result.rows as Item[]
    });
  } catch (error) {
    console.error('Get items error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve items'
    });
  }
});

/**
 * @swagger
 * /api/items/{itemid}:
 *   get:
 *     summary: Get an item by ID
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: itemid
 *         required: true
 *         schema:
 *           type: integer
 */
router.get('/:itemid', authenticateToken, async (req: Request, res: Response): Promise<void> => {
  try {
    const { itemid } = req.params;

    const result = await query(`
      SELECT itemid, name, description, price, category, stock_quantity, image, created_at, updated_at
      FROM items
      WHERE itemid = ?
    `, [itemid]);

    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: 'Item not found'
      });
      return;
    }

    res.json({
      success: true,
      data: result.rows[0] as Item
    });
  } catch (error) {
    console.error('Get item error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve item'
    });
  }
});

/**
 * @swagger
 * /api/items:
 *   post:
 *     summary: Create a new item
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 */
router.post('/', authenticateToken, requireAdminForDelete, upload.single('image'), async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description, price, category, stock_quantity }: CreateItemRequest = req.body;

    // If categoryid provided, map it to a category name to avoid storing free text
    let finalCategory = category;
    const providedCategoryId = (req.body as any).categoryid;
    if (providedCategoryId !== undefined && providedCategoryId !== null) {
      const catId = parseInt(providedCategoryId.toString());
      if (!isNaN(catId)) {
        const catRes = await query('SELECT name FROM item_categories WHERE categoryid = ?', [catId]);
        if (catRes.rows.length > 0) {
          finalCategory = (catRes.rows[0] as any).name;
        } else {
          res.status(400).json({ success: false, message: 'Invalid category selected' } as ApiResponse);
          return;
        }
      }
    } else if (typeof category === 'string' && /^\d+$/.test(category)) {
      // fallback if category is a numeric string
      const catId = parseInt(category);
      const catRes = await query('SELECT name FROM item_categories WHERE categoryid = ?', [catId]);
      if (catRes.rows.length > 0) finalCategory = (catRes.rows[0] as any).name;
    }

    // Validate required fields
    // Allow category to be specified via `categoryid` (id) instead of `category` (name)
    const providedCategoryIdCheck = (req.body as any).categoryid;
    const hasCategory = (category && category !== '') || (providedCategoryIdCheck !== undefined && providedCategoryIdCheck !== null && providedCategoryIdCheck !== '');

    // Price or stock_quantity can be '0' — treat empty/null/undefined as missing only
    const priceMissing = price === undefined || price === null || price === '';
    const stockMissing = stock_quantity === undefined || stock_quantity === null || stock_quantity === '';

    if (!name || priceMissing || !hasCategory || stockMissing) {
      res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
      return;
    }

    // Get image path if file was uploaded
    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    const result = await query(`
      INSERT INTO items (name, description, price, category, stock_quantity, image)
      VALUES (?, ?, ?, ?, ?, ?)
    `, [name, description || null, parseFloat(price.toString()), finalCategory, parseInt(stock_quantity.toString()), imagePath]);

    // Get the inserted item
    const itemResult = await query(`
      SELECT itemid, name, description, price, category, stock_quantity, image, created_at, updated_at
      FROM items
      WHERE itemid = LAST_INSERT_ID()
    `);

    res.status(201).json({
      success: true,
      message: 'Item created successfully',
      data: itemResult.rows[0] as Item
    });
  } catch (error) {
    console.error('Create item error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create item'
    });
  }
});

/**
 * @swagger
 * /api/items/{itemid}:
 *   put:
 *     summary: Update an item
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 */
router.put('/:itemid', authenticateToken, requireAdminForDelete, upload.single('image'), validateIdParam, async (req: Request, res: Response): Promise<void> => {
  try {
    const { itemid } = req.params;
    const { name, description, price, category, stock_quantity }: UpdateItemRequest = req.body;

    // Map categoryid to name if provided
    let finalCategory = category;
    const providedCategoryId = (req.body as any).categoryid;
    if (providedCategoryId !== undefined && providedCategoryId !== null) {
      const catId = parseInt(providedCategoryId.toString());
      if (!isNaN(catId)) {
        const catRes = await query('SELECT name FROM item_categories WHERE categoryid = ?', [catId]);
        if (catRes.rows.length > 0) {
          finalCategory = (catRes.rows[0] as any).name;
        } else {
          res.status(400).json({ success: false, message: 'Invalid category selected' } as ApiResponse);
          return;
        }
      }
    } else if (typeof category === 'string' && /^\d+$/.test(category)) {
      const catId = parseInt(category);
      const catRes = await query('SELECT name FROM item_categories WHERE categoryid = ?', [catId]);
      if (catRes.rows.length > 0) finalCategory = (catRes.rows[0] as any).name;
    }

    // Get the current item to check for existing image
    const currentItemResult = await query(`
      SELECT image FROM items WHERE itemid = ?
    `, [itemid]);

    if (currentItemResult.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: 'Item not found'
      });
      return;
    }

    const currentImage = (currentItemResult.rows[0] as any).image;

    const updates: string[] = [];
    const values: any[] = [];

    if (name !== undefined) {
      updates.push(`name = ?`);
      values.push(name);
    }

    if (description !== undefined) {
      updates.push(`description = ?`);
      values.push(description);
    }

    if (price !== undefined) {
      updates.push(`price = ?`);
      values.push(price);
    }

    if (category !== undefined || providedCategoryId !== undefined) {
      updates.push(`category = ?`);
      values.push(finalCategory);
    }

    if (stock_quantity !== undefined) {
      updates.push(`stock_quantity = ?`);
      values.push(stock_quantity);
    }

    // Handle image update
    if (req.file) {
      // Delete the old image file if it exists
      if (currentImage) {
        try {
          const oldImagePath = path.join(process.cwd(), 'uploads', path.basename(currentImage));
          await fs.unlink(oldImagePath);
          console.log('Deleted old image:', oldImagePath);
        } catch (error) {
          console.log('Could not delete old image:', error instanceof Error ? error.message : String(error));
        }
      }

      updates.push(`image = ?`);
      values.push(`/uploads/${req.file.filename}`);
    }

    if (updates.length === 0) {
      res.status(400).json({
        success: false,
        message: 'No fields to update'
      });
      return;
    }

    updates.push(`updated_at = CURRENT_TIMESTAMP`);
    values.push(itemid);

    const result = await query(`
      UPDATE items
      SET ${updates.join(', ')}
      WHERE itemid = ?
    `, values);

    // Get the updated item
    const itemResult = await query(`
      SELECT itemid, name, description, price, category, stock_quantity, image, created_at, updated_at
      FROM items
      WHERE itemid = ?
    `, [itemid]);

    if (itemResult.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: 'Item not found'
      });
      return;
    }

    res.json({
      success: true,
      message: 'Item updated successfully',
      data: itemResult.rows[0] as Item
    });
  } catch (error) {
    console.error('Update item error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update item'
    });
  }
});

/**
 * @swagger
 * /api/items/{itemid}:
 *   delete:
 *     summary: Delete an item
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 */
router.delete('/:itemid', authenticateToken, requireAdmin, validateIdParam, async (req: Request, res: Response): Promise<void> => {
  try {
    const { itemid } = req.params;

    // First, get the item to check for an associated image
    const itemResult = await query(`
      SELECT image FROM items WHERE itemid = ?
    `, [itemid]);

    if (itemResult.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: 'Item not found'
      });
      return;
    }

    const itemImage = (itemResult.rows[0] as any).image;

    // Delete the associated image file if it exists
    if (itemImage) {
      try {
        const imagePath = path.join(process.cwd(), 'uploads', path.basename(itemImage));
        await fs.unlink(imagePath);
        console.log('Deleted image file:', imagePath);
      } catch (error) {
        console.log('Could not delete image file:', error instanceof Error ? error.message : String(error));
        // Don't fail the deletion if image deletion fails
      }
    }

    // Delete the item from the database
    const result = await query(`
      DELETE FROM items
      WHERE itemid = ?
    `, [itemid]);

    res.json({
      success: true,
      message: 'Item deleted successfully'
    });
  } catch (error) {
    console.error('Delete item error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete item'
    });
  }
});

export default router;