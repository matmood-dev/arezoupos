import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './utils/swagger.js';
// Import routes
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import itemRoutes from './routes/items.js';
import customerRoutes from './routes/customers.js';
import orderRoutes from './routes/orders.js';
import settingsRoutes from './routes/settings.js';
// Import database connection
import { connectDB } from './config/database.js';
// Load environment variables
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Rate limiting
const limiter = rateLimit({
    windowMs: (parseInt(process.env.RATE_LIMIT_WINDOW || '15', 10)) * 60 * 1000, // 15 minutes
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100', 10), // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
});
// Middleware
app.use(helmet({
    contentSecurityPolicy: false, // Disable CSP for development
    crossOriginResourcePolicy: false, // Disable CORP for development
    crossOriginOpenerPolicy: false, // Disable COOP for development
})); // Security headers
app.use(cors({
    origin: true, // Allow all origins in development
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
})); // Enable CORS
app.use(limiter); // Rate limiting
// Parse JSON bodies, but skip for multipart/form-data
app.use((req, res, next) => {
    const contentType = req.headers['content-type'] || '';
    if (contentType.includes('multipart/form-data')) {
        return next();
    }
    express.json({ limit: '10mb' })(req, res, next);
});
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, '../uploads'), {
    setHeaders: (res, path) => {
        res.set('Access-Control-Allow-Origin', '*');
        res.set('Access-Control-Allow-Methods', 'GET');
        res.set('Access-Control-Allow-Headers', 'Content-Type');
        res.set('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year
    }
}));
// Swagger documentation
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'POS Backend API is running',
        data: {
            timestamp: new Date().toISOString(),
            environment: process.env.NODE_ENV || 'development'
        }
    });
});
// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/settings', settingsRoutes);
// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'API endpoint not found'
    });
});
// Global error handler
const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);
    // Mongoose validation error
    if (err.name === 'ValidationError') {
        const errors = Object.values(err.errors).map((val) => val.message);
        res.status(400).json({
            success: false,
            message: 'Validation Error',
            data: { errors }
        });
        return;
    }
    // JWT errors
    if (err.name === 'JsonWebTokenError') {
        res.status(401).json({
            success: false,
            message: 'Invalid token'
        });
        return;
    }
    if (err.name === 'TokenExpiredError') {
        res.status(401).json({
            success: false,
            message: 'Token expired'
        });
        return;
    }
    // Default error
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
        ...(process.env.NODE_ENV === 'development' && { data: { stack: err.stack } })
    });
};
app.use(errorHandler);
// Connect to database and start server
const startServer = async () => {
    try {
        // Connect to database
        await connectDB();
        // Start server
        app.listen(PORT, () => {
            console.log(`🚀 POS Backend API is running on port ${PORT}`);
            console.log(`📚 API Documentation available at http://localhost:${PORT}/api/docs`);
            console.log(`🔍 Health check at http://localhost:${PORT}/health`);
            console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
        });
    }
    catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
};
startServer();
export default app;
//# sourceMappingURL=server.js.map