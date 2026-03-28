# 🚀 Node.js API Nivel 2 - CRUD & Middleware

¡Construye APIs REST completas con operaciones CRUD y middleware profesional! 🎯

> ⚠️ **PREREQUISITO:** Debes haber completado el **Nivel 1** de esta serie. Si no lo has hecho, [regresa al Nivel 1](../o12-nodejs-y-npm) primero.

---

## 🎓 ¿Qué aprenderás en Nivel 2?

Ahora que dominas los **GET endpoints**, vamos a crear una **API REST completa** con:

- ✏️ **CRUD completo**: POST, PUT, DELETE (Crear, Actualizar, Eliminar)
- 🛡️ **Middleware esencial**: CORS, validaciones, logging, seguridad
- 📝 **Persistencia real**: Guardar cambios en archivos JSON
- 🔐 **Seguridad básica**: Rate limiting y validaciones robustas
- 🌐 **Lista para frontends**: CORS configurado para React, Vue, etc.
- 🎯 **API REST profesional**: Estándares HTTP y mejores prácticas

> 💡 **Analogía:** Si en Nivel 1 creaste una "api de lectura", ahora crearás una "api completa" donde puedes agregarlos, editarlos y eliminarlos, ¡y cualquier aplicación web puede usarla!

---

## 0. 🔗 Continuando desde Nivel 1

### 📂 Tu estructura actual debería ser:

```
peruvian-food-api/
├── src/
│   ├── data/
│   │   └── foods.js
│   ├── routes/
│   │   └── foodRoutes.js
│   └── index.js
├── .gitignore
└── package.json
```

### ✅ Verificar que funciona

```bash
# 🧪 Test your Level 1 API
npm run dev

# 🌐 In another terminal, test endpoints
curl http://localhost:3000/api/foods
curl http://localhost:3000/api/foods/1
```

Si todo funciona correctamente, ¡continuemos! 🚀

---

## 1. 🏗️ Preparando el proyecto para CRUD

### 📦 Dependencias necesarias

```bash
# 🔒 Security, utilities and CORS dependencies
npm install express-rate-limit helmet joi cors
```

> 💡 **¿Qué hace cada dependencia?**
> - 🌐 **cors**: Permite que frontends (React, Vue, etc.) consuman tu API
> - 🛡️ **express-rate-limit**: Limita requests por IP (previene ataques)
> - 🔒 **helmet**: Headers de seguridad automáticos
> - ✅ **joi**: Validación de datos súper fácil y potente

### 📝 Package.json actualizado

Tu `package.json` ahora se verá así:

```json
{
  "name": "peruvian-food-api",
  "version": "2.0.0",
  "type": "module",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "express-rate-limit": "^7.1.5",
    "helmet": "^7.1.0",
    "joi": "^17.11.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

### 📂 Estructura de carpetas

```bash
# 📁 Create organized folders
mkdir -p src/middleware src/utils src/validators

# 🔍 Check structure
ls -la src/
```

Estructura final:
```
peruvian-food-api/
├── src/
│   ├── data/           # 📊 Data (foods.js + foodsDatabase.json)
│   ├── routes/         # 🛣️ Routes/endpoints (foodRoutes.js)
│   ├── middleware/     # 🛡️ Middleware (CORS, security, validations)
│   ├── validators/     # ✅ Data validations
│   ├── utils/          # 🔧 Utilities (file handling)
│   └── index.js        # 🚀 Main server
├── .gitignore
└── package.json
```

---

## 2. 🔧 Utilidades para persistencia

Crea `src/utils/fileManager.js`:

```javascript
// 🗃️ File Manager - Handles JSON files safely and simply
import fs from 'fs/promises';

class FileManager {
  constructor(filePath) {
    this.filePath = filePath;
  }

