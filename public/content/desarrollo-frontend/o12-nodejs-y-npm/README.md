# 🚀 Node.js API Nivel 1 - Tu Primer Servidor Simple

¡Aprende a crear tu primera API con Node.js paso a paso! 🎯

---

## 1. 🤔 ¿Qué es Node.js realmente?

### 🌐 Comparación Frontend vs Backend

Como desarrollador frontend, ya sabes que **JavaScript en el navegador** puede:
- ✅ Manipular el DOM
- ✅ Hacer peticiones HTTP (fetch, axios)
- ✅ Manejar eventos de usuario

**Node.js** es un entorno de ejecución de JavaScript que permite ejecutar código JavaScript en el servidor.
- 🗂️ Leer y escribir archivos
- 🌐 Crear servidores web
- 📊 Conectarse a bases de datos
- 📡 Crear APIs

### ⚡ ¿Es rápido Node.js?

**SÍ, Node.js es muy rápido** para APIs porque:
- 🔄 **Event Loop**: Maneja miles de conexiones simultáneas sin bloqueos
- 🚀 **Non-blocking I/O**: No espera que termine una operación para empezar otra
- 💾 **V8 Engine**: El mismo motor ultra-rápido de Chrome
- 🏗️ **Single Thread**: Menos overhead que otros lenguajes multi-hilo

> 💡 **Perfecto para**: APIs, microservicios, aplicaciones en tiempo real
> ⚠️ **No ideal para**: Cálculos matemáticos intensivos

---

## 2. ⚙️ Configurando tu primer proyecto

### 📦 Instalando Node.js

1. Ve a [nodejs.org](https://nodejs.org/) y descarga la versión **LTS** 📥
2. Verifica que esté instalado:

```bash
node --version  # Debería mostrar v20.x.x o superior
npm --version   # Debería mostrar 10.x.x o superior
```

### 🏁 Creando el proyecto

```bash
# 1. Crear carpeta del proyecto
mkdir peruvian-food-api
cd peruvian-food-api

# 2. Inicializar proyecto Node.js
npm init -y
```

### 📦 Instalación de dependencias

Ahora vamos a instalar las librerías que necesitamos:

```bash
# 🚀 Dependencias para producción (van al servidor final)
npm install express cors

# 🛠️ Dependencias solo para desarrollo (facilitan el trabajo)
npm install --save-dev nodemon
```

> 💡 **¿Qué hace cada dependencia?**
> - 🌐 **express**: Framework web para crear APIs fácilmente
> - 🌍 **cors**: Permite que cualquier frontend consume tu API (¡súper importante!)
> - 🔄 **nodemon**: Reinicia automáticamente el servidor cuando cambias código (¡súper útil!)

### 📝 Configurar package.json

Abre `package.json` y modifica **estas líneas específicas**:

> ✨ **Cambios necesarios:** Agregar `"type": "module"` para usar `import/export` como en frontend, cambiar el `main` y agregar scripts de desarrollo

```json
{
  "name": "peruvian-food-api",
  "version": "1.0.0",
  "type": "module",                    // 👈 ¡AGREGAR esta línea!
  "main": "src/index.js",             // 👈 CAMBIAR de "index.js" a "src/index.js"
  "scripts": {
    "start": "node src/index.js",     // 👈 CAMBIAR - Para producción
    "dev": "nodemon src/index.js"     // 👈 AGREGAR - Para desarrollo
  },
  "keywords": ["api", "peruvian", "food", "express"],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

### 📂 Crear .gitignore (¡Importante!)

Crea el archivo `.gitignore` en la raíz del proyecto:

```gitignore
# 📦 Dependencies
node_modules/

# 🔐 Environment variables
.env
.env.local

# 💻 System files
.DS_Store
Thumbs.db

# 📝 Logs
*.log
npm-debug.log*

# 🗂️ IDE
.vscode/
.idea/
```

> 🚨 **¿Por qué .gitignore?** `node_modules/` pesa MB/GB y se regenera con `npm install`. ¡No lo versiones nunca!

---

## 3. 🏗️ Servidor básico inicial

Primero, vamos a crear un servidor súper simple! 🎯

Crea `src/index.js`:

```javascript
// 📦 Import Express and CORS
import express from 'express';
import cors from 'cors';

// 🏗️ Create Express application
const app = express();
const PORT = 3000;

// 🌍 Enable CORS for all routes (allows frontend consumption)
app.use(cors());

// 🏠 Simple welcome route
app.get('/', (req, res) => {
  res.json({ 
    message: "🎉 The server is running!",
    status: "success",
    corsEnabled: true
  });
});

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`🌍 CORS enabled - Frontend ready!`);
});
```

### ▶️ Prueba tu servidor en modo desarrollo

```bash
# 🛠️ Para desarrollo (reinicio automático)
npm run dev

