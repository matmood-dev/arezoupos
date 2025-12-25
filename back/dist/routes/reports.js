import express from 'express';
import { query } from '../config/database.js';
import { authenticateToken, requireAdmin } from '../middleware/auth.js';
const router = express.Router();
router.use(express.json());
/**
 * GET /api/reports
 * Return aggregated statistics for the POS system: counts, sales, top items, low stock
 */
router.get('/', authenticateToken, requireAdmin, async (req, res) => {
    try {
        // Totals
        const users = await query(`SELECT COUNT(*) AS total_users FROM users`);
        const customers = await query(`SELECT COUNT(*) AS total_customers FROM customers`);
        const items = await query(`SELECT COUNT(*) AS total_items FROM items`);
        const orders = await query(`SELECT COUNT(*) AS total_orders FROM orders`);
        // Total revenue (only completed orders)
        const revenue = await query(`SELECT COALESCE(SUM(total_amount), 0) AS total_revenue FROM orders WHERE status = 'completed'`);
        // Top selling items
        const topItemsResult = await query(`SELECT i.itemid, i.name, COALESCE(SUM(oi.quantity), 0) AS total_quantity
       FROM order_items oi
       JOIN items i ON oi.itemid = i.itemid
       GROUP BY oi.itemid
       ORDER BY total_quantity DESC
       LIMIT 5`);
        // Sales by day for last 30 days
        const salesByDayResult = await query(`SELECT DATE(o.created_at) AS date, COALESCE(SUM(o.total_amount), 0) AS total_sales
       FROM orders o
       WHERE o.status = 'completed' AND o.created_at >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)
       GROUP BY DATE(o.created_at)
       ORDER BY DATE(o.created_at)`);
        // Low stock items (threshold default 5)
        const threshold = parseInt(req.query.threshold || '5', 10);
        const lowStockResult = await query(`SELECT itemid, name, stock_quantity FROM items WHERE stock_quantity <= ? ORDER BY stock_quantity ASC LIMIT 10`, [threshold]);
        // Recent orders
        const recentOrdersResult = await query(`SELECT o.orderid, o.total_amount, o.status, o.created_at, c.name as customer_name FROM orders o LEFT JOIN customers c ON o.customerid = c.customerid ORDER BY o.created_at DESC LIMIT 5`);
        return res.json({
            success: true,
            data: {
                totals: {
                    users: users.rows[0].total_users ?? 0,
                    customers: customers.rows[0].total_customers ?? 0,
                    items: items.rows[0].total_items ?? 0,
                    orders: orders.rows[0].total_orders ?? 0
                },
                revenue: revenue.rows[0].total_revenue ?? 0,
                topItems: topItemsResult.rows,
                salesByDay: salesByDayResult.rows,
                lowStock: lowStockResult.rows,
                recentOrders: recentOrdersResult.rows
            }
        });
    }
    catch (error) {
        console.error('Reports error:', error);
        return res.status(500).json({ success: false, message: 'Failed to generate reports' });
    }
});
export default router;
//# sourceMappingURL=reports.js.map