  // 📖 Read data from JSON file
  async readData() {
    try {
      const data = await fs.readFile(this.filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      // If file doesn't exist, return empty array
      if (error.code === 'ENOENT') {
        return [];
      }
      throw new Error(`Failed to read file: ${error.message}`);
    }
  }

  // 💾 Write data to JSON file (with pretty formatting)
  async writeData(data) {
    try {
      const jsonData = JSON.stringify(data, null, 2);
      await fs.writeFile(this.filePath, jsonData, 'utf8');
      return true;
    } catch (error) {
      throw new Error(`Failed to write file: ${error.message}`);
    }
  }

  // ✨ Create file with initial data if it doesn't exist
  async initializeFile(defaultData) {
    try {
      await fs.access(this.filePath);
      // File exists, do nothing
    } catch (error) {
      // File doesn't exist, create it with default data
      await this.writeData(defaultData);
    }
  }
}

export default FileManager;
```

---

## 3. ✅ Validadores

Crea `src/validators/foodValidator.js`:

```javascript
// ✅ Food Validator - Validates data using Joi
import Joi from 'joi';

// 🍽️ Schema for creating new food (all fields required)
const createFoodSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(50)
    .required()
    .messages({
      'string.min': 'Name must be at least 2 characters long 📝',
      'string.max': 'Name cannot exceed 50 characters ✂️',
      'any.required': 'Name is required 🏷️'
    }),
  
  category: Joi.string()
    .valid('main', 'appetizer', 'dessert', 'drink')
    .required()
    .messages({
      'any.only': 'Category must be: main, appetizer, dessert, or drink 🍽️',
      'any.required': 'Category is required 🏷️'
    }),
  
  description: Joi.string()
    .min(10)
    .max(200)
    .required()
    .messages({
      'string.min': 'Description must be at least 10 characters long 📝',
      'string.max': 'Description cannot exceed 200 characters ✂️',
      'any.required': 'Description is required 📖'
    }),
  
  ingredients: Joi.array()
    .items(Joi.string().min(1))
    .min(1)
    .max(15)
    .required()
    .messages({
      'array.min': 'At least 1 ingredient is required 🥕',
      'array.max': 'Cannot have more than 15 ingredients 🛑',
      'any.required': 'Ingredients are required 🧄'
    }),
  
  isSpicy: Joi.boolean()
    .required()
    .messages({
      'any.required': 'Spicy status is required 🌶️'
    }),
  
  price: Joi.number()
    .positive()
    .max(999.99)
    .required()
    .messages({
      'number.positive': 'Price must be a positive number 💰',
      'number.max': 'Price cannot exceed $999.99 💸',
      'any.required': 'Price is required 💵'
    }),
  
  imageUrl: Joi.string()
    .uri()
    .required()
    .messages({
      'string.uri': 'Image URL must be valid 🖼️',
      'any.required': 'Image URL is required 📸'
    })
});

// 🔄 Schema for updating food (all fields optional)
const updateFoodSchema = Joi.object({
  name: Joi.string().min(2).max(50),
  category: Joi.string().valid('main', 'appetizer', 'dessert', 'drink'),
  description: Joi.string().min(10).max(200),
  ingredients: Joi.array().items(Joi.string().min(1)).min(1).max(15),
  isSpicy: Joi.boolean(),
  price: Joi.number().positive().max(999.99),
  imageUrl: Joi.string().uri()
}).min(1); // At least 1 field must be provided

// 🔍 Validation functions
export const validateCreateFood = (data) => {
  return createFoodSchema.validate(data, { abortEarly: false });
};

export const validateUpdateFood = (data) => {
  return updateFoodSchema.validate(data, { abortEarly: false });
};
```

---

## 4. 🛡️ Middleware

Crea `src/middleware/security.js`:

```javascript
// 🛡️ Security Middleware - Basic security measures + CORS
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cors from 'cors';

// 🌐 CORS Configuration - CRITICAL for frontends
export const corsConfig = cors({
  origin: [
    'http://localhost:3000',    // React dev server
    'http://localhost:3001',    // Backup React port  
    'http://localhost:5173',    // Vite dev server (Vue, React)
    'http://localhost:4200',    // Angular dev server
    'http://127.0.0.1:5500',    // Live Server (HTML/JS)
    'https://your-frontend.vercel.app', // Production (replace with your domain)
  ],
  credentials: true, // Allow cookies/auth headers
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
});

// 🚦 Rate limiting - Prevents abuse
export const createRateLimit = (windowMs = 15 * 60 * 1000, max = 100) => {
  return rateLimit({
    windowMs, // Time window in milliseconds
    max, // Maximum requests per window
    message: {
      error: "Too many requests! 🚫",
      message: `You have exceeded the limit of ${max} requests per ${windowMs / 60000} minutes`,
      retryAfter: Math.ceil(windowMs / 60000),
      tip: "Please wait before making more requests ⏳"
    },
    standardHeaders: true, // Headers with rate limit info
    legacyHeaders: false
  });
};