# 🚀 Para producción (reinicio manual)
npm start
```

Ve a `http://localhost:3000` y verás tu primer mensaje con CORS habilitado! 🎉

> 💡 **¡Genial!** Con `npm run dev` el servidor se reinicia automáticamente cada vez que guardes cambios. ¡Súper conveniente para desarrollo! 🔄

## 4. 🏗️ Creando la estructura modular

```bash
# 📁 Crear estructura de carpetas organizadas
mkdir -p src/data src/routes

# 🔍 Verificar que se crearon correctamente
ls -la src/
```

Tu estructura quedará así (¡modular y escalable! 🚀):
```
peruvian-food-api/
├── src/
│   ├── data/           # 📊 Datos de la aplicación (foods.js)
│   ├── routes/         # 🛣️ Rutas/endpoints (foodRoutes.js)
│   └── index.js        # 🚀 Servidor principal (configuración y inicio)
├── .gitignore          # 🚫 Archivos a ignorar en git
├── package.json        # 📦 Configuración del proyecto
└── README.md           # 📖 Documentación (opcional)
```

> 💡 **¿Por qué esta estructura?** Separa responsabilidades: datos, rutas y servidor. ¡Fácil de mantener y escalar! 📈

---

## 5. 📊 Definiendo los datos

Crea `src/data/foods.js` con 10 platillos selectos peruanos: 🇵🇪

```javascript
// 🍽️ Peruvian foods data - Top 10 most popular dishes
// 🌟 Each food has complete information: image, price, ingredients, etc.
const foods = [
  {
    id: 1,
    name: "Ceviche", // 🐟 El rey de la gastronomía peruana
    category: "main",
    description: "Fresh raw fish cured in citrus juices with onions and chili peppers",
    ingredients: ["fish", "lime juice", "red onions", "chili peppers", "sweet potato"],
    isSpicy: true,
    price: 25,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/78/Cebiche_de_corvina.JPG"
  },
  {
    id: 2,
    name: "Lomo Saltado", // 🥩 Fusión chino-peruana perfecta
    category: "main",
    description: "Stir-fried beef with vegetables and french fries served with rice",
    ingredients: ["beef", "tomatoes", "onions", "soy sauce", "potatoes", "rice"],
    isSpicy: false,
    price: 22,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Lomo-saltado-perudelights.jpg"
  },
  {
    id: 3,
    name: "Ají de Gallina", // 🐔 Cremoso y lleno de sabor
    category: "main", 
    description: "Creamy chicken stew with yellow chili pepper sauce",
    ingredients: ["chicken", "yellow chili pepper", "bread", "milk", "cheese", "walnuts"],
    isSpicy: true,
    price: 20,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Aj%C3%AD_de_gallina.jpg/800px-Aj%C3%AD_de_gallina.jpg"
  },
  {
    id: 4,
    name: "Anticuchos", // 💖 Street food tradicional
    category: "appetizer",
    description: "Grilled beef heart skewers marinated in spices",
    ingredients: ["beef heart", "ají panca", "cumin", "vinegar", "garlic"],
    isSpicy: true,
    price: 15,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Anticuchos.jpg/800px-Anticuchos.jpg"
  },
  {
    id: 5,
    name: "Papa a la Huancaína", // 🥔 Entrada clásica irresistible
    category: "appetizer",
    description: "Sliced potatoes covered with spicy cheese sauce",
    ingredients: ["potatoes", "yellow chili pepper", "cheese", "milk", "crackers"],
    isSpicy: true,
    price: 12,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Papa_a_la_huanca%C3%ADna.jpg/800px-Papa_a_la_huanca%C3%ADna.jpg"
  },
  {
    id: 6,
    name: "Arroz Chaufa", // 🍚 Herencia chifa deliciosa
    category: "main",
    description: "Peruvian-Chinese fried rice with vegetables and meat",
    ingredients: ["rice", "eggs", "green onions", "soy sauce", "chicken"],
    isSpicy: false,
    price: 18,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arroz_chaufa_de_pollo.jpg/800px-Arroz_chaufa_de_pollo.jpg"
  },
  {
    id: 7,
    name: "Suspiro de Limeña", // 🍮 Dulzura de Lima
    category: "dessert",
    description: "Sweet dessert made with manjar blanco and meringue",
    ingredients: ["condensed milk", "egg yolks", "sugar", "egg whites", "port wine"],
    isSpicy: false,
    price: 8,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Suspiro_lime%C3%B1a.jpg/800px-Suspiro_lime%C3%B1a.jpg"
  },
  {
    id: 8,
    name: "Chicha Morada", // 🟣 Refrescante y ancestral
    category: "drink",
    description: "Refreshing drink made from purple corn with fruits and spices",
    ingredients: ["purple corn", "pineapple", "apple", "cinnamon", "cloves"],
    isSpicy: false,
    price: 6,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Chicha_Morada_2017.jpg"
  },
  {
    id: 9,
    name: "Pisco Sour", // 🍸 Cocktail bandera nacional
    category: "drink",
    description: "Classic Peruvian cocktail made with pisco and lime juice",
    ingredients: ["pisco", "lime juice", "simple syrup", "egg white", "angostura bitters"],
    isSpicy: false,
    price: 16,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Pisco_Sour.jpg/800px-Pisco_Sour.jpg"
  },
  {
    id: 10,
    name: "Picarones", // 🍩 Postre tradicional callejero
    category: "dessert",
    description: "Traditional Peruvian donuts made with squash and sweet potato",
    ingredients: ["squash", "sweet potato", "flour", "yeast", "chancaca syrup"],
    isSpicy: false,
    price: 10,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Picarones.jpg/800px-Picarones.jpg"
  }
];

// 📤 Export the foods data for use in routes
export default foods;
```

