import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import jwt from 'jsonwebtoken';
import { query, getClient } from '../config/database.js';
import { authenticateToken, requireAdmin, requireAdminForDelete } from '../middleware/auth.js';
import { validateOrderCreation, validateOrderUpdate, validateIdParam, handleValidationErrors } from '../validators/index.js';
import { Order, CreateOrderRequest, UpdateOrderRequest, ApiResponse, OrderItem } from '../types/index.js';

const router = express.Router();

router.use(express.json());

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of orders retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Order'
 *       403:
 *         description: Admin access required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/', authenticateToken, requireAdminForDelete, async (req: Request, res: Response): Promise<void> => {
  try {
    // Get orders with customer and branch info
    const ordersResult = await query(`
      SELECT o.orderid, o.customerid, o.branchid, o.total_amount, o.status, o.created_at, o.updated_at,
             COALESCE(c.name, 'Deleted Customer') as customer_name, 
             c.email as customer_email, 
             c.phone as customer_phone,
             b.name as branch_name, b.address as branch_address, b.phone as branch_phone, b.cr as branch_cr
      FROM orders o
      LEFT JOIN customers c ON o.customerid = c.customerid
      LEFT JOIN branches b ON o.branchid = b.branchid
      ORDER BY o.created_at DESC
    `);

    const rows = Array.isArray(ordersResult.rows) ? ordersResult.rows : [];
    console.log('DEBUG: fetched orders rows count =', rows.length);

    // Get order items for each order
    let ordersWithItems;
    try {
      ordersWithItems = await Promise.all(
      ordersResult.rows.map(async (order: any) => {
        const itemsResult = await query(`
          SELECT oi.itemid, oi.quantity, oi.price, oi.note, i.name, i.category
          FROM order_items oi
          JOIN items i ON oi.itemid = i.itemid
          WHERE oi.orderid = ?
        `, [order.orderid]);

        return {
          ...order,
          items: itemsResult.rows.map((item: any) => ({
            itemid: item.itemid,
            quantity: item.quantity,
            price: parseFloat(item.price),
            name: item.name,
            category: item.category,
            note: item.note
          }))
        };
      })
    );
    } catch (err) {
      console.error('Error mapping ordersWithItems:', err instanceof Error ? err.message : err);
      throw err;
    }

    res.json({
      success: true,
      data: ordersWithItems as Order[]
    });
  } catch (error) {
    console.error('Get orders error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve orders'
    });
  }
});

/**
 * @swagger
 * /api/orders/{orderid}:
 *   get:
 *     summary: Get an order by ID
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: orderid
 *         required: true
 *         schema:
 *           type: integer
 *         description: Order ID
 *     responses:
 *       200:
 *         description: Order retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Order'
 *       403:
 *         description: Access denied
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Order not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/:orderid', authenticateToken, requireAdminForDelete, validateIdParam, async (req: Request, res: Response): Promise<void> => {
  try {
    const { orderid } = req.params;

    // Get order with customer and branch info
    const orderResult = await query(`
      SELECT o.orderid, o.customerid, o.branchid, o.total_amount, o.status, o.created_at, o.updated_at,
             COALESCE(c.name, 'Deleted Customer') as customer_name, 
             c.email as customer_email, 
             c.phone as customer_phone,
             b.name as branch_name, b.address as branch_address, b.phone as branch_phone, b.cr as branch_cr
      FROM orders o
      LEFT JOIN customers c ON o.customerid = c.customerid
      LEFT JOIN branches b ON o.branchid = b.branchid
      WHERE o.orderid = ?
    `, [orderid]);

    if (orderResult.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: 'Order not found'
      });
      return;
    }

    // Get order items
    const itemsResult = await query(`
      SELECT oi.itemid, oi.quantity, oi.price, oi.note, i.name, i.category
      FROM order_items oi
      JOIN items i ON oi.itemid = i.itemid
      WHERE oi.orderid = ?
    `, [orderid]);

    const order = {
      ...orderResult.rows[0],
      items: itemsResult.rows.map((item: any) => ({
        itemid: item.itemid,
        quantity: item.quantity,
        price: parseFloat(item.price),
        name: item.name,
        category: item.category,
        note: item.note
      }))
    };

    res.json({
      success: true,
      data: order as Order
    });
  } catch (error) {
    console.error('Get order error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve order'
    });
  }
});

/**
 * Generate HTML receipt for an order
 */