// 🔒 Basic security headers
export const securityHeaders = helmet({
  contentSecurityPolicy: false, // Disabled for APIs
  crossOriginEmbedderPolicy: false // Allow embedding
});

// 📝 Request logging (simple but effective)
export const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;
  const ip = req.ip || req.connection.remoteAddress;
  
  console.log(`🌐 [${timestamp}] ${method} ${url} - IP: ${ip}`);
  
  // Measure response time
  const startTime = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - startTime;
    const status = res.statusCode;
    const statusEmoji = status >= 400 ? '❌' : status >= 300 ? '🔄' : '✅';
    
    console.log(`${statusEmoji} [${timestamp}] ${method} ${url} - ${status} - ${duration}ms`);
  });
  
  next();
};

// ✅ Validation middleware
export const validateData = (validationFunction) => {
  return (req, res, next) => {
    const { error, value } = validationFunction(req.body);
    
    if (error) {
      return res.status(400).json({
        error: "Validation failed! 📝",
        message: "Please check your data and try again",
        details: error.details.map(detail => ({
          field: detail.path.join('.'),
          message: detail.message,
          value: detail.context.value
        }))
      });
    }
    
    // Replace req.body with validated data
    req.body = value;
    next();
  };
};
```

---

## 5. 📊 Modelo de datos

Actualiza `src/data/foods.js`:

```javascript
// 🍽️ Foods Data Manager - Handles CRUD operations with file persistence
import FileManager from '../utils/fileManager.js';
import path from 'path';

// 📁 Database file path
const DB_PATH = path.join(process.cwd(), 'src', 'data', 'foodsDatabase.json');
const fileManager = new FileManager(DB_PATH);