> 🎯 **Estructura de datos consistente:** Cada plato tiene ID, nombre, categoría, descripción, ingredientes, si es picante, precio e imagen. ¡Perfecto para una API! ✨

---

## 6. 🛠️ Creando las rutas

Crea `src/routes/foodRoutes.js` (aquí está toda la magia de filtrado! ✨):

```javascript
// 📦 Import dependencies
import express from 'express';
import foods from '../data/foods.js';

// 🛣️ Create router instance (mini-app for food routes)
const foodRouter = express.Router();

// 📋 GET all foods with optional filtering (¡súper flexible!)
foodRouter.get('/', (req, res) => {
  let filteredFoods = foods; // 🔄 Start with all foods
  
  // 🌶️ Filter by spiciness (true/false)
  if (req.query.spicy !== undefined) {
    const isSpicy = req.query.spicy === 'true';
    filteredFoods = filteredFoods.filter(food => food.isSpicy === isSpicy);
  }
  
  // 🏷️ Filter by category (main, appetizer, dessert, drink)
  if (req.query.category) {
    filteredFoods = filteredFoods.filter(food => 
      food.category.toLowerCase() === req.query.category.toLowerCase()
    );
  }
  
  // 💰 Filter by maximum price (budget-friendly option!)
  if (req.query.maxPrice) {
    const maxPrice = parseInt(req.query.maxPrice);
    if (!isNaN(maxPrice)) { // 🛡️ Validate it's a number
      filteredFoods = filteredFoods.filter(food => food.price <= maxPrice);
    }
  }
  
  // 🔍 Search by name (case-insensitive, partial match)
  if (req.query.search) {
    const searchTerm = req.query.search.toLowerCase();
    filteredFoods = filteredFoods.filter(food =>
      food.name.toLowerCase().includes(searchTerm) ||
      food.description.toLowerCase().includes(searchTerm)
    );
  }
  
  // 📊 Send response with metadata
  res.json({
    total: filteredFoods.length,
    totalAvailable: foods.length,
    filters: req.query, // 🔍 Show what filters were applied
    foods: filteredFoods
  });
});

// 🔍 GET food by ID (single food details)
foodRouter.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  // 🛡️ Validate ID is a number
  if (isNaN(id)) {
    return res.status(400).json({
      error: "Invalid ID format",
      message: "ID must be a number",
      example: "/api/foods/1"
    });
  }
  
  const food = foods.find(f => f.id === id);
  
  // ❌ Food not found
  if (!food) {
    return res.status(404).json({ 
      error: "Food not found",
      message: `No food found with ID: ${id}`,
      suggestion: "Try IDs from 1 to 10",
      availableIds: foods.map(f => f.id)
    });
  }
  
  // ✅ Food found - return with related foods
  const relatedFoods = foods
    .filter(f => f.id !== id && f.category === food.category)
    .slice(0, 3) // 👥 Get up to 3 related foods
    .map(f => ({ id: f.id, name: f.name }));
  
  res.json({
    ...food,
    relatedFoods: relatedFoods.length > 0 ? relatedFoods : null
  });
});

// 📤 Export router for use in main server
export default foodRouter;
```