router.get('/:orderid/receipt', authenticateToken, validateIdParam, async (req: Request, res: Response): Promise<void> => {
  try {
    const { orderid } = req.params;

    // Get order with customer and branch info
    const orderResult = await query(`
      SELECT o.orderid, o.customerid, o.branchid, o.total_amount, o.status, o.created_at, o.updated_at,
             COALESCE(c.name, 'Deleted Customer') as customer_name, 
             c.email as customer_email, 
             c.phone as customer_phone,
             b.name as branch_name, b.address as branch_address, b.phone as branch_phone, b.cr as branch_cr
      FROM orders o
      LEFT JOIN customers c ON o.customerid = c.customerid
      LEFT JOIN branches b ON o.branchid = b.branchid
      WHERE o.orderid = ?
    `, [orderid]);

    if (orderResult.rows.length === 0) {
      res.status(404).json({ success: false, message: 'Order not found' });
      return;
    }

    const itemsResult = await query(`
      SELECT oi.itemid, oi.quantity, oi.price, oi.note, i.name, i.category
      FROM order_items oi
      JOIN items i ON oi.itemid = i.itemid
      WHERE oi.orderid = ?
    `, [orderid]);

    // Fetch settings to render footer and shop name
    const settingsResult = await query(`SELECT shop_name, shop_logo, receipt_footer, currency FROM settings LIMIT 1`);
    const settings = (settingsResult.rows && settingsResult.rows[0]) ? settingsResult.rows[0] : { shop_name: 'Shop', receipt_footer: '', shop_logo: null };

    const order = {
      ...orderResult.rows[0],
      items: itemsResult.rows.map((item: any) => ({
        itemid: item.itemid,
        quantity: item.quantity,
        price: parseFloat(item.price),
        name: item.name,
        category: item.category,
        note: item.note
      }))
    };

    // Build a simple HTML receipt
    const htmlItems = order.items.map((it: any) => `
      <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px dashed #eee;">
        <div style="flex:1">${it.name} × ${it.quantity}</div>
        <div style="min-width:80px;text-align:right">${(Number(it.price) * it.quantity).toFixed(3)}</div>
      </div>`).join('');

    // Build absolute logo URL if shop_logo exists
    const logoUrl = settings.shop_logo ? `${req.protocol}://${req.get('host')}${settings.shop_logo}` : null;

    const html = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Receipt ${order.orderid}</title></head><body>
      <div id="receipt" style="max-width:400px;margin:20px auto;padding:20px;background:#fff;border:1px solid #eee;border-radius:8px;">
        ${logoUrl ? `<div style="text-align:center;margin-bottom:10px"><img src="${logoUrl}" alt="Logo" style="max-width:150px;max-height:90px;object-fit:contain;"/></div>` : ''}
        <h2 style="margin:0 0 8px 0;text-align:center">${settings.shop_name || 'Shop'}</h2>
        <div style="text-align:center;color:#6b7280;margin-bottom:12px">${new Date(order.created_at).toLocaleString()}</div>
        <div style="font-weight:700;display:flex;justify-content:space-between;margin-bottom:8px;"> <div>Order #${order.orderid}</div> <div>${order.status}</div> </div>
        ${htmlItems}
        <div style="display:flex;justify-content:space-between;font-weight:700;margin-top:12px"> <div>Total</div> <div>${Number(order.total_amount).toFixed(3)}</div> </div>
        <div style="text-align:center;color:#6b7280;margin-top:12px">${settings.receipt_footer || ''}</div>
      </div>
    </body></html>`;

    res.set('Content-Type', 'text/html');
    res.send(html);
  } catch (error) {
    console.error('Get order receipt error:', error);
    res.status(500).json({ success: false, message: 'Failed to generate receipt' });
  }
});

// Create a short-lived download token for a PDF receipt
router.post('/:orderid/receipt/token', authenticateToken, validateIdParam, async (req: Request, res: Response): Promise<void> => {
  try {
    const { orderid } = req.params;

    // Validate order exists
    const orderResult = await query('SELECT orderid FROM orders WHERE orderid = ?', [orderid]);
    if (!orderResult.rows || orderResult.rows.length === 0) {
      res.status(404).json({ success: false, message: 'Order not found' });
      return;
    }

    const secret = process.env.JWT_SECRET || 'fallback_secret';
    // Token lifetime: 5 minutes by default (configurable)
    const expiresIn = process.env.RECEIPT_TOKEN_TTL || '5m';
    const token = jwt.sign({ type: 'download', orderid: Number(orderid) }, secret, { expiresIn });

    const host = `${req.protocol}://${req.get('host')}`;
    const url = `${host}/api/orders/${orderid}/receipt.pdf?download_token=${encodeURIComponent(token)}`;
    const redirectUrl = `${host}/api/orders/${orderid}/receipt/redirect?download_token=${encodeURIComponent(token)}`;

    res.json({ success: true, data: { token, url, redirectUrl } });
  } catch (error) {
    console.error('Create receipt token error:', error);
    res.status(500).json({ success: false, message: 'Failed to create receipt token' });
  }
});