// 🌟 Initial data (for initialization only)
const initialFoods = [
  {
    id: 1,
    name: "Ceviche",
    category: "main",
    description: "Fresh raw fish cured in citrus juices with onions and chili",
    ingredients: ["fish", "lime juice", "red onions", "chili", "sweet potato"],
    isSpicy: true,
    price: 25,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/78/Cebiche_de_corvina.JPG",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 2,
    name: "Lomo Saltado",
    category: "main", 
    description: "Stir-fried beef with vegetables and french fries served with rice",
    ingredients: ["beef", "tomatoes", "onions", "soy sauce", "potatoes", "rice"],
    isSpicy: false,
    price: 22,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Lomo-saltado-perudelights.jpg",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 3,
    name: "Ají de Gallina",
    category: "main",
    description: "Creamy chicken stew with yellow chili sauce", 
    ingredients: ["chicken", "yellow chili", "bread", "milk", "cheese", "walnuts"],
    isSpicy: true,
    price: 20,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Aj%C3%AD_de_gallina.jpg/800px-Aj%C3%AD_de_gallina.jpg",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// 🎯 Foods Database Class
class FoodsDatabase {
  constructor() {
    this.init();
  }

  // 🚀 Initialize database file
  async init() {
    await fileManager.initializeFile(initialFoods);
  }

  // 📖 Get all foods
  async getAllFoods() {
    return await fileManager.readData();
  }

  // 🔍 Get food by ID
  async getFoodById(id) {
    const foods = await this.getAllFoods();
    return foods.find(food => food.id === id);
  }

  // ➕ Create new food
  async createFood(foodData) {
    const foods = await this.getAllFoods();
    
    // 🆔 Generate new ID (max + 1)
    const newId = foods.length > 0 ? Math.max(...foods.map(f => f.id)) + 1 : 1;
    
    const newFood = {
      id: newId,
      ...foodData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    foods.push(newFood);
    await fileManager.writeData(foods);
    
    return newFood;
  }

  // ✏️ Update existing food
  async updateFood(id, updateData) {
    const foods = await this.getAllFoods();
    const foodIndex = foods.findIndex(food => food.id === id);
    
    if (foodIndex === -1) {
      return null;
    }
    
    // 🔄 Merge existing data with updates
    foods[foodIndex] = {
      ...foods[foodIndex],
      ...updateData,
      updatedAt: new Date().toISOString()
    };
    
    await fileManager.writeData(foods);
    return foods[foodIndex];
  }

  // ❌ Delete food
  async deleteFood(id) {
    const foods = await this.getAllFoods();
    const foodIndex = foods.findIndex(food => food.id === id);
    
    if (foodIndex === -1) {
      return null;
    }
    
    const deletedFood = foods[foodIndex];
    foods.splice(foodIndex, 1);
    await fileManager.writeData(foods);
    
    return deletedFood;
  }

  // 📊 Get statistics
  async getStats() {
    const foods = await this.getAllFoods();
    
    const categories = foods.reduce((acc, food) => {
      acc[food.category] = (acc[food.category] || 0) + 1;
      return acc;
    }, {});
    
    const prices = foods.map(f => f.price);
    const averagePrice = prices.length > 0 
      ? Math.round(prices.reduce((a, b) => a + b, 0) / prices.length * 100) / 100
      : 0;
    
    return {
      totalFoods: foods.length,
      categories,
      averagePrice,
      spicyFoods: foods.filter(f => f.isSpicy).length,
      nonSpicyFoods: foods.filter(f => !f.isSpicy).length,
      priceRange: {
        min: Math.min(...prices),
        max: Math.max(...prices)
      }
    };
  }
}

// 📤 Export singleton instance
export default new FoodsDatabase();
```

---

## 6. 🛣️ Rutas CRUD

Actualiza `src/routes/foodRoutes.js`:

```javascript
// 🛣️ Food Routes - Complete CRUD operations
import express from 'express';
import foodsDB from '../data/foods.js';
import { validateData } from '../middleware/security.js';
import { validateCreateFood, validateUpdateFood } from '../validators/foodValidator.js';

const foodRouter = express.Router();

// 📋 GET all foods with filtering
foodRouter.get('/', async (req, res) => {
  try {
    let allFoods = await foodsDB.getAllFoods();
    let filteredFoods = allFoods;
    
    // 🌶️ Filter by spicy
    if (req.query.spicy !== undefined) {
      const isSpicy = req.query.spicy === 'true';
      filteredFoods = filteredFoods.filter(food => food.isSpicy === isSpicy);
    }
    
    // 🏷️ Filter by category
    if (req.query.category) {
      filteredFoods = filteredFoods.filter(food => 
        food.category.toLowerCase() === req.query.category.toLowerCase()
      );
    }
    
    // 💰 Filter by maximum price
    if (req.query.maxPrice) {
      const maxPrice = parseInt(req.query.maxPrice);
      if (!isNaN(maxPrice)) {
        filteredFoods = filteredFoods.filter(food => food.price <= maxPrice);
      }
    }
    
    // 🔍 Search by name or description
    if (req.query.search) {
      const searchTerm = req.query.search.toLowerCase();
      filteredFoods = filteredFoods.filter(food =>
        food.name.toLowerCase().includes(searchTerm) ||
        food.description.toLowerCase().includes(searchTerm)
      );
    }
    
    res.json({
      total: filteredFoods.length,
      totalAvailable: allFoods.length,
      filters: req.query,
      foods: filteredFoods
    });
  } catch (error) {
    res.status(500).json({
      error: "Server error! 🚨",
      message: "Failed to retrieve foods",
      details: error.message
    });
  }
});

// 🔍 GET food by ID
foodRouter.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
      return res.status(400).json({
        error: "Invalid ID format! 📝",
        message: "ID must be a number",
        example: "/api/foods/1"
      });
    }
    
    const food = await foodsDB.getFoodById(id);
    
    if (!food) {
      return res.status(404).json({
        error: "Food not found! 🔍",
        message: `No food found with ID: ${id}`,
        suggestion: "Check available foods at /api/foods"
      });
    }
    
    res.json(food);
  } catch (error) {
    res.status(500).json({
      error: "Server error! 🚨", 
      message: "Failed to retrieve food",
      details: error.message
    });
  }
});

// ➕ POST - Create new food
foodRouter.post('/', validateData(validateCreateFood), async (req, res) => {
  try {
    const newFood = await foodsDB.createFood(req.body);
    
    res.status(201).json({
      message: "Food created successfully! 🎉",
      food: newFood
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to create food! 🚨",
      message: "Something went wrong while saving",
      details: error.message
    });
  }
});

// ✏️ PUT - Update existing food
foodRouter.put('/:id', validateData(validateUpdateFood), async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
      return res.status(400).json({
        error: "Invalid ID format! 📝",
        message: "ID must be a number"
      });
    }
    
    const updatedFood = await foodsDB.updateFood(id, req.body);
    
    if (!updatedFood) {
      return res.status(404).json({
        error: "Food not found! 🔍",
        message: `No food found with ID: ${id}`
      });
    }
    
    res.json({
      message: "Food updated successfully! ✨",
      food: updatedFood
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to update food! 🚨",
      message: "Something went wrong while updating",
      details: error.message
    });
  }
});