> 🎯 **Funcionalidades implementadas:**
> - ✅ Filtrado por picante, categoría, precio máximo
> - ✅ Búsqueda por nombre y descripción  
> - ✅ Validación de parámetros
> - ✅ Mensajes de error descriptivos
> - ✅ Comidas relacionadas
> - ✅ Metadata útil en responses

---

## 7. 🚀 Configurando el servidor final

Ahora **reemplaza completamente** el contenido de `src/index.js` con esta versión final:

```javascript
// 📦 Import dependencies
import express from 'express';
import cors from 'cors';
import foodRouter from './routes/foodRoutes.js';

// 🏗️ Create Express application
const app = express();
const PORT = 3000;

// 🌍 Enable CORS for all routes (CRITICAL for frontend consumption)
app.use(cors());

// 🏠 Welcome route - API documentation endpoint
app.get('/', (req, res) => {
  res.json({
    message: "🇵🇪 Welcome to Peruvian Food API",
    version: "1.0.0",
    description: "Discover the amazing flavors of Peru! 🍽️",
    totalFoods: 10,
    corsEnabled: true,
    features: [
      "🔍 Search by name or description",
      "🏷️ Filter by category",
      "🌶️ Filter by spiciness level", 
      "💰 Filter by maximum price",
      "📊 Detailed food information with images",
      "🌍 CORS enabled - Ready for frontend consumption!"
    ],
    endpoints: {
      "📋 All foods": "/api/foods",
      "🔍 Food by ID": "/api/foods/{id}",
      "🌶️ Spicy foods": "/api/foods?spicy=true",
      "🍰 Desserts": "/api/foods?category=dessert",
      "💰 Budget friendly": "/api/foods?maxPrice=15",
      "🔍 Search": "/api/foods?search=ceviche"
    },
    examples: {
      "GET /api/foods": "Get all foods",
      "GET /api/foods/1": "Get ceviche details",
      "GET /api/foods?spicy=true&category=main": "Spicy main dishes"
    },
    documentation: "🚀 This API provides access to popular Peruvian dishes with filtering capabilities!"
  });
});

// 📊 API Stats endpoint (bonus!)
app.get('/api/stats', (req, res) => {
  res.json({
    totalFoods: 10,
    categories: {
      main: 3,
      appetizer: 2, 
      dessert: 2,
      drink: 2
    },
    averagePrice: 15.2,
    spicyFoods: 5,
    nonSpicyFoods: 5,
    priceRange: { min: 6, max: 25 },
    corsEnabled: true
  });
});

// 🛣️ Register food routes (all /api/foods/* routes)
app.use('/api/foods', foodRouter);

// 🏥 Health check endpoint (for monitoring)
app.get('/health', (req, res) => {
  res.json({
    status: "healthy! 💚",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    corsEnabled: true
  });
});

// ❌ Handle 404 errors for unknown routes
app.use('*', (req, res) => {
  res.status(404).json({
    error: "🔍 Route not found",
    message: `Cannot ${req.method} ${req.originalUrl}`,
    suggestion: "Visit / to see available endpoints"
  });
});

// 🚀 Start server with friendly messages
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📋 API Documentation: http://localhost:${PORT}/`);
  console.log(`🍽️ Foods endpoint: http://localhost:${PORT}/api/foods`);
  console.log(`🌍 CORS: Enabled - Frontend ready!`);
  console.log(`🛠️ Development mode: npm run dev`);
  console.log(`🎉 Ready to serve delicious Peruvian food data!`);
});
```

> 🔄 **¡Importante!** Este paso **reemplaza** tu servidor básico inicial con la versión completa que incluye rutas modulares y CORS habilitado.

---

## 8. 🧪 Probando tu API

### ▶️ Iniciar el servidor final

```bash
# 🛠️ Para desarrollo (recomendado - reinicio automático)
npm run dev

