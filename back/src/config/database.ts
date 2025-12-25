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
export const connectDB = async (): Promise<void> => {
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
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('❌ Database connection failed:', errorMessage);
    throw error;
  }
};

// Create database tables
const createTables = async (): Promise<void> => {
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

      const columnRows = columns as any[];
      if (columnRows.length === 0) {
        await connection.execute(`
          ALTER TABLE items ADD COLUMN image VARCHAR(500)
        `);
        console.log('✅ Added image column to items table');
      } else {
        console.log('✅ Image column already exists in items table');
      }
    } catch (error) {
      console.log('⚠️  Could not check/add image column:', error instanceof Error ? error.message : 'Unknown error');
    }

    // Add active column to existing items table if it doesn't exist
    try {
      // Check if active column exists
      const [columns] = await connection.execute(`
        SELECT COLUMN_NAME 
        FROM INFORMATION_SCHEMA.COLUMNS 
        WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'items' AND COLUMN_NAME = 'active'
      `, [process.env.DB_NAME || 'pos_system']);

      const columnRows = columns as any[];
      if (columnRows.length === 0) {
        await connection.execute(`
          ALTER TABLE items ADD COLUMN active BOOLEAN DEFAULT TRUE AFTER image
        `);
        console.log('✅ Added active column to items table');
      } else {
        console.log('✅ Active column already exists in items table');
      }
    } catch (error) {
      console.log('⚠️  Could not check/add active column:', error instanceof Error ? error.message : 'Unknown error');
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

    // Add active column to existing customers table if it doesn't exist
    try {
      // Check if active column exists
      const [columns] = await connection.execute(`
        SELECT COLUMN_NAME 
        FROM INFORMATION_SCHEMA.COLUMNS 
        WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'customers' AND COLUMN_NAME = 'active'
      `, [process.env.DB_NAME || 'pos_system']);

      const columnRows = columns as any[];
      if (columnRows.length === 0) {
        await connection.execute(`
          ALTER TABLE customers ADD COLUMN active BOOLEAN DEFAULT TRUE AFTER address
        `);
        console.log('✅ Added active column to customers table');
      } else {
        console.log('✅ Active column already exists in customers table');
      }
    } catch (error) {
      console.log('⚠️  Could not check/add active column to customers:', error instanceof Error ? error.message : 'Unknown error');
    }

    // Create orders table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS orders (
        orderid INT AUTO_INCREMENT PRIMARY KEY,
        customerid INT,
        branchid INT,
        total_amount DECIMAL(10,2) NOT NULL CHECK (total_amount >= 0),
        status ENUM('pending', 'completed', 'cancelled') NOT NULL DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (customerid) REFERENCES customers(customerid),
        FOREIGN KEY (branchid) REFERENCES branches(branchid)
      )
    `);

    // Add branchid column to existing orders table if it doesn't exist
    try {
      const [columns] = await connection.execute(`
        SELECT COLUMN_NAME 
        FROM INFORMATION_SCHEMA.COLUMNS 
        WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'orders' AND COLUMN_NAME = 'branchid'
      `, [process.env.DB_NAME || 'pos_system']);

      const columnRows = columns as any[];
      if (columnRows.length === 0) {
        await connection.execute(`
          ALTER TABLE orders ADD COLUMN branchid INT AFTER customerid
        `);
        // Add foreign key constraint
        await connection.execute(`
          ALTER TABLE orders ADD CONSTRAINT fk_orders_branch 
          FOREIGN KEY (branchid) REFERENCES branches(branchid)
        `);
        console.log('✅ Added branchid column to orders table');
      }
    } catch (error) {
      console.log('⚠️  Could not check/add branchid column to orders:', error instanceof Error ? error.message : 'Unknown error');
    }

    // Create order_items table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS order_items (
        order_itemid INT AUTO_INCREMENT PRIMARY KEY,
        orderid INT NOT NULL,
        itemid INT NOT NULL,
        quantity INT NOT NULL CHECK (quantity > 0),
        price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
        note TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (orderid) REFERENCES orders(orderid) ON DELETE CASCADE,
        FOREIGN KEY (itemid) REFERENCES items(itemid)
      )
    `);

    // Add note column to existing order_items table if it doesn't exist
    try {
      const [columns] = await connection.execute(`
        SELECT COLUMN_NAME 
        FROM INFORMATION_SCHEMA.COLUMNS 
        WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'order_items' AND COLUMN_NAME = 'note'
      `, [process.env.DB_NAME || 'pos_system']);

      const columnRows = columns as any[];
      if (columnRows.length === 0) {
        await connection.execute(`
          ALTER TABLE order_items ADD COLUMN note TEXT AFTER price
        `);
        console.log('✅ Added note column to order_items table');
      }
    } catch (error) {
      console.log('⚠️  Could not check/add note column to order_items:', error instanceof Error ? error.message : 'Unknown error');
    }

    // Create settings table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS settings (
        settingid INT AUTO_INCREMENT PRIMARY KEY,
        shop_name VARCHAR(255) NOT NULL DEFAULT 'My POS Shop',
        shop_logo VARCHAR(500),
        shop_email VARCHAR(100),
        vat_registration_number VARCHAR(50),
        currency VARCHAR(10) NOT NULL DEFAULT 'BHD',
        tax_rate DECIMAL(5,2) NOT NULL DEFAULT 12.00 CHECK (tax_rate >= 0 AND tax_rate <= 100),
        receipt_footer TEXT DEFAULT 'Thank you for your business!',
        bank_name VARCHAR(255),
        bank_account_name VARCHAR(255),
        iban_number VARCHAR(50),
        account_number VARCHAR(50),
        swift_code VARCHAR(20),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // Add new columns to existing settings table if they don't exist
    const settingsColumns = [
      { name: 'shop_email', type: 'VARCHAR(100)', afterColumn: 'shop_logo' },
      { name: 'vat_registration_number', type: 'VARCHAR(50)', afterColumn: 'shop_email' },
      { name: 'bank_name', type: 'VARCHAR(255)', afterColumn: 'receipt_footer' },
      { name: 'bank_account_name', type: 'VARCHAR(255)', afterColumn: 'bank_name' },
      { name: 'iban_number', type: 'VARCHAR(50)', afterColumn: 'bank_account_name' },
      { name: 'account_number', type: 'VARCHAR(50)', afterColumn: 'iban_number' },
      { name: 'swift_code', type: 'VARCHAR(20)', afterColumn: 'account_number' }
    ];

    for (const column of settingsColumns) {
      try {
        const [columns] = await connection.execute(`
          SELECT COLUMN_NAME 
          FROM INFORMATION_SCHEMA.COLUMNS 
          WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'settings' AND COLUMN_NAME = ?
        `, [process.env.DB_NAME || 'pos_system', column.name]);

        const columnRows = columns as any[];
        if (columnRows.length === 0) {
          await connection.execute(`
            ALTER TABLE settings ADD COLUMN ${column.name} ${column.type} AFTER ${column.afterColumn}
          `);
          console.log(`✅ Added ${column.name} column to settings table`);
        }
      } catch (error) {
        console.log(`⚠️  Could not check/add ${column.name} column:`, error instanceof Error ? error.message : 'Unknown error');
      }
    }

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
        cr VARCHAR(50),
        active BOOLEAN NOT NULL DEFAULT TRUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // Add cr column to existing branches table if it doesn't exist
    try {
      const [columns] = await connection.execute(`
        SELECT COLUMN_NAME 
        FROM INFORMATION_SCHEMA.COLUMNS 
        WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'branches' AND COLUMN_NAME = 'cr'
      `, [process.env.DB_NAME || 'pos_system']);

      const columnRows = columns as any[];
      if (columnRows.length === 0) {
        await connection.execute(`
          ALTER TABLE branches ADD COLUMN cr VARCHAR(50) AFTER phone
        `);
        console.log('✅ Added cr column to branches table');
      }
    } catch (error) {
      console.log('⚠️  Could not check/add cr column to branches:', error instanceof Error ? error.message : 'Unknown error');
    }

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

    // Insert default categories only when the table is empty
    try {
      const [countRows] = await connection.execute(`SELECT COUNT(*) as total FROM item_categories`);
      const total = (countRows as any)[0]?.total ?? 0;
      if (Number(total) === 0) {
        await connection.execute(`
          INSERT IGNORE INTO item_categories (name)
          VALUES ('Food'), ('Beverage'), ('Dessert')
          ON DUPLICATE KEY UPDATE name = name
        `);
        console.log('✅ Inserted default item categories: Food, Beverage, Dessert');
      } else {
        console.log('ℹ️  Skipping default item category insertion — table not empty');
      }
    } catch (err) {
      console.log('⚠️  Could not check/insert default item categories:', err instanceof Error ? err.message : 'Unknown error');
    }

    // Create default admin user if not exists
    await connection.execute(`
      INSERT IGNORE INTO users (username, email, role, password)
      VALUES ('admin', 'admin@pos.com', 'admin', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi')
    `);

    console.log('✅ Database tables created/verified successfully');
  } catch (error) {
    console.error('❌ Error creating tables:', error);
    throw error;
  } finally {
    connection.release();
  }
};

// Query helper functions
export const query = async (text: string, params?: any[]): Promise<any> => {
  const start = Date.now();
  try {
    const [rows] = await pool.execute(text, params);
    const duration = Date.now() - start;
    return { rows };
  } catch (error) {
    console.error('Query error:', error);
    throw error;
  }
};

export const getClient = async (): Promise<mysql.PoolConnection> => {
  return await pool.getConnection();
};

export default pool;