// ❌ DELETE - Delete food
foodRouter.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
      return res.status(400).json({
        error: "Invalid ID format! 📝",
        message: "ID must be a number"
      });
    }
    
    const deletedFood = await foodsDB.deleteFood(id);
    
    if (!deletedFood) {
      return res.status(404).json({
        error: "Food not found! 🔍",
        message: `No food found with ID: ${id}`
      });
    }
    
    res.json({
      message: "Food deleted successfully! 🗑️",
      deletedFood: {
        id: deletedFood.id,
        name: deletedFood.name
      }
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to delete food! 🚨",
      message: "Something went wrong while deleting", 
      details: error.message
    });
  }
});

export default foodRouter;
```

---

## 7. 🚀 Servidor con middleware y seguridad

Actualiza `src/index.js`:

```javascript
// 🚀 Peruvian Food API v2.0 - Complete CRUD with Security
import express from 'express';
import foodRouter from './routes/foodRoutes.js';
import foodsDB from './data/foods.js';
import { corsConfig, createRateLimit, securityHeaders, requestLogger } from './middleware/security.js';

const app = express();
const PORT = process.env.PORT || 3000;

// 🌐 CORS - MUST BE FIRST (CRITICAL for frontends)
app.use(corsConfig);

// 🔒 Security middleware
app.use(securityHeaders);
app.use(requestLogger);

// 📝 JSON Parser (needed for POST/PUT)
app.use(express.json({ limit: '10mb' }));

// 🚦 Rate limiting
app.use('/api/foods', createRateLimit(15 * 60 * 1000, 100)); // 100 requests per 15 minutes
app.use('/', createRateLimit(5 * 60 * 1000, 20)); // 20 requests per 5 minutes for docs

// 🏠 API Documentation
app.get('/', (req, res) => {
  res.json({
    name: "Peruvian Food API",
    version: "2.0.0",
    description: "Complete CRUD API for Peruvian food! 🍽️",
    status: "active",
    features: [
      "🌐 CORS enabled - Ready for frontends",
      "✅ Complete CRUD operations",
      "🔍 Advanced filtering and search",
      "🛡️ Security middleware and rate limiting",
      "📝 Data validation with detailed messages",
      "💾 Persistent storage with JSON database",
      "📊 Real-time statistics",
      "🏥 Health monitoring"
    ],
    endpoints: {
      getAllFoods: "/api/foods",
      getFoodById: "/api/foods/1",
      createFood: "POST /api/foods",
      updateFood: "PUT /api/foods/1",
      deleteFood: "DELETE /api/foods/1",
      filterFoods: "/api/foods?search=ceviche",
      combinedFilters: "/api/foods?search=gallina&category=main&isSpicy=true",
      getStats: "/api/stats",
      healthCheck: "/health"
    }
  });
});

// 📊 Dynamic API statistics
app.get('/api/stats', async (req, res) => {
  try {
    const stats = await foodsDB.getStats();
    res.json({
      ...stats,
      lastUpdated: new Date().toISOString(),
      apiVersion: "2.0.0",
      corsEnabled: true
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to get statistics! 📊",
      message: error.message
    });
  }
});

// 🛣️ Food routes
app.use('/api/foods', foodRouter);