# 🚀 Para producción (reinicio manual)
npm start
```

Deberías ver estos mensajes en consola:
```
🚀 Server running on http://localhost:3000
📋 API Documentation: http://localhost:3000/
🍽️ Foods endpoint: http://localhost:3000/api/foods
🌍 CORS: Enabled - Frontend ready!
🛠️ Development mode: npm run dev
🎉 Ready to serve delicious Peruvian food data!
```

### 🌐 Endpoints principales para probar

| 🎯 **Endpoint**                  | 📝 **Qué hace**                             |
| ------------------------------- | ------------------------------------------ |
| 🏠 `/`                           | Documentación completa de la API           |
| 📋 `/api/foods`                  | Lista todos los platos peruanos            |
| 🔍 `/api/foods/1`                | Detalles del Ceviche + platos relacionados |
| 🌶️ `/api/foods?spicy=true`       | Solo platos picantes                       |
| 🍰 `/api/foods?category=dessert` | Solo postres                               |
| 💰 `/api/foods?maxPrice=15`      | Platos económicos                          |
| 🔍 `/api/foods?search=ceviche`   | Búsqueda por nombre                        |
| 📊 `/api/stats`                  | Estadísticas de la API                     |

### 🌍 Prueba rápida de CORS

Crea un archivo `test-frontend.html` en cualquier lugar de tu computadora:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Test API 🧪</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; }
        button { background: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; }
        button:hover { background: #45a049; }
        #results { margin-top: 20px; padding: 15px; border-radius: 5px; background: #f5f5f5; }
        .success { background: #d4edda; border: 1px solid #c3e6cb; }
        .error { background: #f8d7da; border: 1px solid #f5c6cb; }
    </style>
</head>
<body>
    <h1>🇵🇪 Testing Peruvian Food API</h1>
    <p>This tests if your API works with CORS enabled from any frontend!</p>
    
    <button onclick="testAPI()">🚀 Test API Connection</button>
    <button onclick="testSpicyFoods()">🌶️ Get Spicy Foods</button>
    <button onclick="testCeviche()">🐟 Get Ceviche Details</button>
    
    <div id="results"></div>

    <script>
        const API_URL = 'http://localhost:3000';
        
        async function testAPI() {
            showLoading();
            try {
                const response = await fetch(`${API_URL}/api/foods`);
                const data = await response.json();
                
                showResults(`
                    <h2>✅ API Works Perfect!</h2>
                    <p><strong>CORS:</strong> Working! 🌍</p>
                    <p><strong>Total Foods:</strong> ${data.total}</p>
                    <p><strong>First Food:</strong> ${data.foods[0].name} - $${data.foods[0].price}</p>
                `, 'success');
            } catch (error) {
                showResults(`
                    <h2>❌ API Error</h2>
                    <p>Error: ${error.message}</p>
                    <p>Make sure your API is running: <code>npm run dev</code></p>
                `, 'error');
            }
        }
        
        async function testSpicyFoods() {
            showLoading();
            try {
                const response = await fetch(`${API_URL}/api/foods?spicy=true`);
                const data = await response.json();
                
                const spicyList = data.foods.map(f => `${f.name} ($${f.price})`).join(', ');
                
                showResults(`
                    <h2>🌶️ Spicy Foods Found!</h2>
                    <p><strong>Count:</strong> ${data.total} spicy dishes</p>
                    <p><strong>Foods:</strong> ${spicyList}</p>
                `, 'success');
            } catch (error) {
                showResults(`<h2>❌ Error getting spicy foods</h2><p>${error.message}</p>`, 'error');
            }
        }
        
        async function testCeviche() {
            showLoading();
            try {
                const response = await fetch(`${API_URL}/api/foods/1`);
                const data = await response.json();
                
                showResults(`
                    <h2>🐟 ${data.name} Details</h2>
                    <p><strong>Category:</strong> ${data.category}</p>
                    <p><strong>Price:</strong> $${data.price}</p>
                    <p><strong>Spicy:</strong> ${data.isSpicy ? '🌶️ Yes' : '😊 No'}</p>
                    <p><strong>Description:</strong> ${data.description}</p>
                    <img src="${data.imageUrl}" alt="${data.name}" style="max-width: 300px; border-radius: 8px;">
                `, 'success');
            } catch (error) {
                showResults(`<h2>❌ Error getting ceviche</h2><p>${error.message}</p>`, 'error');
            }
        }
        
        function showLoading() {
            document.getElementById('results').innerHTML = '<p>⏳ Loading...</p>';
        }
        
        function showResults(html, type) {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = html;
            resultsDiv.className = type;
        }
    </script>
</body>
</html>
```

Abre este archivo HTML en tu navegador y haz clic en los botones. **¡Si funciona, tu CORS está perfecto!** 🎉