// Redirect page for compatibility (useful for extension-safe navigation)
router.get('/:orderid/receipt/redirect', validateIdParam, async (req: Request, res: Response): Promise<void> => {
  try {
    const { orderid } = req.params;
    const token = String(req.query.download_token || '');
    if (!token) {
      res.status(401).json({ success: false, message: 'Download token required' });
      return;
    }

    const secret = process.env.JWT_SECRET || 'fallback_secret';
    try {
      const payload = jwt.verify(token, secret) as any;
      if (payload.type !== 'download' || Number(payload.orderid) !== Number(orderid)) {
        res.status(401).json({ success: false, message: 'Invalid download token' });
        return;
      }
    } catch (err) {
      res.status(401).json({ success: false, message: 'Invalid or expired download token' });
      return;
    }

    // Redirect to the actual PDF URL
    const host = `${req.protocol}://${req.get('host')}`;
    const pdfUrl = `${host}/api/orders/${orderid}/receipt.pdf?download_token=${encodeURIComponent(token)}`;
    res.redirect(302, pdfUrl);
  } catch (error) {
    console.error('Receipt redirect error:', error);
    res.status(500).json({ success: false, message: 'Failed to redirect to receipt' });
  }
});

/**
 * @swagger
 * /api/orders/{orderid}/receipt.pdf:
 *   get:
 *     summary: Get a PDF receipt for an order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: orderid
 *         required: true
 *         schema:
 *           type: integer
 *         description: Order ID
 *     responses:
 *       200:
 *         description: PDF file of the receipt
 *         content:
 *           application/pdf:
 *             schema:
 *               type: string
 *               format: binary
 */

