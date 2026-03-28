// 🚀 Peruvian Food API v2.0 - Complete CRUD with Security
import express from 'express';
import foodsDB from './data/foods.js';
import { createRateLimit, requestLogger, securityHeaders } from './middleware/security.js';
import foodRouter from './routes/foodRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// 🔒 Security middleware (apply first)
app.use(securityHeaders);
app.use(requestLogger);

// 📝 Parse JSON requests (needed for POST/PUT)
app.use(express.json({ limit: '10mb' }));

// 🚦 Rate limiting - different limits for different endpoints
app.use('/api/foods', createRateLimit(15 * 60 * 1000, 100)); // 100 requests per 15 minutes
app.use('/', createRateLimit(5 * 60 * 1000, 20)); // 20 requests per 5 minutes for docs

// 🏠 API Documentation
app.get('/', (req, res) => {
  res.json({
    message: "🇵🇪 Welcome to Peruvian Food API v2.0",
    version: "2.0.0",
    description: "Complete CRUD API for Peruvian cuisine! 🍽️",
    features: [
      "✅ Full CRUD operations (Create, Read, Update, Delete)",
      "🔍 Advanced filtering and search",
      "🛡️ Security middleware and rate limiting",
      "📝 Data validation with detailed error messages",
      "💾 Persistent storage with JSON database",
      "📊 Real-time statistics",
      "🏥 Health monitoring"
    ],
    endpoints: {
      "📋 All foods": "/api/foods",
      "🔍 Food by ID": "/api/foods/{id}",
      "➕ Create food": "/api/foods",
      "✏️ Update food": "/api/foods/{id}",
      "❌ Delete food": "/api/foods/{id}",
      "📊 Statistics": "/api/stats",
      "🏥 Health check": "/health"
    },
    examples: {
      "Get spicy foods": "/api/foods?spicy=true",
      "Create new food": "/api/foods + JSON body",
      "Update food": "/api/foods/1 + JSON body",
      "Delete food": "/api/foods/1"
    },
    security: {
      "Rate limiting": "100 requests per 15 minutes",
      "Request logging": "All requests logged with timestamp",
      "Data validation": "Joi schema validation",
      "Security headers": "Helmet protection"
    }
  });
});

// 📊 Dynamic API Stats
app.get('/api/stats', async (req, res) => {
  try {
    const stats = await foodsDB.getStats();
    res.json({
      ...stats,
      lastUpdated: new Date().toISOString(),
      apiVersion: "2.0.0"
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to get stats! 📊",
      message: error.message
    });
  }
});

// 🛣️ Food routes
app.use('/api/foods', foodRouter);

// 🏥 Health check with database status
app.get('/health', async (req, res) => {
  try {
    // Test database connection
    const foods = await foodsDB.getAllFoods();

    res.json({
      status: "healthy! 💚",
      timestamp: new Date().toISOString(),
      uptime: Math.floor(process.uptime()),
      database: {
        status: "connected",
        totalRecords: foods.length
      },
      memory: {
        used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024) + " MB",
        total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024) + " MB"
      }
    });
  } catch (error) {
    res.status(503).json({
      status: "unhealthy! ❌",
      timestamp: new Date().toISOString(),
      error: error.message
    });
  }
});

// ❌ 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found! 🔍",
    message: `Cannot ${req.method} ${req.originalUrl}`,
    suggestion: "Visit / for API documentation",
    availableRoutes: [
      "GET /",
      "GET /api/foods",
      "POST /api/foods",
      "GET /api/foods/:id",
      "PUT /api/foods/:id",
      "DELETE /api/foods/:id"
    ]
  });
});

// 🚨 Global error handler
app.use((error, req, res, next) => {
  console.error('🚨 Global Error:', error);
  res.status(500).json({
    error: "Internal server error! 🚨",
    message: "Something went wrong on our end",
    timestamp: new Date().toISOString()
  });
});

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`🚀 Peruvian Food API v2.0 running on http://localhost:${PORT}`);
  console.log(`📋 Documentation: http://localhost:${PORT}/`);
  console.log(`🍽️ CRUD endpoints: http://localhost:${PORT}/api/foods`);
  console.log(`📊 Statistics: http://localhost:${PORT}/api/stats`);
  console.log(`🏥 Health check: http://localhost:${PORT}/health`);
  console.log(`🛡️ Security: Rate limiting & validation enabled`);
  console.log(`💾 Database: JSON file persistence active`);
  console.log(`🛠️ Development mode: npm run dev`);
  console.log(`🎉 Ready for full CRUD operations!`);
});