// 🏥 Health check
app.get('/health', async (req, res) => {
  try {
    const foods = await foodsDB.getAllFoods();
    
    res.json({
      status: "healthy! 💚",
      timestamp: new Date().toISOString(),
      uptime: Math.floor(process.uptime()) + "s",
      database: {
        status: "connected",
        totalRecords: foods.length
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

// ❌ 404 Handler
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found! 🔍",
    message: `Cannot ${req.method} ${req.originalUrl}`,
    suggestion: "Visit / for API documentation"
  });
});

// 🚨 Global error handler
app.use((error, req, res, next) => {
  console.error('🚨 Global Error:', error);
  res.status(500).json({
    error: "Internal server error! 🚨",
    message: "Something went wrong on our side",
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
  console.log(`🌐 CORS: Enabled for frontends!`);
  console.log(`🛡️ Security: Rate limiting and validation enabled`);
  console.log(`💾 Database: JSON file persistence active`);
  console.log(`🛠️ Development mode: npm run dev`);
  console.log(`🎉 Ready for complete CRUD operations and frontend consumption!`);
});
```

---

## 8. 🧪 Testing completo

### ▶️ Iniciar tu API

```bash
# 🛠️ Development mode (recommended)
npm run dev
```

### 📊 Resumen de casos de prueba

| #   | Endpoint                    | Método | Descripción                  | Status esperado |
| --- | --------------------------- | ------ | ---------------------------- | --------------- |
| 1   | `/`                         | GET    | API Documentation            | 200 ✅           |
| 2   | `/health`                   | GET    | Health Check                 | 200 ✅           |
| 3   | `/api/stats`                | GET    | API Statistics               | 200 ✅           |
| 4   | `/api/foods`                | GET    | Get all foods                | 200 ✅           |
| 5   | `/api/foods/1`              | GET    | Get food by ID (valid)       | 200 ✅           |
| 6   | `/api/foods/999`            | GET    | Get food by ID (invalid)     | 404 ❌           |
| 7   | `/api/foods/abc`            | GET    | Get food invalid format      | 400 ❌           |
| 8   | `/api/foods?search=ceviche` | GET    | Search with filters          | 200 ✅           |
| 9   | `/api/foods`                | POST   | Create food (valid data)     | 201 ✅           |
| 10  | `/api/foods`                | POST   | Create food (invalid data)   | 400 ❌           |
| 11  | `/api/foods`                | POST   | Create food (missing fields) | 400 ❌           |
| 12  | `/api/foods/1`              | PUT    | Update food (valid data)     | 200 ✅           |
| 13  | `/api/foods/999`            | PUT    | Update food (not found)      | 404 ❌           |
| 14  | `/api/foods/2`              | PUT    | Update food (invalid data)   | 400 ❌           |
| 15  | `/api/foods/3`              | DELETE | Delete food (valid ID)       | 200 ✅           |
| 16  | `/api/foods/999`            | DELETE | Delete food (not found)      | 404 ❌           |

### 📞 Casos de prueba detallados

Crea `test-api.http`:

```http
### ===============================================
### 🏠 BASIC API TESTS (3 tests)
### ===============================================

### 1. API Documentation (should show CORS enabled)
GET http://localhost:3000/

### 2. Health Check (should show status: "healthy")
GET http://localhost:3000/health

### 3. API Statistics (should show corsEnabled: true)
GET http://localhost:3000/api/stats

### ===============================================
### 📋 READ OPERATIONS - GET FOODS (5 tests)
### ===============================================

### 4. Get all foods
GET http://localhost:3000/api/foods

### 5. Get food by ID (existing)
GET http://localhost:3000/api/foods/1

### 6. Get food by ID (non-existent) - Should return 404
GET http://localhost:3000/api/foods/999

### 7. Get food with invalid ID format - Should return 400
GET http://localhost:3000/api/foods/abc

### 8. Get foods with filters
GET http://localhost:3000/api/foods?spicy=true&category=main&maxPrice=25&search=ceviche

### ===============================================
### ➕ CREATE OPERATIONS - POST FOODS (3 tests)
### ===============================================

### 9. Create new food (valid data) - Should return 201
POST http://localhost:3000/api/foods
Content-Type: application/json

{
  "name": "Causa Limeña",
  "category": "appetizer",
  "description": "Layered potato dish with chicken or tuna filling, a classic appetizer",
  "ingredients": ["potatoes", "lime juice", "yellow chili", "chicken", "mayonnaise", "avocado"],
  "isSpicy": true,
  "price": 14,
  "imageUrl": "https://example.com/causa-limena.jpg"
}

### 10. Create food with invalid data - Should return 400
POST http://localhost:3000/api/foods
Content-Type: application/json

{
  "name": "X",
  "category": "invalid-category",
  "description": "Too short",
  "ingredients": [],
  "price": -5,
  "imageUrl": "not-a-valid-url"
}

### 11. Create food with missing fields - Should return 400
POST http://localhost:3000/api/foods
Content-Type: application/json

{
  "name": "Anticuchos"
}

### ===============================================
### ✏️ UPDATE OPERATIONS - PUT FOODS (3 tests)
### ===============================================

### 12. Update existing food (partial update) - Should return 200
PUT http://localhost:3000/api/foods/1
Content-Type: application/json

{
  "price": 28,
  "description": "Updated: Premium ceviche with fresh daily fish and special marinade"
}

### 13. Update non-existent food - Should return 404
PUT http://localhost:3000/api/foods/999
Content-Type: application/json

{
  "price": 20
}

### 14. Update food with invalid data - Should return 400
PUT http://localhost:3000/api/foods/2
Content-Type: application/json

{
  "name": "A",
  "category": "invalid",
  "price": -10
}

### ===============================================
### ❌ DELETE OPERATIONS - DELETE FOODS (2 tests)  
### ===============================================

### 15. Delete existing food - Should return 200
DELETE http://localhost:3000/api/foods/3

### 16. Delete non-existent food - Should return 404
DELETE http://localhost:3000/api/foods/999

### ===============================================
### 🌐 CORS VERIFICATION TESTS (Bonus)
### ===============================================

### Bonus 1: OPTIONS request (CORS preflight)
OPTIONS http://localhost:3000/api/foods
Origin: http://localhost:3001

### Bonus 2: POST with CORS headers
POST http://localhost:3000/api/foods
Content-Type: application/json
Origin: http://localhost:5173

{
  "name": "Tacu Tacu CORS",
  "category": "main", 
  "description": "Mixed rice and beans, testing CORS from Vite development server",
  "ingredients": ["rice", "beans", "beef", "eggs", "onions", "garlic"],
  "isSpicy": false,
  "price": 18,
  "imageUrl": "https://example.com/tacu-tacu-cors.jpg"
}
```

---

## 🎉 ¡Felicidades! Nivel 2 COMPLETO

### ✅ **Ahora dominas:**

- 🏗️ **CRUD completo** con persistencia real
- 🌐 **CORS configurado** - Tu API funciona con frontends
- 🛡️ **Middleware profesional** - Seguridad, logging, validaciones
- ✅ **Validaciones robustas** - Joi con mensajes claros
- 📊 **Monitoreo integrado** - Health checks y estadísticas
- 🧪 **Testing completo** - 16+ casos de prueba

### 🚀 **Tu API está lista para:**

- ✅ **React/Vue/Angular apps** - CORS configurado
- ✅ **Producción básica** - Seguridad y rate limiting
- ✅ **Desarrollo profesional** - Estructura escalable
- ✅ **Colaboración** - Fácil de entender y extender

### 🎓 **Certificado de logros Nivel 2:**
- ✅ API REST completa funcionando
- ✅ CORS configurado para frontends
- ✅ 16 tests pasando exitosamente
- ✅ Persistencia de datos real
- ✅ Arquitectura profesional

---

## 🚀 Siguientes pasos - Nivel 3

### 🏗️ **Arquitectura Empresarial**
- **Clean Architecture**: Controllers, Services, Repositories
- **Dependency Injection**: Inversión de control
- **Design Patterns**: Factory, Strategy, Observer
- **Error Handling**: Centralized error management
- **Logging**: Winston, structured logging

### 💾 **Base de Datos Real**
- **MongoDB**: NoSQL con Mongoose ODM
- **PostgreSQL**: SQL con Prisma ORM
- **Redis**: Caching y sessions
- **Database Migrations**: Versionado de esquemas
- **Connection Pooling**: Optimización de conexiones

### 🔐 **Autenticación y Autorización**
- **JWT Tokens**: Stateless authentication
- **OAuth 2.0**: Google, GitHub login
- **Role-Based Access Control (RBAC)**
- **API Keys**: Service-to-service auth
- **Security Headers**: OWASP compliance

### 📊 **Monitoreo y DevOps**
- **Docker**: Containerización
- **PM2**: Process management
- **Prometheus + Grafana**: Métricas
- **CI/CD**: GitHub Actions
- **Load Balancing**: Nginx, HAProxy

### 🧪 **Testing Avanzado**
- **Unit Tests**: Jest, Vitest
- **Integration Tests**: Supertest
- **E2E Tests**: Playwright
- **Performance Tests**: Artillery
- **Test Coverage**: 90%+ coverage

### 🌐 **Microservicios**
- **API Gateway**: Kong, Express Gateway
- **Service Mesh**: Istio
- **Event-Driven**: RabbitMQ, Apache Kafka
- **gRPC**: High-performance communication
- **Distributed Tracing**: Jaeger

**¡Tu viaje hacia arquitecto de software ha comenzado! 🌟**