// Generate PDF receipt
router.get('/:orderid/receipt.pdf', validateIdParam, async (req: Request, res: Response): Promise<void> => {
  try {
    const { orderid } = req.params;

    // Reuse the same HTML generation logic
    const orderResult = await query(`
      SELECT o.orderid, o.customerid, o.total_amount, o.status, o.created_at, o.updated_at,
             COALESCE(c.name, 'Deleted Customer') as customer_name, c.email as customer_email, c.phone as customer_phone
      FROM orders o
      LEFT JOIN customers c ON o.customerid = c.customerid
      WHERE o.orderid = ?
    `, [orderid]);

    if (orderResult.rows.length === 0) {
      res.status(404).json({ success: false, message: 'Order not found' });
      return;
    }

    const itemsResult = await query(`
      SELECT oi.itemid, oi.quantity, oi.price, oi.note, i.name, i.category
      FROM order_items oi
      JOIN items i ON oi.itemid = i.itemid
      WHERE oi.orderid = ?
    `, [orderid]);

    const settingsResult = await query(`SELECT shop_name, shop_logo, receipt_footer, currency FROM settings LIMIT 1`);
    const settings = (settingsResult.rows && settingsResult.rows[0]) ? settingsResult.rows[0] : { shop_name: 'Shop', receipt_footer: '', shop_logo: null };

    const order = {
      ...orderResult.rows[0],
      items: itemsResult.rows.map((item: any) => ({
        itemid: item.itemid,
        quantity: item.quantity,
        price: parseFloat(item.price),
        name: item.name,
        category: item.category,
        note: item.note
      }))
    };

    // Build HTML including absolute logo URL
    const logoUrl = settings.shop_logo ? `${req.protocol}://${req.get('host')}${settings.shop_logo}` : null;
    const htmlItems = order.items.map((it: any) => `
      <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px dashed #eee;">
        <div style="flex:1">${it.name} × ${it.quantity}</div>
        <div style="min-width:80px;text-align:right">${(Number(it.price) * it.quantity).toFixed(3)}</div>
      </div>`).join('');

    const html = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Receipt ${order.orderid}</title></head><body>
      <div id="receipt" style="max-width:400px;margin:20px auto;padding:20px;background:#fff;border:1px solid #eee;border-radius:8px;">
        ${logoUrl ? `<div style="text-align:center;margin-bottom:10px"><img src="${logoUrl}" alt="Logo" style="max-width:150px;max-height:90px;object-fit:contain;"/></div>` : ''}
        <h2 style="margin:0 0 8px 0;text-align:center">${settings.shop_name || 'Shop'}</h2>
        <div style="text-align:center;color:#6b7280;margin-bottom:12px">${new Date(order.created_at).toLocaleString()}</div>
        <div style="font-weight:700;display:flex;justify-content:space-between;margin-bottom:8px;"> <div>Order #${order.orderid}</div> <div>${order.status}</div> </div>
        ${htmlItems}
        <div style="display:flex;justify-content:space-between;font-weight:700;margin-top:12px"> <div>Total</div> <div>${Number(order.total_amount).toFixed(3)}</div> </div>
        <div style="text-align:center;color:#6b7280;margin-top:12px">${settings.receipt_footer || ''}</div>
      </div>
    </body></html>`;

    // Generate PDF with puppeteer
    // Allow overriding executable path for environments where Chromium isn't bundled (e.g., Docker images, CI)
    let browser: any = null;
    // Authenticate request via one of: Authorization header OR download_token query parameter OR access_token query parameter
    try {
      let jwtToken: string | null = null;
      const authHeader = req.headers.authorization;
      if (authHeader && authHeader.startsWith('Bearer ')) {
        jwtToken = authHeader.split(' ')[1];
      } else if (req.query && req.query.access_token) {
        jwtToken = String(req.query.access_token);
      }
      const downloadToken = req.query && req.query.download_token ? String(req.query.download_token) : null;

      const secret = process.env.JWT_SECRET || 'fallback_secret';
      let valid = false;

      if (jwtToken) {
        try {
          jwt.verify(jwtToken, secret);
          valid = true;
        } catch (e) {
          // Not valid; continue to check download token
        }
      }

      if (!valid && downloadToken) {
        try {
          const payload = jwt.verify(downloadToken, secret) as any;
          if (payload.type === 'download' && Number(payload.orderid) === Number(orderid)) {
            valid = true;
          }
        } catch (e) {
          // invalid
          valid = false;
        }
      }

      if (!valid) {
        res.status(401).json({ success: false, message: 'Access token required or download token invalid' });
        return;
      }

      const puppeteer = await import('puppeteer');
      const launchOptions: any = {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      };
      const execPath = process.env.PUPPETEER_EXECUTABLE_PATH;
      if (execPath) {
        launchOptions.executablePath = execPath;
      }

      try {
        browser = await puppeteer.launch(launchOptions);
      } catch (launchError) {
        console.error('Puppeteer launch failed:', launchError);
        res.status(500).json({ success: false, message: 'Failed to launch headless browser for PDF generation', error: launchError instanceof Error ? launchError.message : String(launchError) });
        return;
      }

      const page = await browser.newPage();
      await page.setContent(html, { waitUntil: 'networkidle0' });
      const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true, margin: { top: '10mm', bottom: '10mm', left: '10mm', right: '10mm' } });

      // Log for diagnostics
      console.log(`Generated PDF for order ${order.orderid} (size: ${pdfBuffer.length} bytes)`);

      // Set headers explicitly so download managers can correctly detect the content size
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=receipt-${order.orderid}.pdf`);
      res.setHeader('Content-Length', String(pdfBuffer.length));
      res.setHeader('Accept-Ranges', 'bytes');
      res.status(200).send(pdfBuffer);
    } finally {
      try {
        if (browser) await browser.close();
      } catch (closeErr) {
        console.error('Error closing browser:', closeErr);
      }
    }
  } catch (error) {
    // Log full error stack for debugging, but avoid leaking stack in production
    if (error instanceof Error) {
      console.error('Get order PDF receipt error:', error.stack || error.message);
    } else {
      console.error('Get order PDF receipt error:', error);
    }
    const devError = process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : String(error)) : 'Failed to generate receipt PDF';
    res.status(500).json({ success: false, message: devError });
  }
});

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - items
 *             properties:
 *               customerid:
 *                 type: integer
 *                 description: Customer ID (optional)
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required:
 *                     - itemid
 *                     - quantity
 *                   properties:
 *                     itemid:
 *                       type: integer
 *                       description: Item ID
 *                     quantity:
 *                       type: integer
 *                       description: Quantity ordered
 *     responses:
 *       201:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Order created successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Order'
 *       400:
 *         description: Validation error or insufficient stock
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/', authenticateToken, validateOrderCreation, handleValidationErrors, async (req: Request, res: Response): Promise<void> => {

  const client = await getClient();
  let committed = false;

  try {
    await client.beginTransaction();

    const { customerid, branchid, items }: CreateOrderRequest = req.body;

    // Validate items exist and have sufficient stock
    for (const item of items) {
      const [itemRows] = await client.execute(`
        SELECT itemid, name, price, stock_quantity
        FROM items
        WHERE itemid = ?
      `, [item.itemid]);

      const rows = itemRows as any[];
      if (rows.length === 0) {
          await client.rollback();
        res.status(400).json({
          success: false,
          message: `Item with ID ${item.itemid} not found`
        });
        return;
      }

      if (rows[0].stock_quantity < item.quantity) {
          await client.rollback();
        res.status(400).json({
          success: false,
          message: `Insufficient stock for item: ${rows[0].name}`
        });
        return;
      }
    }

    // Calculate total amount
    let totalAmount = 0;
    const orderItemsWithPrices: OrderItem[] = [];

    for (const item of items) {
      // Use the price from the request if provided (custom price), otherwise fetch from database
      let price: number;
      
      if (item.price !== undefined && item.price !== null) {
        // Custom price provided from frontend
        price = typeof item.price === 'number' ? item.price : parseFloat(String(item.price));
      } else {
        // Fetch default price from database
        const [itemRows] = await client.execute(`
          SELECT price FROM items WHERE itemid = ?
        `, [item.itemid]);

        const rows = itemRows as any[];
        price = parseFloat(rows[0].price);
      }

      totalAmount += price * item.quantity;

      orderItemsWithPrices.push({
        itemid: item.itemid,
        quantity: item.quantity,
        price: price,
        note: item.note
      });
    }

    // Create order
    await client.execute(`
      INSERT INTO orders (customerid, branchid, total_amount, status)
      VALUES (?, ?, ?, 'pending')
    `, [customerid, branchid, totalAmount]);

    // Get the inserted order ID
    const [orderIdResult] = await client.execute('SELECT LAST_INSERT_ID() as orderid');
    const orderIdRows = orderIdResult as any[];
    const newOrderId = orderIdRows[0].orderid;

    // Create order items and update stock (reserve stock for pending order)
    for (const item of orderItemsWithPrices) {
      await client.execute(`
        INSERT INTO order_items (orderid, itemid, quantity, price, note)
        VALUES (?, ?, ?, ?, ?)
      `, [newOrderId, item.itemid, item.quantity, item.price, item.note || null]);

      // Update stock quantity
      await client.execute(`
        UPDATE items
        SET stock_quantity = stock_quantity - ?, updated_at = CURRENT_TIMESTAMP
        WHERE itemid = ?
      `, [item.quantity, item.itemid]);
    }

    await client.commit();
    committed = true;

    // Get complete order with items for response
    const [orderRows] = await client.execute(`
      SELECT orderid, customerid, total_amount, status, created_at, updated_at
      FROM orders
      WHERE orderid = ?
    `, [newOrderId]);

    const orderData = orderRows as any[];
    const completeOrder = {
      ...orderData[0],
      items: orderItemsWithPrices
    };

    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      data: completeOrder as Order
    });
  } catch (error) {
    try {
      if (!committed) {
        await client.rollback();
      }
    } catch (rollbackError) {
      console.error('Rollback error on create order:', rollbackError);
    }
    console.error('Create order error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create order'
    });
  } finally {
    client.release();
  }
});

