import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306', 10),
    database: process.env.DB_NAME || 'pos_system',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    waitForConnections: true,
    connectionLimit: 20,
    queueLimit: 0,
    connectTimeout: 60000,
});
// Test database connection
export const connectDB = async () => {
    try {
        // First connect without database to create it if needed
        const tempPool = mysql.createPool({
            host: process.env.DB_HOST || 'localhost',
            port: parseInt(process.env.DB_PORT || '3306', 10),
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || '',
            waitForConnections: true,
            connectionLimit: 1,
            connectTimeout: 60000,
        });
        // Create database if it doesn't exist
        await tempPool.execute(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME || 'pos_system'}\``);
        await tempPool.end();
        // Now connect to the specific database
        const connection = await pool.getConnection();
        console.log('✅ Database connected successfully');
        // Create tables if they don't exist
        await createTables();
        connection.release();
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error('❌ Database connection failed:', errorMessage);
        throw error;
    }
};
// Create database tables
const createTables = async () => {
    const connection = await pool.getConnection();
    try {
        // Create users table
        await connection.execute(`
      CREATE TABLE IF NOT EXISTS users (
        userid INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(100) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        role ENUM('admin', 'cashier') NOT NULL DEFAULT 'cashier',
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
        // Create items table
        await connection.execute(`
      CREATE TABLE IF NOT EXISTS items (
        itemid INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description TEXT,
        price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
        category VARCHAR(50) NOT NULL,
        stock_quantity INT NOT NULL DEFAULT 0 CHECK (stock_quantity >= 0),
        image VARCHAR(500),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
        // Add image column to existing items table if it doesn't exist
        try {
            // Check if image column exists
            const [columns] = await connection.execute(`
        SELECT COLUMN_NAME 
        FROM INFORMATION_SCHEMA.COLUMNS 
        WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'items' AND COLUMN_NAME = 'image'
      `, [process.env.DB_NAME || 'pos_system']);
            const columnRows = columns;
            if (columnRows.length === 0) {
                await connection.execute(`
          ALTER TABLE items ADD COLUMN image VARCHAR(500)
        `);
                console.log('✅ Added image column to items table');
            }
            else {
                console.log('✅ Image column already exists in items table');
            }
        }
        catch (error) {
            console.log('⚠️  Could not check/add image column:', error instanceof Error ? error.message : 'Unknown error');
        }
        // Create customers table
        await connection.execute(`
      CREATE TABLE IF NOT EXISTS customers (
        customerid INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE,
        phone VARCHAR(20) UNIQUE NOT NULL,
        address TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
        // Create orders table
        await connection.execute(`
      CREATE TABLE IF NOT EXISTS orders (
        orderid INT AUTO_INCREMENT PRIMARY KEY,
        customerid INT,
        total_amount DECIMAL(10,2) NOT NULL CHECK (total_amount >= 0),
        status ENUM('pending', 'completed', 'cancelled') NOT NULL DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (customerid) REFERENCES customers(customerid)
      )
    `);
        // Create order_items table
        await connection.execute(`
      CREATE TABLE IF NOT EXISTS order_items (
        order_itemid INT AUTO_INCREMENT PRIMARY KEY,
        orderid INT NOT NULL,
        itemid INT NOT NULL,
        quantity INT NOT NULL CHECK (quantity > 0),
        price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (orderid) REFERENCES orders(orderid) ON DELETE CASCADE,
        FOREIGN KEY (itemid) REFERENCES items(itemid)
      )
    `);
        // Create settings table
        await connection.execute(`
      CREATE TABLE IF NOT EXISTS settings (
        settingid INT AUTO_INCREMENT PRIMARY KEY,
        shop_name VARCHAR(255) NOT NULL DEFAULT 'My POS Shop',
        shop_logo VARCHAR(500),
        currency VARCHAR(10) NOT NULL DEFAULT 'BHD',
        tax_rate DECIMAL(5,2) NOT NULL DEFAULT 12.00 CHECK (tax_rate >= 0 AND tax_rate <= 100),
        receipt_footer TEXT DEFAULT 'Thank you for your business!',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
        // Insert default settings if not exists
        await connection.execute(`
      INSERT IGNORE INTO settings (settingid, shop_name, shop_logo, currency, tax_rate, receipt_footer)
      VALUES (1, 'My POS Shop', NULL, 'BHD', 12.00, 'Thank you for your business!')
    `);
        // Create branches table
        await connection.execute(`
      CREATE TABLE IF NOT EXISTS branches (
        branchid INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address TEXT NOT NULL,
        phone VARCHAR(20),
        active BOOLEAN NOT NULL DEFAULT TRUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
        // Insert default branch if not exists
        await connection.execute(`
      INSERT IGNORE INTO branches (branchid, name, address, phone, active)
      VALUES (1, 'Main Branch', '123 Main St', '+973 1234 5678', TRUE)
    `);
        // Create item_categories table
        await connection.execute(`
      CREATE TABLE IF NOT EXISTS item_categories (
        categoryid INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
        // Insert default categories if not exists
        await connection.execute(`
      INSERT IGNORE INTO item_categories (name)
      VALUES ('Food'), ('Beverage'), ('Dessert')
      ON DUPLICATE KEY UPDATE name = name
    `);
        // Create default admin user if not exists
        await connection.execute(`
      INSERT IGNORE INTO users (username, email, role, password)
      VALUES ('admin', 'admin@pos.com', 'admin', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi')
    `);
        console.log('✅ Database tables created/verified successfully');
    }
    catch (error) {
        console.error('❌ Error creating tables:', error);
        throw error;
    }
    finally {
        connection.release();
    }
};
// Query helper functions
export const query = async (text, params) => {
    const start = Date.now();
    try {
        const [rows] = await pool.execute(text, params);
        const duration = Date.now() - start;
        return { rows };
    }
    catch (error) {
        console.error('Query error:', error);
        throw error;
    }
};
export const getClient = async () => {
    return await pool.getConnection();
};
export default pool;
//# sourceMappingURL=database.js.map