> 🌟 **¡Increíble!** Tu API ya puede ser consumida desde cualquier frontend: React, Vue, Angular, o HTML puro.

### 🛠️ Herramientas recomendadas

- 🌐 **Navegador**: Para GET requests simples
- 📞 **REST Client** (VS Code): Extension ligera para testing
- 🧪 **Frontend HTML**: Como el ejemplo de arriba

---

## 🎉 ¡Felicidades!

¡Has creado tu primera API modular y profesional con Node.js que funciona perfectamente con frontends! 🏆

### ✅ Has dominado los fundamentos:

- 🏗️ **Estructura modular**: Separación limpia de responsabilidades
- 🛠️ **Entorno de desarrollo**: Scripts diferenciados para dev y producción
- 📦 **Gestión de dependencias**: Producción vs desarrollo correctamente separadas
- 🌍 **CORS habilitado**: Tu API funciona con cualquier frontend desde el día 1
- 🛣️ **Routing avanzado**: Rutas organizadas y endpoints RESTful  
- 📊 **Data modeling**: Estructura consistente y completa de datos
- 🔍 **Query parameters**: Filtros dinámicos y búsqueda inteligente
- ❌ **Error handling**: Manejo robusto con mensajes útiles
- 🌐 **API design**: Responses consistentes con metadata
- 📸 **Rich data**: Imágenes, precios, ingredientes completos
- 🎯 **Professional code**: Código en inglés, comentarios descriptivos

### 🏗️ Tu arquitectura modular:

```
📁 peruvian-food-api/
├── 📊 src/data/foods.js        ➜ 10 platos peruanos completos
├── 🛣️ src/routes/foodRoutes.js ➜ Lógica de filtrado y endpoints  
├── 🚀 src/index.js            ➜ Servidor con CORS + configuración principal
├── 🚫 .gitignore              ➜ Archivos a ignorar en git
└── 📦 package.json            ➜ Configuración con scripts dev/prod
```

### 🚀 ¿Qué sigue en Nivel 2?

- ✏️ **CRUD completo**: POST, PUT, DELETE endpoints
- 🛡️ **Middleware avanzado**: Validaciones, logging y seguridad profesional
- 🗃️ **Persistencia real**: Guardar cambios permanentemente en archivos JSON
- 🧪 **Testing completo**: Pruebas automatizadas de todos los endpoints
- 🔐 **Seguridad robusta**: Rate limiting, validaciones y headers de seguridad
- 🌐 **CORS configurado**: Configuración avanzada para diferentes entornos

### 🌍 Ventaja del CORS desde Nivel 1:

**¡Ya puedes conectar tu API con cualquier frontend!** Sin configuración adicional, tu API funciona con:
- ✅ React (`npm create react-app`)
- ✅ Vue (`npm create vue@latest`)
- ✅ Angular (`ng new`)
- ✅ HTML + JavaScript puro
- ✅ Cualquier framework moderno

### 🔧 Comandos esenciales

```bash
npm run dev         # 🛠️ Desarrollo (reinicio automático)
npm start           # 🚀 Producción (reinicio manual)
node --version      # 🔍 Ver versión de Node.js  
npm install         # 📦 Instalar todas las dependencias
```

### 🧪 Verificación final

1. ✅ Tu servidor corre en `http://localhost:3000`
2. ✅ CORS habilitado (visible en `/health` y `/api/stats`)
3. ✅ Filtros funcionando (`/api/foods?spicy=true`)
4. ✅ Búsqueda activa (`/api/foods?search=ceviche`)
5. ✅ Frontend HTML puede consumir la API sin errores

**¡Tu primera API está lista para el mundo real! 🌍** Has creado algo que cualquier frontend puede consumir desde el primer día, con una arquitectura que cualquier equipo puede mantener y escalar. ¡Excelente trabajo! 🌟

---

## 📚 Recursos adicionales

### 🔗 Enlaces útiles
- [Express.js Documentation](https://expressjs.com/)
- [CORS Documentation](https://github.com/expressjs/cors)
- [REST API Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://httpstatuses.com/)

### 🎯 Consejos profesionales
- **Mantén consistencia**: Todos los responses con la misma estructura
- **Documenta tus endpoints**: Como hiciste en la ruta `/`
- **Valida siempre**: Como el `parseInt()` en el ID
- **Mensajes claros**: Errores que realmente ayuden al desarrollador
- **CORS desde el inicio**: Evita problemas futuros con frontends

**¡Ahora estás listo para el Nivel 2 y crear APIs de nivel empresarial!** 🚀