/**
 * @swagger
 * /api/orders/{orderid}:
 *   put:
 *     summary: Update an order status
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: orderid
 *         required: true
 *         schema:
 *           type: integer
 *         description: Order ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [pending, completed, cancelled]
 *                 description: Order status
 *     responses:
 *       200:
 *         description: Order updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Order updated successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Order'
 *       403:
 *         description: Access denied
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Order not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.put('/:orderid', authenticateToken, requireAdminForDelete, validateIdParam, validateOrderUpdate, handleValidationErrors, async (req: Request, res: Response): Promise<void> => {
  let client: any = null;
  let committed = false;
  try {
    const { orderid } = req.params;
    const { status }: UpdateOrderRequest = req.body;

    client = await getClient();
    // Begin transaction using the dedicated API (prevent prepared statement issues)
    await client.beginTransaction();

    // Get current order status and items
    const [orderRowsPrev] = await client.execute(`
      SELECT status FROM orders WHERE orderid = ?
    `, [orderid]);

    const prevOrderRows = orderRowsPrev as any[];
    if (prevOrderRows.length === 0) {
      await client.rollback();
      res.status(404).json({ success: false, message: 'Order not found' });
      client.release();
      return;
    }

    const prevStatus = prevOrderRows[0].status as string;

    // Update status
    const [updateRes] = await client.execute(`
      UPDATE orders
      SET status = ?, updated_at = CURRENT_TIMESTAMP
      WHERE orderid = ?
    `, [status, orderid]);

    const updateResAny = updateRes as any;
    if (updateResAny.affectedRows === 0) {
      await client.rollback();
      res.status(404).json({ success: false, message: 'Order not found' });
      client.release();
      return;
    }

    // If transitioning to cancelled from pending/completed — restore stock
    if (status === 'cancelled' && prevStatus !== 'cancelled') {
      // fetch items
      const [itemsRows] = await client.execute(`SELECT itemid, quantity FROM order_items WHERE orderid = ?`, [orderid]);
      const itemsData = itemsRows as any[];
      for (const it of itemsData) {
        await client.execute(`
          UPDATE items SET stock_quantity = stock_quantity + ?, updated_at = CURRENT_TIMESTAMP WHERE itemid = ?
        `, [it.quantity, it.itemid]);
      }
    }

    // If transitioning from cancelled back to pending/completed — reserve stock again
    if ((prevStatus === 'cancelled') && (status === 'pending' || status === 'completed')) {
      // Check if stock is available for each item and reduce
      const [itemsRows] = await client.execute(`SELECT itemid, quantity FROM order_items WHERE orderid = ?`, [orderid]);
      const itemsData = itemsRows as any[];
      for (const it of itemsData) {
        const [stockRows] = await client.execute(`SELECT stock_quantity FROM items WHERE itemid = ?`, [it.itemid]);
        const stock = (stockRows as any[])[0]?.stock_quantity ?? 0;
        if (stock < it.quantity) {
          // Insufficient stock to re-reserve
          await client.rollback();
          res.status(400).json({ success: false, message: `Insufficient stock for item id ${it.itemid} to set status to ${status}` });
          client.release();
          return;
        }
      }
      for (const it of itemsData) {
        await client.execute(`
          UPDATE items SET stock_quantity = stock_quantity - ?, updated_at = CURRENT_TIMESTAMP WHERE itemid = ?
        `, [it.quantity, it.itemid]);
      }
    }

    // If transitioning to completed — no action needed if stock already reserved
    // Commit transaction
    await client.commit();
    committed = true;

    // Get updated order
    const [orderRows] = await client.execute(`
      SELECT orderid, customerid, total_amount, status, created_at, updated_at
      FROM orders
      WHERE orderid = ?
    `, [orderid]);

    // Get order items for complete response
    const itemsResult = await query(`
      SELECT oi.itemid, oi.quantity, oi.price, oi.note, i.name, i.category
      FROM order_items oi
      JOIN items i ON oi.itemid = i.itemid
      WHERE oi.orderid = ?
    `, [orderid]);

    const orderData = orderRows as any[];
    const order = {
      ...orderData[0],
      items: itemsResult.rows.map((item: any) => ({
        itemid: item.itemid,
        quantity: item.quantity,
        price: parseFloat(item.price),
        name: item.name,
        category: item.category,
        note: item.note
      }))
    };

    res.json({
      success: true,
      message: 'Order updated successfully',
      data: order as Order
    });
  } catch (error) {
    console.error('Update order error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update order'
    });
  } finally {
    if (client) {
      try {
        if (!committed) {
          await client.rollback();
        }
      } catch (rollbackError) {
        console.error('Rollback error:', rollbackError);
      }
      client.release();
    }
  }
});

/**
 * @swagger
 * /api/orders/{orderid}:
 *   delete:
 *     summary: Delete an order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: orderid
 *         required: true
 *         schema:
 *           type: integer
 *         description: Order ID
 *     responses:
 *       200:
 *         description: Order deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Order deleted successfully"
 *       403:
 *         description: Admin access required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Order not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.delete('/:orderid', authenticateToken, requireAdmin, validateIdParam, async (req: Request, res: Response): Promise<void> => {
  const client = await getClient();

  try {
    // await client.execute('START TRANSACTION');

    const { orderid } = req.params;

    // Get order items before deletion to restore stock
    const [itemsRows] = await client.execute(`
      SELECT itemid, quantity FROM order_items WHERE orderid = ?
    `, [orderid]);

    const itemsData = itemsRows as any[];
    // Restore stock quantities
    for (const item of itemsData) {
      await client.execute(`
        UPDATE items
        SET stock_quantity = stock_quantity + ?, updated_at = CURRENT_TIMESTAMP
        WHERE itemid = ?
      `, [item.quantity, item.itemid]);
    }

    // Delete order (cascade will delete order_items)
    const [result] = await client.execute(`
      DELETE FROM orders
      WHERE orderid = ?
    `, [orderid]);

    const deleteResult = result as any;
    if (deleteResult.affectedRows === 0) {
      // await client.execute('ROLLBACK');
      res.status(404).json({
        success: false,
        message: 'Order not found'
      });
      return;
    }

    // await client.execute('COMMIT');

    res.json({
      success: true,
      message: 'Order deleted successfully'
    });
  } catch (error) {
    // await client.execute('ROLLBACK');
    console.error('Delete order error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete order'
    });
  } finally {
    client.release();
  }
});

export default router;