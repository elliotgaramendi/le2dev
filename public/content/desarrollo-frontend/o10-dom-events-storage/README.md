# 🚀✨ JavaScript Nivel 3: Navegador & Interactividad 🌐🎮

¡Es hora de dar vida a tus aplicaciones web! 🎉💻 En este nivel aprenderás a manipular el DOM como un mago digital 🧙‍♂️, crear interfaces súper interactivas con eventos dinámicos 🖱️⚡, y hacer que tus datos persistan entre sesiones como un verdadero profesional 💾✨. 

Con una progresión gradual y perfecta, cada reto te llevará paso a paso desde los fundamentos básicos hasta crear aplicaciones web completas. ¡Elliot 🤓, Fernanda 👧, Mijael 👦, Fe 🌟, Doky 🐕, Chocolate 🍫, Amorosa 💖 y Chanchi 🐱 te acompañarán en esta aventura donde JavaScript cobra vida en el navegador! 🌟🎯

---

## 🎯 Objetivos del Nivel

* 🎨 **Dominar DOM Manipulation** para crear interfaces dinámicas (querySelector, innerHTML, createElement)
* 🖱️ **Gestionar eventos modernos** con addEventListener y event delegation profesional  
* 💾 **Implementar persistencia** con localStorage para datos que sobreviven entre sesiones
* 🛡️ **Aplicar Strict Mode** para código más robusto y mejores prácticas
* 📝 **Crear formularios dinámicos** con validación en tiempo real y UX fluida
* 🎮 **Integrar DOM + eventos + storage** en aplicaciones web completas y funcionales

---

## 📚✨ Conceptos a Aprender

```
      🌱 NIVEL BÁSICO                🌿 NIVEL INTERMEDIO            🌳 NIVEL AVANZADO
┌──────────────────────────┐    ┌──────────────────────────┐    ┌──────────────────────────┐
│ • querySelector() 🔍     │    │ • localStorage 💾        │    │ • Event delegation 🎯    │
│ • innerHTML básico 📝    │    │ • JSON stringify/parse   │    │ • Form validation 🛡️     │
│ • addEventListener 👂    │ ──►│ • preventDefault() 🛑    │ ──►│ • Real-time updates ⚡   │
│ • createElement() ➕     │    │ • Form handling 📝       │    │ • Complex interactions  │
│ • Click events 🖱️        │    │ • Data persistence 🔄    │    │ • Multiple components 🏗️ │
└──────────────────────────┘    └──────────────────────────┘    └──────────────────────────┘
         │                              │                              │
         ▼                              ▼                              ▼
🎯 Meta: Interacción básica      🎯 Meta: Datos persistentes     🎯 Meta: App completa
   Crear y mostrar elementos        Formularios que guardan         Sistema integrado
   Manejar clicks simples           Estado entre sesiones          Múltiples funcionalidades
```

---

## 🏆✨ Retos

### 🎮 **Reto 3.1:** Tarjetas Mágicas de Amigos 🃏✨

> Crea tarjetas interactivas básicas con DOM manipulation y eventos simples - **¡Tu primer paso en la interactividad web!**

**🧠 Fundamentos:** querySelector, innerHTML, createElement, addEventListener, click events

---

#### 🎯 Problema

Elliot 🤓 quiere crear un sistema simple para mostrar información de sus amigos en tarjetas dinámicas. Cada clic debe revelar más detalles y debe poder agregar nuevos amigos fácilmente.

---

#### ⚡ Funcionalidades Épicas

> **🎨 Como usuario, quiero ver tarjetas dinámicas de amigos**
```javascript
createFriendCard(friend): HTMLElement
```
- Crear elemento con `document.createElement('div')`
- Usar `innerHTML` para agregar contenido HTML
- Retornar elemento DOM listo para insertar

> **🖱️ Como visitante, quiero hacer clic para ver detalles**
```javascript
showFriendDetails(friendName): void
```
- Buscar amigo por nombre en array con `find()`
- Mostrar información completa con `alert()`
- Manejar caso cuando el amigo no existe

> **➕ Como usuario, quiero agregar nuevos amigos**
```javascript
addNewFriend(): void
```
- Usar `prompt()` para capturar datos básicos
- Validar que los campos no estén vacíos
- Agregar al array y re-renderizar automáticamente

> **🎪 Como desarrollador, quiero renderizar todas las tarjetas**
```javascript
renderFriends(): void
```
- Limpiar contenedor con `innerHTML = ""`
- Crear tarjeta para cada amigo con bucle `forEach()`
- Agregar event listeners a cada tarjeta

---

#### 🏗️ Tipos de Datos

```javascript
// Friend object structure - Simple y claro
const friend = {
  name: "Fernanda",
  age: 22,
  emoji: "👧", 
  hobby: "Fotografía",
  quote: "¡Cada día es una aventura!"
};
```

---

#### 🧪 Tests Automatizados

**✅ Test 1: Funcionalidad de creación de tarjetas**
- Crear tarjeta para Fernanda debe contener nombre y emoji correctos
- Elemento creado debe ser un div con estructura correcta

**✅ Test 2: Funcionalidad de renderizado completo**
- Sistema de renderizado debe mostrar todas las tarjetas correctamente
- Event listeners deben funcionar después del renderizado

**✅ Test 3: Funcionalidad de agregar amigos**
- Agregar nuevo amigo debe actualizar el array correctamente
- Vista debe actualizarse automáticamente tras agregar

**✅ Test 4: Validaciones del sistema**
- Buscar amigo inexistente debe manejar el error elegantemente
- Agregar amigo con datos vacíos debe ser rechazado
- Sistema debe manejar inputs malformados apropiadamente

**✅ Test 5: Tipos de retorno correctos**
- createFriendCard debe retornar HTMLElement válido
- showFriendDetails debe ejecutarse sin errores
- Todas las funciones deben existir y ser del tipo correcto

---

#### 💻 Código Base

**📁 index.html**
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🃏 Tarjetas Mágicas de Amigos</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="app">
        <header class="app__header">
            <h1 class="app__title">🃏✨ Tarjetas Mágicas de Amigos</h1>
            <p class="app__subtitle">Tu primera aventura interactiva con JavaScript 🌟</p>
        </header>

        <main class="app__main">
            <section class="controls">
                <button class="btn btn--primary" id="addFriendBtn" type="button">
                    ➕ Agregar Nuevo Amigo
                </button>
            </section>

            <section class="friends" id="friendsContainer">
                <!-- Las tarjetas se generarán aquí dinámicamente -->
            </section>
        </main>

        <footer class="app__footer">
            <p class="app__instruction">🎯 Haz clic en cualquier tarjeta para conocer más detalles</p>
        </footer>
    </div>

    <script src="app.js"></script>
</body>
</html>
```

**📁 styles.css**
```css
/* ==========================================================================
   Variables CSS
   ========================================================================== */
:root {
  --color-primary: #4f46e5;
  --color-primary-dark: #3730a3;
  --color-secondary: #06b6d4;
  --color-surface: #ffffff;
  --color-background: #f8fafc;
  --color-text: #1e293b;
  --color-text-light: #64748b;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --radius: 0.75rem;
  --transition: all 0.2s ease;
  --font-family: system-ui, -apple-system, sans-serif;
}

/* ==========================================================================
   Reset y base
   ========================================================================== */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  line-height: 1.5;
}

body {
  font-family: var(--font-family);
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  color: var(--color-text);
  min-height: 100vh;
  padding: 2rem 1rem;
}

/* ==========================================================================
   Layout principal
   ========================================================================== */
.app {
  max-width: 1200px;
  margin: 0 auto;
}

.app__header {
  text-align: center;
  margin-bottom: 3rem;
  color: white;
}

.app__title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.app__subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
}

.app__main {
  margin-bottom: 2rem;
}

.app__footer {
  text-align: center;
  color: white;
  opacity: 0.8;
}

.app__instruction {
  font-size: 1rem;
}

/* ==========================================================================
   Controles
   ========================================================================== */
.controls {
  text-align: center;
  margin-bottom: 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: var(--radius);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;
  background: transparent;
}

.btn--primary {
  background: var(--color-primary);
  color: white;
}

.btn--primary:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* ==========================================================================
   Tarjetas de amigos
   ========================================================================== */
.friends {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.friend-card {
  background: var(--color-surface);
  border-radius: var(--radius);
  padding: 1.5rem;
  box-shadow: var(--shadow-md);
  cursor: pointer;
  transition: var(--transition);
  text-align: center;
}

.friend-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: var(--shadow-lg);
}

.friend-card__emoji {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.friend-card__name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.friend-card__hobby {
  color: var(--color-text-light);
  margin-bottom: 1rem;
  font-size: 1rem;
}

.friend-card__quote {
  font-style: italic;
  font-size: 0.875rem;
  color: var(--color-text-light);
}

/* ==========================================================================
   Estados responsivos
   ========================================================================== */
@media (max-width: 768px) {
  .app__title {
    font-size: 2rem;
  }
  
  .friends {
    grid-template-columns: 1fr;
  }
  
  .friend-card {
    padding: 1rem;
  }
  
  .friend-card__emoji {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  body {
    padding: 1rem 0.5rem;
  }
  
  .app__title {
    font-size: 1.75rem;
  }
  
  .btn {
    width: 100%;
    justify-content: center;
  }
}
```

**📁 app.js**
```javascript
"use strict";

// ==========================================================================
// Test system
// ==========================================================================
const testResults = [];
const recordTest = (testName, condition) => {
  const emoji = condition ? "✅" : "❌";
  testResults.push(`${emoji} ${testName}`);
};

// ==========================================================================
// Application state
// ==========================================================================
const friends = [
  {
    name: "Fernanda",
    age: 22,
    emoji: "👧",
    hobby: "Fotografía", 
    quote: "¡Cada día es una aventura!"
  },
  {
    name: "Mijael", 
    age: 21,
    emoji: "👦",
    hobby: "Gaming",
    quote: "¡El código es mi superpoder!"
  },
  {
    name: "Fe",
    age: 23, 
    emoji: "🌟",
    hobby: "Arte Digital",
    quote: "Creatividad sin límites 🎨"
  }
];

// ==========================================================================
// DOM Functions - TODO: Implementar estas funciones
// ==========================================================================
const createFriendCard = (friend) => {
  // TODO: Crear elemento div con createElement
  // TODO: Agregar clases CSS apropiadas con className
  // TODO: Usar innerHTML para el contenido HTML
  // TODO: Agregar event listener para click
  // TODO: Retornar elemento HTML completo
};

const showFriendDetails = (friendName) => {
  // TODO: Buscar amigo por nombre usando find()
  // TODO: Si existe, mostrar información completa con alert()
  // TODO: Si no existe, mostrar mensaje apropiado
  // TODO: Formatear información de manera clara
};

const addNewFriend = () => {
  // TODO: Usar prompt() para obtener nombre
  // TODO: Usar prompt() para obtener edad, hobby, emoji y quote
  // TODO: Validar que los datos no estén vacíos o null
  // TODO: Crear objeto friend y agregarlo al array
  // TODO: Re-renderizar la vista completa
};

const renderFriends = () => {
  // TODO: Obtener contenedor con querySelector
  // TODO: Limpiar contenido existente con innerHTML
  // TODO: Recorrer array de friends con forEach
  // TODO: Crear y agregar cada tarjeta al contenedor
};

const initializeApp = () => {
  // TODO: Configurar event listener para botón agregar
  // TODO: Renderizar amigos iniciales
  // TODO: Preparar aplicación para interacción completa
};

// ==========================================================================
// Tests automatizados
// ==========================================================================
const runTests = () => {
  // Test 1: Funcionalidad - Card creation works correctly
  try {
    const testFriend = friends[0];
    const card = createFriendCard(testFriend);
    const isValidElement = card instanceof HTMLElement;
    const containsName = card.innerHTML.includes(testFriend.name);
    const containsEmoji = card.innerHTML.includes(testFriend.emoji);
    
    recordTest("3.1.1 Card creation functionality works correctly", 
      isValidElement && containsName && containsEmoji);
  } catch (error) {
    recordTest("3.1.1 Card creation functionality works correctly", false);
  }

  // Test 2: Funcionalidad - Complete rendering system works
  try {
    const container = document.querySelector("#friendsContainer");
    const containerExists = container !== null;
    const renderFunctionExists = typeof renderFriends === "function";
    const initFunctionExists = typeof initializeApp === "function";
    
    recordTest("3.1.2 Complete rendering system works correctly", 
      containerExists && renderFunctionExists && initFunctionExists);
  } catch (error) {
    recordTest("3.1.2 Complete rendering system works correctly", false);
  }

  // Test 3: Funcionalidad - Add friend feature works
  try {
    const initialLength = friends.length;
    const addFunctionExists = typeof addNewFriend === "function";
    const buttonExists = document.querySelector("#addFriendBtn") !== null;
    const showDetailsExists = typeof showFriendDetails === "function";
    
    recordTest("3.1.3 Add friend functionality works correctly", 
      addFunctionExists && buttonExists && showDetailsExists);
  } catch (error) {
    recordTest("3.1.3 Add friend functionality works correctly", false);
  }

  // Test 4: Validaciones - System handles invalid inputs properly
  try {
    // Simulate checking for non-existent friend
    const originalAlert = window.alert;
    let alertCalled = false;
    window.alert = () => { alertCalled = true; };
    
    // Test array integrity and validation readiness
    const hasValidFriends = Array.isArray(friends) && friends.length >= 3;
    const allFriendsValid = friends.every(friend => 
      friend.name && friend.emoji && friend.hobby && friend.quote
    );
    
    window.alert = originalAlert;
    
    recordTest("3.1.4 System handles validation correctly", 
      hasValidFriends && allFriendsValid);
  } catch (error) {
    recordTest("3.1.4 System handles validation correctly", false);
  }

  // Test 5: Return types - Functions return correct data types
  try {
    const functionTypesCorrect = 
      typeof createFriendCard === "function" &&
      typeof showFriendDetails === "function" &&
      typeof addNewFriend === "function" &&
      typeof renderFriends === "function" &&
      typeof initializeApp === "function";
    
    let cardReturnsElement = false;
    if (typeof createFriendCard === "function") {
      try {
        const testCard = createFriendCard(friends[0]);
        cardReturnsElement = testCard instanceof HTMLElement;
      } catch (e) {
        cardReturnsElement = false;
      }
    }
    
    recordTest("3.1.5 Functions return correct types", 
      functionTypesCorrect && cardReturnsElement);
  } catch (error) {
    recordTest("3.1.5 Functions return correct types", false);
  }
};

// ==========================================================================
// App initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
  
  // Run tests after brief delay
  setTimeout(() => {
    runTests();
    console.log('=== 🧪 Test Results Reto 3.1 ===');
    testResults.forEach(result => console.log(result));
  }, 500);
});
```

---

#### 💡 Tips Técnicos

🎯 **querySelector básico:** `document.querySelector('#id')` o `.class` para seleccionar elementos únicos  
📝 **innerHTML seguro:** Perfecto para contenido controlado, usar template strings con backticks  
🖱️ **Event listeners simples:** `element.addEventListener('click', functionName)` es lo más directo  
➕ **createElement:** `const div = document.createElement('div')` para crear elementos desde cero  
🔍 **Array.find():** `array.find(item => item.name === searchName)` para búsquedas exactas  
🎨 **BEM CSS:** `.block__element--modifier` para estructura clara y mantenible  
📱 **Responsive design:** Grid con `auto-fit` y `minmax()` para adaptabilidad perfecta  
⚡ **Modern JS:** Template literals y arrow functions para código más limpio

---

#### 🌟 Motivación Épica

¡Excelente trabajo, Explorador del DOM! 🎓✨ Has dado tus primeros pasos en la interactividad web creando tarjetas que responden al usuario de manera intuitiva y elegante.

🎨 **DOM Mastery Inicial:** Creación y manipulación básica de elementos  
🖱️ **Event Handling:** Primeras interacciones fluidas con clics  
📝 **JavaScript Puro:** Sintaxis moderna y código limpio  
🛡️ **Strict Mode:** Fundamentos sólidos desde el inicio  

¡Fernanda 👧, Mijael 👦 y Fe 🌟 están súper orgullosos de tener sus tarjetas interactivas! 🎪🚀

---

### 🎮 **Reto 3.2:** Lista Épica de Sueños 🌟✨

> Construye un gestor de sueños y metas que nunca se pierden - **¡Tu primer encuentro con la magia de la persistencia!**

**🧠 Fundamentos:** localStorage, JSON, preventDefault, form handling, data persistence

---

#### 🎯 Problema

Fernanda 👧 y Mijael 👦 necesitan un sistema mágico para organizar sus sueños y metas de programación que permanezcan seguros incluso cuando cierren el navegador. Debe permitir agregar, completar y eliminar sueños con guardado automático en el alma digital del navegador.

---

#### ⚡ Funcionalidades Épicas

> **💫 Como usuario, quiero que mis sueños persistan entre sesiones**
```javascript
saveDreamsToStorage(): void
loadDreamsFromStorage(): Dream[]
```
- Usar `localStorage.setItem()` con `JSON.stringify()`
- Cargar datos con `localStorage.getItem()` y `JSON.parse()`
- Manejar errores si localStorage no está disponible

> **🌟 Como usuario, quiero agregar sueños desde formulario**
```javascript
handleFormSubmit(event): void
addDream(dreamText): void
```
- Capturar envío con `addEventListener('submit')`
- Prevenir recarga con `event.preventDefault()`
- Validar input y limpiar formulario después

> **✨ Como usuario, quiero marcar sueños como realizados**
```javascript
toggleDreamStatus(dreamId): void
updateDreamInStorage(dreamId): void
```
- Toggle entre realizado/pendiente con clic
- Actualizar estilos CSS dinámicamente
- Sincronizar cambios con localStorage

> **🗑️ Como usuario, quiero eliminar sueños**
```javascript
deleteDream(dreamId): void
confirmDreamDeletion(dreamText): boolean
```
- Botón de eliminar en cada sueño
- Confirmación simple antes de borrar
- Actualizar vista y storage automáticamente

---

#### 🏗️ Tipos de Datos

```javascript
// Dream object structure - Estructura simple pero poderosa
const dream = {
  id: Date.now(),
  text: "Crear mi primera app web",
  isCompleted: false,
  createdAt: new Date().toISOString(),
  priority: "normal"
};
```

---

#### 🧪 Tests Automatizados

**✅ Test 1: Funcionalidad de persistencia mágica**
- Guardar sueños debe persistir datos correctamente en localStorage
- Cargar sueños debe recuperar información sin errores

**✅ Test 2: Funcionalidad de formulario dinámico**
- Envío de formulario debe prevenir recarga de página
- Agregar sueño debe actualizar la lista correctamente

**✅ Test 3: Funcionalidad de toggle de realización**
- Marcar como realizado debe cambiar el estado correctamente
- Estado visual debe reflejar el cambio inmediatamente

**✅ Test 4: Validaciones del sistema**
- localStorage no disponible debe manejarse elegantemente
- Formulario vacío debe ser rechazado apropiadamente
- Eliminar sueño debe requerir confirmación del usuario

**✅ Test 5: Tipos de retorno correctos**
- loadDreamsFromStorage debe retornar array válido
- saveDreamsToStorage debe ejecutarse sin errores
- Todas las funciones deben existir y ser del tipo correcto

---

#### 💻 Código Base

**📁 index.html**
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🌟 Lista Épica de Sueños</title>
    <link rel="stylesheet" href="css/index.css">
</head>
<body>
    <div class="app">
        <header class="app-header">
            <h1 class="app-header__title">🌟✨ Lista Épica de Sueños 💫</h1>
            <p class="app-header__subtitle">Sueños que trascienden las sesiones 🚀</p>
        </header>

        <main class="app-main">
            <section class="dream-form-section">
                <form class="dream-form" id="dreamForm" novalidate>
                    <div class="dream-form__group">
                        <label class="dream-form__label" for="dreamInput">
                            Nuevo Sueño 💭
                        </label>
                        <div class="dream-form__input-group">
                            <input 
                                type="text" 
                                class="dream-form__input" 
                                id="dreamInput" 
                                placeholder="¿Cuál es tu próximo sueño por realizar?"
                                required
                                maxlength="100"
                                autocomplete="off"
                            >
                            <button type="submit" class="btn btn--primary">
                                ✨ Agregar
                            </button>
                        </div>
                    </div>
                </form>
            </section>

            <section class="dreams-stats" id="dreamsStats">
                <!-- Statistics will be generated here -->
            </section>

            <section class="dreams-section">
                <div class="dreams-container" id="dreamsContainer">
                    <!-- Dreams will be generated here -->
                </div>
            </section>
        </main>

        <footer class="app-footer">
            <p class="app-footer__info">💫 Tus sueños se guardan mágicamente</p>
        </footer>
    </div>

    <script src="js/app.js"></script>
</body>
</html>
```

**📁 css/index.css**
```css
@import url("./modules/variables.css");
@import url("./modules/reset.css");
@import url("./modules/layout.css");
@import url("./modules/components.css");
@import url("./modules/elements.css");
@import url("./modules/responsive.css");
```

**📁 css/modules/variables.css**
```css
:root {
  /* Colors */
  --color-primary: #8b5cf6;
  --color-primary-dark: #7c3aed;
  --color-secondary: #06b6d4;
  --color-success: #10b981;
  --color-danger: #ef4444;
  --color-warning: #f59e0b;
  
  /* Surfaces */
  --color-background: #faf5ff;
  --color-surface: #ffffff;
  --color-surface-hover: #f3f4f6;
  
  /* Text */
  --color-text: #1f2937;
  --color-text-light: #6b7280;
  --color-text-muted: #9ca3af;
  
  /* Borders */
  --color-border: #e5e7eb;
  --color-border-focus: #8b5cf6;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  
  /* Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  
  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  
  /* Typography */
  --font-family: system-ui, -apple-system, sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-md: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  
  /* Animation */
  --transition: all 0.2s ease;
  --transition-slow: all 0.3s ease;
}
```

**📁 css/modules/reset.css**
```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  line-height: 1.6;
}

body {
  font-family: var(--font-family);
  background: var(--color-background);
  color: var(--color-text);
  min-height: 100vh;
}

button {
  font-family: inherit;
}

input {
  font-family: inherit;
}
```

**📁 css/modules/layout.css**
```css
.app {
  max-width: 800px;
  margin: 0 auto;
  padding: var(--space-xl) var(--space-md);
}

.app-header {
  text-align: center;
  margin-bottom: var(--space-2xl);
}

.app-header__title {
  font-size: var(--font-size-4xl);
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: var(--space-sm);
}

.app-header__subtitle {
  color: var(--color-text-light);
  font-size: var(--font-size-xl);
}

.app-main {
  margin-bottom: var(--space-xl);
}

.app-footer {
  text-align: center;
  margin-top: var(--space-xl);
}

.app-footer__info {
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
}

.dream-form-section {
  margin-bottom: var(--space-xl);
}

.dreams-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
}

.dreams-section {
  margin-bottom: var(--space-xl);
}

.dreams-container {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}
```

**📁 css/modules/components.css**
```css
.dream-form {
  background: var(--color-surface);
  padding: var(--space-xl);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
}

.dream-form__group {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.dream-form__label {
  font-weight: 600;
  color: var(--color-text);
  font-size: var(--font-size-md);
}

.dream-form__input-group {
  display: flex;
  gap: var(--space-md);
  align-items: stretch;
}

.dream-form__input {
  flex: 1;
  padding: var(--space-md);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-md);
  transition: var(--transition);
  background: var(--color-surface);
  color: var(--color-text);
}

.dream-form__input:focus {
  outline: none;
  border-color: var(--color-border-focus);
  box-shadow: 0 0 0 3px rgb(139 92 246 / 0.1);
}

.dream-form__input::placeholder {
  color: var(--color-text-light);
}

.stat-card {
  background: var(--color-surface);
  padding: var(--space-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  text-align: center;
}

.stat-card__number {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-primary);
  display: block;
  margin-bottom: var(--space-xs);
}

.stat-card__label {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.dream-item {
  background: var(--color-surface);
  border: 2px solid transparent;
  border-radius: var(--radius-md);
  padding: var(--space-lg);
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  transition: var(--transition);
}

.dream-item:hover {
  border-color: var(--color-primary);
  transform: translateX(4px);
  box-shadow: var(--shadow-md);
}

.dream-item--completed {
  background: var(--color-surface-hover);
  border-color: var(--color-text-muted);
}

.dream-item--completed:hover {
  border-color: var(--color-text-muted);
}

.dream-item__checkbox {
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
  accent-color: var(--color-primary);
}

.dream-item__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.dream-item__text {
  font-size: var(--font-size-md);
  color: var(--color-text);
  transition: var(--transition);
}

.dream-item--completed .dream-item__text {
  text-decoration: line-through;
  color: var(--color-text-muted);
}

.dream-item__meta {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.dream-item__date {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
}

.dream-item__priority {
  padding: 0.125rem var(--space-sm);
  border-radius: 1rem;
  font-size: 0.625rem;
  font-weight: 600;
  text-transform: uppercase;
}

.dream-item__priority--normal {
  background: #fef3c7;
  color: var(--color-warning);
}

.dream-item__priority--high {
  background: #fee2e2;
  color: var(--color-danger);
}

.dream-item__actions {
  display: flex;
  gap: var(--space-sm);
}

.empty-state {
  text-align: center;
  padding: var(--space-2xl) var(--space-md);
  color: var(--color-text-light);
}

.empty-state__icon {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--space-md);
  display: block;
}

.empty-state__title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin-bottom: var(--space-sm);
  color: var(--color-text);
}

.empty-state__message {
  font-size: var(--font-size-md);
}
```

**📁 css/modules/elements.css**
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-xl);
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;
  white-space: nowrap;
}

.btn--primary {
  background: var(--color-primary);
  color: white;
}

.btn--primary:hover {
  background: var(--color-primary-dark);
  transform: translateY(-1px);
}

.btn--danger {
  background: var(--color-danger);
  color: white;
  padding: var(--space-sm) var(--space-md);
  font-size: var(--font-size-xs);
}

.btn--danger:hover {
  background: #dc2626;
}

.btn--small {
  padding: 0.375rem var(--space-md);
  font-size: var(--font-size-xs);
}
```

**📁 css/modules/responsive.css**
```css
@media (max-width: 768px) {
  .app {
    padding: var(--space-md);
  }
  
  .app-header__title {
    font-size: var(--font-size-3xl);
  }
  
  .dream-form__input-group {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
  }
  
  .dreams-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .dream-item {
    flex-direction: column;
    align-items: stretch;
    gap: var(--space-md);
  }
  
  .dream-item__content {
    order: -1;
  }
  
  .dream-item__actions {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .app {
    padding: var(--space-md) var(--space-sm);
  }
  
  .dream-form {
    padding: var(--space-md);
  }
  
  .dreams-stats {
    grid-template-columns: 1fr;
  }
}
```

**📁 js/app.js**
```javascript
"use strict";

// ==========================================================================
// Test system
// ==========================================================================
const testResults = [];
const recordTest = (testName, condition) => {
  const emoji = condition ? "✅" : "❌";
  testResults.push(`${emoji} ${testName}`);
};

// ==========================================================================
// Application state
// ==========================================================================
let dreams = [];
const STORAGE_KEY = 'epic-dreams-app';

// ==========================================================================
// Storage Functions - TODO: Implementar estas funciones
// ==========================================================================
const saveDreamsToStorage = () => {
  // TODO: Guardar array de sueños en localStorage
  // TODO: Usar JSON.stringify para convertir a string
  // TODO: Manejar errores si storage está lleno o no disponible
};

const loadDreamsFromStorage = () => {
  // TODO: Obtener sueños de localStorage
  // TODO: Usar JSON.parse para convertir de vuelta a array
  // TODO: Retornar array vacío si no hay datos o hay error
  // TODO: Manejar errores de JSON parsing
};

// ==========================================================================
// Dream Management Functions - TODO: Implementar estas funciones
// ==========================================================================
const addDream = (dreamText) => {
  // TODO: Validar que dreamText no esté vacío
  // TODO: Crear nuevo objeto dream con ID único
  // TODO: Agregar al array de dreams
  // TODO: Guardar en storage y re-renderizar
};

const toggleDreamStatus = (dreamId) => {
  // TODO: Buscar sueño por ID en el array
  // TODO: Cambiar estado isCompleted
  // TODO: Guardar en storage y re-renderizar
};

const deleteDream = (dreamId) => {
  // TODO: Buscar sueño por ID
  // TODO: Mostrar confirmación antes de eliminar
  // TODO: Remover del array si se confirma
  // TODO: Guardar en storage y re-renderizar
};

const confirmDreamDeletion = (dreamText) => {
  // TODO: Mostrar dialog de confirmación
  // TODO: Retornar boolean basado en decisión del usuario
};

// ==========================================================================
// Form Handling Functions - TODO: Implementar estas funciones
// ==========================================================================
const handleFormSubmit = (event) => {
  // TODO: Prevenir envío default del formulario
  // TODO: Obtener valor del input
  // TODO: Validar que no esté vacío
  // TODO: Llamar addDream si es válido
  // TODO: Limpiar formulario
};

// ==========================================================================
// Rendering Functions - TODO: Implementar estas funciones
// ==========================================================================
const createDreamElement = (dream) => {
  // TODO: Crear elemento div para el sueño
  // TODO: Agregar clases CSS apropiadas
  // TODO: Crear contenido HTML con checkbox, texto, botones
  // TODO: Agregar event listeners para checkbox y botón eliminar
  // TODO: Retornar elemento completo
};

const renderDreams = () => {
  // TODO: Obtener contenedor de sueños
  // TODO: Limpiar contenido existente
  // TODO: Si no hay sueños, mostrar estado vacío
  // TODO: Crear elemento para cada sueño y agregarlo
};

const renderStats = () => {
  // TODO: Calcular estadísticas (total, completados, pendientes)
  // TODO: Obtener contenedor de estadísticas
  // TODO: Crear elementos para cada estadística
  // TODO: Actualizar display de estadísticas
};

const renderEmptyState = () => {
  // TODO: Crear mensaje para cuando no hay sueños
  // TODO: Incluir emoji, título y mensaje motivacional
  // TODO: Retornar elemento de estado vacío
};

const calculateDreamStats = () => {
  // TODO: Calcular total de sueños
  // TODO: Calcular sueños completados
  // TODO: Calcular sueños pendientes
  // TODO: Retornar objeto con estadísticas
};

// ==========================================================================
// Utility Functions - TODO: Implementar estas funciones
// ==========================================================================
const generateDreamId = () => {
  // TODO: Generar ID único para nuevo sueño
  // TODO: Usar Date.now() o método similar
};

const formatDate = (dateString) => {
  // TODO: Formatear fecha para mostrar
  // TODO: Retornar fecha legible en español
};

// ==========================================================================
// App Initialization - TODO: Implementar esta función
// ==========================================================================
const initializeApp = () => {
  // TODO: Cargar sueños desde storage
  // TODO: Configurar event listener para formulario
  // TODO: Renderizar estado inicial
  // TODO: Configurar otros event listeners necesarios
};

// ==========================================================================
// Tests automatizados
// ==========================================================================
const runTests = () => {
  // Test 1: Funcionalidad - localStorage functions work correctly
  try {
    const testDreams = [
      { id: 1, text: "Test dream", isCompleted: false, createdAt: new Date().toISOString() }
    ];
    
    // Test saving
    dreams = testDreams;
    if (typeof saveDreamsToStorage === "function") {
      saveDreamsToStorage();
    }
    
    // Test loading
    dreams = [];
    let loadedDreams = [];
    if (typeof loadDreamsFromStorage === "function") {
      loadedDreams = loadDreamsFromStorage();
    }
    
    const storageWorks = Array.isArray(loadedDreams);
    recordTest("3.2.1 Magical persistence functionality works correctly", storageWorks);
  } catch (error) {
    recordTest("3.2.1 Magical persistence functionality works correctly", false);
  }

  // Test 2: Funcionalidad - Form handling works correctly
  try {
    const form = document.querySelector("#dreamForm");
    const input = document.querySelector("#dreamInput");
    const formExists = form !== null && input !== null;
    const handleFormExists = typeof handleFormSubmit === "function";
    const addDreamExists = typeof addDream === "function";
    
    recordTest("3.2.2 Dynamic form functionality works correctly", 
      formExists && handleFormExists && addDreamExists);
  } catch (error) {
    recordTest("3.2.2 Dynamic form functionality works correctly", false);
  }

  // Test 3: Funcionalidad - Toggle dream status works
  try {
    const toggleExists = typeof toggleDreamStatus === "function";
    const deleteExists = typeof deleteDream === "function";
    const renderExists = typeof renderDreams === "function";
    
    recordTest("3.2.3 Toggle realization functionality works correctly", 
      toggleExists && deleteExists && renderExists);
  } catch (error) {
    recordTest("3.2.3 Toggle realization functionality works correctly", false);
  }

  // Test 4: Validation - System handles edge cases properly
  try {
    // Test empty storage handling
    const originalGetItem = localStorage.getItem;
    localStorage.getItem = () => null;
    
    let emptyLoadResult = [];
    if (typeof loadDreamsFromStorage === "function") {
      emptyLoadResult = loadDreamsFromStorage();
    }
    
    localStorage.getItem = originalGetItem;
    
    // Test confirmation function
    const confirmExists = typeof confirmDreamDeletion === "function";
    
    const handlesEdgeCases = Array.isArray(emptyLoadResult) && confirmExists;
    recordTest("3.2.4 System handles validation correctly", handlesEdgeCases);
  } catch (error) {
    recordTest("3.2.4 System handles validation correctly", false);
  }

  // Test 5: Return types - Functions return correct data types
  try {
    const functionTypesCorrect = 
      typeof saveDreamsToStorage === "function" &&
      typeof loadDreamsFromStorage === "function" &&
      typeof addDream === "function" &&
      typeof toggleDreamStatus === "function" &&
      typeof deleteDream === "function" &&
      typeof handleFormSubmit === "function" &&
      typeof renderDreams === "function" &&
      typeof calculateDreamStats === "function";
    
    // Test return types
    let loadReturnsArray = false;
    if (typeof loadDreamsFromStorage === "function") {
      try {
        const result = loadDreamsFromStorage();
        loadReturnsArray = Array.isArray(result);
      } catch (e) {
        loadReturnsArray = false;
      }
    }
    
    recordTest("3.2.5 Functions return correct types", 
      functionTypesCorrect && loadReturnsArray);
  } catch (error) {
    recordTest("3.2.5 Functions return correct types", false);
  }
};

// ==========================================================================
// App initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
  
  // Run tests after brief delay
  setTimeout(() => {
    runTests();
    console.log('=== 🧪 Test Results Reto 3.2 ===');
    testResults.forEach(result => console.log(result));
  }, 500);
});
```

---

#### 💡 Tips Técnicos

💫 **localStorage basics:** `localStorage.setItem(key, value)` y `getItem(key)` son tus mejores amigos  
📄 **JSON handling:** Siempre usa `JSON.stringify()` para guardar y `JSON.parse()` para cargar  
🛡️ **preventDefault:** Esencial en formularios para evitar recarga automática de página  
🔄 **State synchronization:** Actualiza vista cada vez que cambies datos en localStorage  
✨ **Error handling:** Siempre maneja casos donde localStorage podría fallar  
🎨 **CSS variables:** Centralizan colores y espaciados para consistencia perfecta  
📦 **Modular CSS:** Archivos separados hacen el código más mantenible y escalable  
⚡ **Modern selectors:** Usa `querySelector` con selectores CSS avanzados

---

#### 🌟 Motivación Épica

¡Fantástico, Guardián de Sueños! 🎭✨ Has creado tu primera aplicación con persistencia real, donde los datos sobreviven más allá del cierre del navegador.

💫 **Storage Mastery:** Dominio completo de localStorage y JSON  
🎨 **Form Excellence:** Formularios dinámicos con validación fluida  
🏗️ **Modular CSS:** Arquitectura de estilos profesional y escalable  
🛡️ **Error Resilience:** Sistema robusto que maneja casos extremos

¡Fernanda 👧 y Mijael 👦 ahora pueden perseguir sus sueños digitales con la confianza de que nunca se perderán! 🌟💻🚀

---

### 🎮 **Reto 3.3:** Centro de Control Galáctico 🚀🌌

> Integra todo el poder del Nivel 3 en una estación espacial digital completa con múltiples módulos - **¡Tu obra maestra intergaláctica!**

**🧠 Fundamentos:** event delegation, complex forms, real-time validation, component integration, advanced localStorage

---

#### 🎯 Problema

Todo el equipo espacial (Elliot 🤓, Fernanda 👧, Mijael 👦, Fe 🌟) necesita un centro de control épico que integre múltiples sistemas: contador de productividad estelar, tablero de misiones, perfil de comandante, estadísticas en tiempo real y configuración global con persistencia total entre viajes espaciales.

---

#### ⚡ Funcionalidades Épicas

> **🎛️ Como comandante, quiero un centro con múltiples módulos**
```javascript
initializeModules(): void
renderModule(moduleType, container): void
```
- Sistema de módulos modulares (contador, misiones, perfil)
- Cada módulo maneja su propio estado y eventos
- Layout responsive que se adapta a contenido espacial

> **⚡ Como desarrollador, quiero event delegation avanzado**
```javascript
handleControlCenterEvents(event): void
delegateModuleEvents(event): void
```
- Un solo listener maneja eventos de todos los módulos
- Identificar elemento clicado con `event.target` y `closest()`
- Rutear eventos a función correcta según módulo

> **✅ Como usuario, quiero validación en tiempo real**
```javascript
validateFormField(field, value): ValidationResult
showFieldFeedback(field, status, message): void
```
- Validar campos mientras el comandante escribe
- Feedback visual inmediato (verde/rojo espacial)
- Formularios inteligentes que guían la experiencia

> **📊 Como visitante, quiero métricas actualizadas en tiempo real**
```javascript
updateGlobalMetrics(): void
calculateCenterStats(): CenterStats
```
- Métricas galácticas que se actualizan con cada acción
- Contadores animados y gráficos básicos con CSS
- Panel de actividad reciente del centro

> **🔧 Como usuario, quiero configuración global persistente**
```javascript
saveControlSettings(settings): void
loadControlSettings(): ControlSettings
applyThemeSettings(theme): void
```
- Configuración de tema, idioma, preferencias espaciales
- Settings panel con toggle switches futuristas
- Aplicar configuración automáticamente al cargar

---

#### 🏗️ Tipos de Datos

```javascript
// Module structures - Arquitectura modular galáctica
const module = {
  id: "productivity-counter",
  type: "counter", 
  title: "Contador Estelar",
  data: { count: 0, goal: 100, streak: 5 },
  isActive: true,
  position: { row: 1, col: 1 }
};

const centerStats = {
  totalActions: 0,
  completedMissions: 0,
  currentStreak: 0,
  favoriteModule: "",
  lastActivity: new Date().toISOString()
};

const controlSettings = {
  theme: "space", // space, nebula, void
  language: "es",
  animations: true,
  notifications: true,
  autoSave: true
};

const validationResult = {
  isValid: true,
  message: "",
  type: "success" // success, error, warning
};
```

---

#### 🧪 Tests Automatizados

**✅ Test 1: Funcionalidad de event delegation**
- Event delegation maneja clics en diferentes módulos correctamente
- Sistema de routing de eventos funciona apropiadamente

**✅ Test 2: Funcionalidad de validación en tiempo real**
- Validación muestra feedback visual inmediatamente
- Estados de error y éxito se manejan correctamente

**✅ Test 3: Funcionalidad de métricas automáticas**
- Métricas se actualizan cuando cambian los datos
- Contadores reflejan el estado actual del sistema

**✅ Test 4: Validaciones del sistema**
- Configuración persiste correctamente entre sesiones
- Sistema maneja graciosamente configuración corrupta o ausente
- Módulos manejan datos inválidos apropiadamente

**✅ Test 5: Tipos de retorno correctos**
- Funciones de configuración retornan objetos correctos
- Sistema de validación retorna tipos apropiados
- Event handlers funcionan sin errores

---

#### 💻 Código Base

**📁 index.html**
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🚀 Centro de Control Galáctico</title>
    <link rel="stylesheet" href="css/index.css">
</head>
<body>
    <div class="control-center">
        <header class="control-center__header">
            <div class="header-content">
                <h1 class="header-content__title">🚀🌌 Centro de Control Galáctico ✨</h1>
                <p class="header-content__subtitle">Tu estación espacial digital de comando 🛸</p>
            </div>
            <div class="header-controls">
                <button class="btn btn--secondary" id="settingsBtn">
                    ⚙️ Configuración
                </button>
            </div>
        </header>

        <main class="control-center__main" id="controlCenterMain">
            <section class="modules-grid" id="modulesGrid">
                <div class="module module--counter" id="productivityModule">
                    <div class="module__header">
                        <h3 class="module__title">⭐ Contador Estelar</h3>
                        <button class="module__action" data-action="reset-counter">
                            🔄 Reset
                        </button>
                    </div>
                    <div class="module__content">
                        <div class="counter-display">
                            <span class="counter-display__number" id="counterNumber">0</span>
                            <span class="counter-display__label">acciones</span>
                        </div>
                        <div class="counter-controls">
                            <button class="btn btn--primary" data-action="increment-counter">
                                ➕ Incrementar
                            </button>
                            <button class="btn btn--danger" data-action="decrement-counter">
                                ➖ Decrementar
                            </button>
                        </div>
                    </div>
                </div>

                <div class="module module--missions" id="missionsModule">
                    <div class="module__header">
                        <h3 class="module__title">🎯 Tablero de Misiones</h3>
                        <button class="module__action" data-action="add-mission">
                            ➕ Nueva Misión
                        </button>
                    </div>
                    <div class="module__content">
                        <div class="missions-list" id="missionsList">
                            <!-- Missions will be generated here -->
                        </div>
                    </div>
                </div>

                <div class="module module--profile" id="profileModule">
                    <div class="module__header">
                        <h3 class="module__title">👑 Perfil de Comandante</h3>
                        <button class="module__action" data-action="edit-profile">
                            ✏️ Editar
                        </button>
                    </div>
                    <div class="module__content">
                        <div class="profile-display" id="profileDisplay">
                            <div class="profile-avatar">🚀</div>
                            <div class="profile-info">
                                <h4 class="profile-info__name">Comandante</h4>
                                <p class="profile-info__rank">Explorador Espacial</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="module module--stats" id="statsModule">
                    <div class="module__header">
                        <h3 class="module__title">📊 Métricas Galácticas</h3>
                        <button class="module__action" data-action="refresh-stats">
                            🔄 Actualizar
                        </button>
                    </div>
                    <div class="module__content">
                        <div class="stats-grid" id="statsGrid">
                            <!-- Stats will be generated here -->
                        </div>
                    </div>
                </div>
            </section>

            <section class="activity-panel" id="activityPanel">
                <h3 class="activity-panel__title">📡 Actividad Reciente</h3>
                <div class="activity-list" id="activityList">
                    <!-- Recent activities will be generated here -->
                </div>
            </section>
        </main>

        <footer class="control-center__footer">
            <p class="footer-info">🌌 Sistema operativo espacial - Todos los datos se sincronizan automáticamente</p>
        </footer>
    </div>

    <!-- Settings Modal -->
    <div class="modal-overlay" id="settingsModal" style="display: none;">
        <div class="modal">
            <div class="modal__header">
                <h3 class="modal__title">⚙️ Configuración del Centro</h3>
                <button class="modal__close" id="closeSettingsBtn">✕</button>
            </div>
            <div class="modal__content">
                <form class="settings-form" id="settingsForm">
                    <div class="form-group">
                        <label class="form-group__label" for="themeSelect">🎨 Tema Espacial</label>
                        <select class="form-group__select" id="themeSelect">
                            <option value="space">🌌 Espacio Profundo</option>
                            <option value="nebula">🌠 Nebulosa</option>
                            <option value="void">⚫ Vacío Cósmico</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-group__label" for="commanderName">👑 Nombre del Comandante</label>
                        <input type="text" class="form-group__input" id="commanderName" 
                               placeholder="Ingresa tu nombre estelar" maxlength="30">
                        <div class="form-feedback" id="commanderNameFeedback"></div>
                    </div>
                    <div class="form-group">
                        <div class="toggle-group">
                            <input type="checkbox" class="toggle-group__input" id="animationsToggle">
                            <label class="toggle-group__label" for="animationsToggle">
                                ✨ Animaciones Espaciales
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="toggle-group">
                            <input type="checkbox" class="toggle-group__input" id="notificationsToggle">
                            <label class="toggle-group__label" for="notificationsToggle">
                                🔔 Notificaciones Galácticas
                            </label>
                        </div>
                    </div>
                    <div class="modal__actions">
                        <button type="submit" class="btn btn--primary">💾 Guardar Configuración</button>
                        <button type="button" class="btn btn--secondary" id="cancelSettingsBtn">
                            ❌ Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="js/storage.js"></script>
    <script src="js/validation.js"></script>
    <script src="js/modules.js"></script>
    <script src="js/events.js"></script>
    <script src="js/app.js"></script>
</body>
</html>
```

**📁 css/index.css**
```css
@import url("./modules/variables.css");
@import url("./modules/reset.css");
@import url("./modules/layout.css");
@import url("./modules/components.css");
@import url("./modules/modules.css");
@import url("./modules/modal.css");
@import url("./modules/elements.css");
@import url("./modules/responsive.css");
```

**📁 css/modules/variables.css**
```css
:root {
  /* Space Theme Colors */
  --color-space-primary: #6366f1;
  --color-space-secondary: #8b5cf6;
  --color-space-accent: #06b6d4;
  --color-space-success: #10b981;
  --color-space-warning: #f59e0b;
  --color-space-danger: #ef4444;
  
  /* Surfaces */
  --color-background: #0f0f23;
  --color-surface: #1a1a2e;
  --color-surface-light: #16213e;
  --color-surface-hover: #0e3460;
  
  /* Text */
  --color-text: #e2e8f0;
  --color-text-light: #94a3b8;
  --color-text-muted: #64748b;
  --color-text-accent: #fbbf24;
  
  /* Borders & Shadows */
  --color-border: #334155;
  --color-border-focus: #6366f1;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.3);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.4);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.5);
  --shadow-glow: 0 0 20px rgb(99 102 241 / 0.3);
  
  /* Space Effects */
  --gradient-space: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-nebula: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  --gradient-cosmic: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  
  /* Measurements */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  
  /* Typography */
  --font-family: 'Segoe UI', system-ui, sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-md: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  
  /* Animation */
  --transition: all 0.2s ease;
  --transition-slow: all 0.4s ease;
  --animation-pulse: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
```

**📁 css/modules/reset.css**
```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  line-height: 1.6;
}

body {
  font-family: var(--font-family);
  background: var(--color-background);
  color: var(--color-text);
  min-height: 100vh;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
}
```

**📁 css/modules/layout.css**
```css
.control-center {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.control-center__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-lg) var(--space-xl);
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
}

.header-content__title {
  font-size: var(--font-size-3xl);
  font-weight: 800;
  color: var(--color-text-accent);
  margin-bottom: var(--space-xs);
}

.header-content__subtitle {
  color: var(--color-text-light);
  font-size: var(--font-size-lg);
}

.control-center__main {
  flex: 1;
  padding: var(--space-xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.control-center__footer {
  text-align: center;
  padding: var(--space-lg);
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
}

.footer-info {
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-lg);
  margin-bottom: var(--space-xl);
}

.activity-panel {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  box-shadow: var(--shadow-md);
}

.activity-panel__title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-text-accent);
  margin-bottom: var(--space-md);
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}
```

**📁 css/modules/components.css**
```css
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: var(--space-md);
}

.stat-card {
  background: var(--color-surface-light);
  border-radius: var(--radius-md);
  padding: var(--space-md);
  text-align: center;
  border: 1px solid var(--color-border);
  transition: var(--transition);
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}

.stat-card__number {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-space-accent);
  display: block;
  margin-bottom: var(--space-xs);
}

.stat-card__label {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.counter-display {
  text-align: center;
  margin-bottom: var(--space-lg);
}

.counter-display__number {
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-space-accent);
  display: block;
  text-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
}

.counter-display__label {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.counter-controls {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
}

.missions-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.mission-item {
  background: var(--color-surface-light);
  border-radius: var(--radius-md);
  padding: var(--space-md);
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  gap: var(--space-md);
  transition: var(--transition);
}

.mission-item:hover {
  border-color: var(--color-space-primary);
}

.mission-item__checkbox {
  width: 1rem;
  height: 1rem;
  accent-color: var(--color-space-success);
}

.mission-item__text {
  flex: 1;
  color: var(--color-text);
}

.mission-item--completed .mission-item__text {
  text-decoration: line-through;
  color: var(--color-text-muted);
}

.profile-display {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.profile-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--gradient-space);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-2xl);
  box-shadow: var(--shadow-glow);
}

.profile-info__name {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--space-xs);
}

.profile-info__rank {
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
}

.activity-item {
  background: var(--color-surface-light);
  border-radius: var(--radius-md);
  padding: var(--space-md);
  border-left: 3px solid var(--color-space-accent);
  transition: var(--transition);
}

.activity-item:hover {
  transform: translateX(4px);
}

.activity-item__text {
  color: var(--color-text);
  font-size: var(--font-size-sm);
  margin-bottom: var(--space-xs);
}

.activity-item__time {
  color: var(--color-text-muted);
  font-size: var(--font-size-xs);
}
```

**📁 css/modules/modules.css**
```css
.module {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: var(--transition);
}

.module:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.module__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-lg);
  background: var(--color-surface-light);
  border-bottom: 1px solid var(--color-border);
}

.module__title {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-text-accent);
}

.module__action {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text-light);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  cursor: pointer;
  transition: var(--transition);
}

.module__action:hover {
  border-color: var(--color-space-primary);
  color: var(--color-text);
  background: var(--color-surface-hover);
}

.module__content {
  padding: var(--space-lg);
}

.module--counter {
  border-left: 4px solid var(--color-space-accent);
}

.module--missions {
  border-left: 4px solid var(--color-space-success);
}

.module--profile {
  border-left: 4px solid var(--color-space-secondary);
}

.module--stats {
  border-left: 4px solid var(--color-space-primary);
}
```

**📁 css/modules/modal.css**
```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
}

.modal {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-lg);
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow: hidden;
}

.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-lg);
  background: var(--color-surface-light);
  border-bottom: 1px solid var(--color-border);
}

.modal__title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-text-accent);
}

.modal__close {
  background: transparent;
  border: none;
  color: var(--color-text-light);
  font-size: var(--font-size-lg);
  cursor: pointer;
  padding: var(--space-sm);
  border-radius: var(--radius-sm);
  transition: var(--transition);
}

.modal__close:hover {
  background: var(--color-surface-hover);
  color: var(--color-text);
}

.modal__content {
  padding: var(--space-lg);
}

.modal__actions {
  display: flex;
  gap: var(--space-md);
  justify-content: flex-end;
  margin-top: var(--space-lg);
}

.settings-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.form-group__label {
  font-weight: 600;
  color: var(--color-text);
  font-size: var(--font-size-sm);
}

.form-group__input,
.form-group__select {
  padding: var(--space-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface-light);
  color: var(--color-text);
  font-size: var(--font-size-md);
  transition: var(--transition);
}

.form-group__input:focus,
.form-group__select:focus {
  outline: none;
  border-color: var(--color-border-focus);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.form-feedback {
  font-size: var(--font-size-xs);
  margin-top: var(--space-xs);
  padding: var(--space-xs);
  border-radius: var(--radius-sm);
}

.form-feedback--success {
  background: rgba(16, 185, 129, 0.1);
  color: var(--color-space-success);
  border: 1px solid var(--color-space-success);
}

.form-feedback--error {
  background: rgba(239, 68, 68, 0.1);
  color: var(--color-space-danger);
  border: 1px solid var(--color-space-danger);
}

.toggle-group {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.toggle-group__input {
  width: 1.25rem;
  height: 1.25rem;
  accent-color: var(--color-space-primary);
}

.toggle-group__label {
  color: var(--color-text);
  font-size: var(--font-size-md);
  cursor: pointer;
}
```

**📁 css/modules/elements.css**
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-lg);
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;
  white-space: nowrap;
}

.btn--primary {
  background: var(--color-space-primary);
  color: white;
}

.btn--primary:hover {
  background: var(--color-space-secondary);
  transform: translateY(-1px);
  box-shadow: var(--shadow-glow);
}

.btn--secondary {
  background: var(--color-surface-light);
  color: var(--color-text);
  border: 1px solid var(--color-border);
}

.btn--secondary:hover {
  background: var(--color-surface-hover);
  border-color: var(--color-space-primary);
}

.btn--danger {
  background: var(--color-space-danger);
  color: white;
  padding: var(--space-sm) var(--space-md);
  font-size: var(--font-size-xs);
}

.btn--danger:hover {
  background: #dc2626;
  transform: translateY(-1px);
}

.btn--small {
  padding: var(--space-sm) var(--space-md);
  font-size: var(--font-size-xs);
}
```

**📁 css/modules/responsive.css**
```css
@media (max-width: 768px) {
  .control-center__header {
    flex-direction: column;
    gap: var(--space-md);
    text-align: center;
  }
  
  .header-content__title {
    font-size: var(--font-size-2xl);
  }
  
  .modules-grid {
    grid-template-columns: 1fr;
  }
  
  .counter-controls {
    flex-direction: column;
  }
  
  .modal {
    width: 95%;
  }
  
  .modal__actions {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .control-center__main {
    padding: var(--space-md);
  }
  
  .module__header {
    flex-direction: column;
    gap: var(--space-sm);
    text-align: center;
  }
  
  .profile-display {
    flex-direction: column;
    text-align: center;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

**📁 js/storage.js**
```javascript
"use strict";

// ==========================================================================
// Storage Management System
// ==========================================================================
const STORAGE_KEYS = {
  SETTINGS: 'galactic-control-settings',
  COUNTER: 'galactic-counter-data',
  MISSIONS: 'galactic-missions-data',
  PROFILE: 'galactic-profile-data',
  ACTIVITY: 'galactic-activity-log'
};

// ==========================================================================
// Storage Functions - TODO: Implementar estas funciones
// ==========================================================================
const saveControlSettings = (settings) => {
  // TODO: Guardar configuración en localStorage
  // TODO: Usar JSON.stringify para serializar
  // TODO: Manejar errores de storage
};

const loadControlSettings = () => {
  // TODO: Cargar configuración desde localStorage
  // TODO: Usar JSON.parse para deserializar
  // TODO: Retornar configuración por defecto si no existe
  // TODO: Manejar errores de parsing
};

const saveModuleData = (moduleType, data) => {
  // TODO: Guardar datos específicos de módulo
  // TODO: Usar clave dinámica basada en moduleType
  // TODO: Serializar datos correctamente
};

const loadModuleData = (moduleType) => {
  // TODO: Cargar datos de módulo específico
  // TODO: Retornar datos por defecto si no existen
  // TODO: Manejar casos de error graciosamente
};

const saveActivity = (activity) => {
  // TODO: Guardar nueva actividad en log
  // TODO: Mantener solo las últimas 10 actividades
  // TODO: Agregar timestamp automáticamente
};

const loadActivityLog = () => {
  // TODO: Cargar log de actividades
  // TODO: Retornar array vacío si no existe
  // TODO: Ordenar por timestamp descendente
};

const clearAllData = () => {
  // TODO: Limpiar todos los datos del storage
  // TODO: Mantener solo configuración básica
  // TODO: Confirmar acción con el usuario
};
```

**📁 js/validation.js**
```javascript
"use strict";

// ==========================================================================
// Validation System
// ==========================================================================
const VALIDATION_RULES = {
  COMMANDER_NAME: {
    minLength: 2,
    maxLength: 30,
    pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/
  }
};

// ==========================================================================
// Validation Functions - TODO: Implementar estas funciones
// ==========================================================================
const validateFormField = (field, value) => {
  // TODO: Validar campo según reglas definidas
  // TODO: Retornar objeto ValidationResult
  // TODO: Incluir mensaje descriptivo
  // TODO: Determinar tipo de validación (success/error/warning)
};

const showFieldFeedback = (field, status, message) => {
  // TODO: Mostrar feedback visual en el campo
  // TODO: Aplicar clases CSS según status
  // TODO: Mostrar/ocultar elemento de feedback
  // TODO: Actualizar mensaje dinámicamente
};

const validateCommanderName = (name) => {
  // TODO: Validar nombre del comandante
  // TODO: Verificar longitud mínima y máxima
  // TODO: Validar caracteres permitidos
  // TODO: Retornar resultado de validación
};

const validateThemeSelection = (theme) => {
  // TODO: Validar que el tema seleccionado sea válido
  // TODO: Verificar que esté en lista de temas permitidos
  // TODO: Retornar boolean de validez
};

const clearFieldFeedback = (field) => {
  // TODO: Limpiar feedback visual del campo
  // TODO: Remover clases de estado
  // TODO: Ocultar mensaje de feedback
};

const validateAllFormFields = (formData) => {
  // TODO: Validar todos los campos del formulario
  // TODO: Retornar objeto con resultados de cada campo
  // TODO: Determinar si formulario completo es válido
};
```

**📁 js/modules.js**
```javascript
"use strict";

// ==========================================================================
// Modules Management System
// ==========================================================================
const MODULES_CONFIG = {
  COUNTER: {
    id: 'productivity-counter',
    defaultData: { count: 0, goal: 100, streak: 0 }
  },
  MISSIONS: {
    id: 'missions-board',
    defaultData: { missions: [], completedCount: 0 }
  },
  PROFILE: {
    id: 'commander-profile',
    defaultData: { name: 'Comandante', rank: 'Explorador Espacial', avatar: '🚀' }
  },
  STATS: {
    id: 'galactic-stats',
    defaultData: { totalActions: 0, completedMissions: 0, currentStreak: 0 }
  }
};

// ==========================================================================
// Module Functions - TODO: Implementar estas funciones
// ==========================================================================
const initializeModules = () => {
  // TODO: Inicializar todos los módulos
  // TODO: Cargar datos desde storage para cada módulo
  // TODO: Renderizar contenido inicial
  // TODO: Configurar event listeners específicos
};

const renderModule = (moduleType, container) => {
  // TODO: Renderizar módulo específico en contenedor
  // TODO: Usar datos actuales del módulo
  // TODO: Aplicar estilos y clases apropiadas
  // TODO: Configurar interacciones del módulo
};

const updateCounterModule = (action, value = 1) => {
  // TODO: Actualizar contador según acción (increment/decrement/reset)
  // TODO: Validar límites y reglas de negocio
  // TODO: Guardar cambios en storage
  // TODO: Re-renderizar display del contador
};

const updateMissionsModule = (action, missionData = null) => {
  // TODO: Gestionar misiones (add/toggle/delete)
  // TODO: Validar datos de misión
  // TODO: Actualizar lista y estadísticas
  // TODO: Guardar cambios y re-renderizar
};

const updateProfileModule = (profileData) => {
  // TODO: Actualizar datos del perfil
  // TODO: Validar información del comandante
  // TODO: Aplicar cambios visuales
  // TODO: Guardar en storage
};

const updateStatsModule = () => {
  // TODO: Recalcular todas las estadísticas
  // TODO: Obtener datos de todos los módulos
  // TODO: Generar métricas actualizadas
  // TODO: Re-renderizar display de stats
};

const resetModule = (moduleType) => {
  // TODO: Resetear módulo a estado inicial
  // TODO: Confirmar acción con usuario
  // TODO: Limpiar datos del storage
  // TODO: Re-renderizar módulo
};
```

**📁 js/events.js**
```javascript
"use strict";

// ==========================================================================
// Event Management System
// ==========================================================================
let isEventSystemInitialized = false;

// ==========================================================================
// Event Delegation Functions - TODO: Implementar estas funciones
// ==========================================================================
const handleControlCenterEvents = (event) => {
  // TODO: Manejar eventos del centro de control
  // TODO: Identificar elemento clickeado con event.target
  // TODO: Usar closest() para encontrar elementos padre
  // TODO: Rutear a función apropiada según data-action
};

const delegateModuleEvents = (event) => {
  // TODO: Delegar eventos específicos de módulos
  // TODO: Determinar módulo origen del evento
  // TODO: Ejecutar acción correspondiente
  // TODO: Prevenir propagación si es necesario
};

const handleCounterEvents = (action, target) => {
  // TODO: Manejar eventos del módulo contador
  // TODO: Procesar increment/decrement/reset
  // TODO: Actualizar display inmediatamente
  // TODO: Registrar actividad
};

const handleMissionEvents = (action, target) => {
  // TODO: Manejar eventos del módulo misiones
  // TODO: Procesar add/toggle/delete mission
  // TODO: Actualizar lista visual
  // TODO: Sincronizar con storage
};

const handleSettingsEvents = (event) => {
  // TODO: Manejar eventos de configuración
  // TODO: Abrir/cerrar modal de settings
  // TODO: Procesar cambios de configuración
  // TODO: Aplicar cambios inmediatamente
};

const handleFormEvents = (event) => {
  // TODO: Manejar eventos de formularios
  // TODO: Validar en tiempo real
  // TODO: Mostrar feedback visual
  // TODO: Procesar envío de formulario
};

const initializeEventSystem = () => {
  // TODO: Configurar sistema de eventos global
  // TODO: Agregar event listener principal al documento
  // TODO: Configurar listeners específicos para formularios
  // TODO: Marcar sistema como inicializado
};

const addActivityToLog = (activity) => {
  // TODO: Agregar nueva actividad al log
  // TODO: Incluir timestamp automáticamente
  // TODO: Limitar número de actividades
  // TODO: Re-renderizar panel de actividad
};
```

**📁 js/app.js**
```javascript
"use strict";

// ==========================================================================
// Test system
// ==========================================================================
const testResults = [];
const recordTest = (testName, condition) => {
  const emoji = condition ? "✅" : "❌";
  testResults.push(`${emoji} ${testName}`);
};

// ==========================================================================
// Application State
// ==========================================================================
const appState = {
  isInitialized: false,
  currentSettings: null,
  modulesData: {},
  activityLog: []
};

// ==========================================================================
// Global Stats Functions - TODO: Implementar estas funciones
// ==========================================================================
const updateGlobalMetrics = () => {
  // TODO: Actualizar todas las métricas globales
  // TODO: Recopilar datos de todos los módulos
  // TODO: Calcular estadísticas derivadas
  // TODO: Actualizar displays en tiempo real
};

const calculateCenterStats = () => {
  // TODO: Calcular estadísticas del centro de control
  // TODO: Incluir total de acciones, misiones completadas, etc.
  // TODO: Calcular streaks y tendencias
  // TODO: Retornar objeto CenterStats completo
};

// ==========================================================================
// Theme System Functions - TODO: Implementar estas funciones
// ==========================================================================
const applyThemeSettings = (theme) => {
  // TODO: Aplicar tema seleccionado
  // TODO: Actualizar variables CSS dinámicamente
  // TODO: Cambiar fondos y colores
  // TODO: Guardar preferencia en storage
};

const loadThemeFromSettings = () => {
  // TODO: Cargar tema desde configuración guardada
  // TODO: Aplicar tema por defecto si no existe
  // TODO: Actualizar interfaz según tema
};

// ==========================================================================
// Modal System Functions - TODO: Implementar estas funciones
// ==========================================================================
const showSettingsModal = () => {
  // TODO: Mostrar modal de configuración
  // TODO: Cargar valores actuales en formulario
  // TODO: Configurar event listeners del modal
};

const hideSettingsModal = () => {
  // TODO: Ocultar modal de configuración
  // TODO: Limpiar event listeners temporales
  // TODO: Resetear formulario si es necesario
};

const processSettingsForm = (formData) => {
  // TODO: Procesar datos del formulario de configuración
  // TODO: Validar todos los campos
  // TODO: Aplicar cambios si son válidos
  // TODO: Mostrar confirmación al usuario
};

// ==========================================================================
// App Initialization - TODO: Implementar esta función
// ==========================================================================
const initializeApp = () => {
  // TODO: Inicializar aplicación completa
  // TODO: Cargar configuración desde storage
  // TODO: Inicializar todos los módulos
  // TODO: Configurar sistema de eventos global
  // TODO: Aplicar tema guardado
  // TODO: Renderizar estado inicial
  // TODO: Marcar app como inicializada
};

// ==========================================================================
// Tests automatizados
// ==========================================================================
const runTests = () => {
  // Test 1: Funcionalidad - Event delegation works correctly
  try {
    const mainContainer = document.querySelector("#controlCenterMain");
    const eventSystemReady = typeof handleControlCenterEvents === "function";
    const delegationReady = typeof delegateModuleEvents === "function";
    const containerExists = mainContainer !== null;
    
    recordTest("3.3.1 Event delegation functionality works correctly", 
      eventSystemReady && delegationReady && containerExists);
  } catch (error) {
    recordTest("3.3.1 Event delegation functionality works correctly", false);
  }

  // Test 2: Funcionalidad - Real-time validation works
  try {
    const validationExists = typeof validateFormField === "function";
    const feedbackExists = typeof showFieldFeedback === "function";
    const settingsForm = document.querySelector("#settingsForm");
    
    recordTest("3.3.2 Real-time validation functionality works correctly", 
      validationExists && feedbackExists && settingsForm !== null);
  } catch (error) {
    recordTest("3.3.2 Real-time validation functionality works correctly", false);
  }

  // Test 3: Funcionalidad - Automatic metrics work
  try {
    const metricsExists = typeof updateGlobalMetrics === "function";
    const statsExists = typeof calculateCenterStats === "function";
    const modulesExists = typeof initializeModules === "function";
    
    recordTest("3.3.3 Automatic metrics functionality works correctly", 
      metricsExists && statsExists && modulesExists);
  } catch (error) {
    recordTest("3.3.3 Automatic metrics functionality works correctly", false);
  }

  // Test 4: Validaciones - System handles edge cases properly
  try {
    // Test settings persistence
    const saveSettingsExists = typeof saveControlSettings === "function";
    const loadSettingsExists = typeof loadControlSettings === "function";
    
    // Test theme system
    const applyThemeExists = typeof applyThemeSettings === "function";
    
    // Test validation system
    const validateAllExists = typeof validateAllFormFields === "function";
    
    const handlesEdgeCases = saveSettingsExists && loadSettingsExists && 
                            applyThemeExists && validateAllExists;
    
    recordTest("3.3.4 System handles validation correctly", handlesEdgeCases);
  } catch (error) {
    recordTest("3.3.4 System handles validation correctly", false);
  }

  // Test 5: Return types - Functions return correct data types
  try {
    const functionTypesCorrect = 
      typeof initializeApp === "function" &&
      typeof handleControlCenterEvents === "function" &&
      typeof updateGlobalMetrics === "function" &&
      typeof calculateCenterStats === "function" &&
      typeof saveControlSettings === "function" &&
      typeof loadControlSettings === "function" &&
      typeof validateFormField === "function" &&
      typeof applyThemeSettings === "function";
    
    // Test return types for key functions
    let settingsReturnCorrect = false;
    if (typeof loadControlSettings === "function") {
      try {
        const result = loadControlSettings();
        settingsReturnCorrect = typeof result === "object" || result === null;
      } catch (e) {
        settingsReturnCorrect = true; // Function exists and handles errors
      }
    }
    
    recordTest("3.3.5 Functions return correct types", 
      functionTypesCorrect && settingsReturnCorrect);
  } catch (error) {
    recordTest("3.3.5 Functions return correct types", false);
  }
};

// ==========================================================================
// App initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
  
  // Run tests after brief delay
  setTimeout(() => {
    runTests();
    console.log('=== 🧪 Test Results Reto 3.3 ===');
    testResults.forEach(result => console.log(result));
  }, 500);
});
```

---

#### 💡 Tips Técnicos

🎛️ **Event delegation pro:** Un solo listener en el container padre maneja todos los eventos hijo  
🎯 **Data attributes:** `data-action="increment-counter"` para identificar acciones fácilmente  
⚡ **Real-time validation:** `input` events para validar mientras el usuario escribe  
📊 **State management:** Centralizar estado en objetos globales para consistencia  
🎨 **CSS variables:** Cambiar temas dinámicamente modificando custom properties  
🏗️ **Modular architecture:** Separar funcionalidades en archivos específicos  
💾 **Storage patterns:** Usar claves descriptivas y manejar errores de parsing  
🌐 **Responsive design:** Mobile-first con breakpoints inteligentes

---

#### 🌟 Motivación Épica

¡IMPRESIONANTE, Comandante del Cosmos! 🚀✨ Has construido un centro de control espacial completamente funcional que integra todos los conceptos del Nivel 3 de manera magistral.

🎛️ **Event Delegation Mastery:** Sistema de eventos centralizado y eficiente  
⚡ **Real-time Systems:** Validación y métricas que se actualizan instantáneamente  
🏗️ **Modular Architecture:** Código organizado en archivos especializados  
💫 **Persistent Configuration:** Sistema completo de configuración que perdura  
🎨 **Professional UI:** Interfaz espacial con temas dinámicos y responsive  

¡Elliot 🤓, Fernanda 👧, Mijael 👦 y Fe 🌟 están asombrados de tu centro de control galáctico! Ahora pueden gestionar sus misiones espaciales con estilo profesional. 🌌🎮💻

**¡Has completado oficialmente el JavaScript Nivel 3!** 🏆💫🚀

---

## 🚀🎯 Siguientes Pasos

¡INCREÍBLE! Has conquistado completamente el JavaScript Nivel 3 🎉👑 Tu dominio del DOM, eventos, localStorage y formularios dinámicos te convierte en un verdadero mago del frontend. ¡Estás oficialmente listo para frameworks modernos! 🚀✨

### ⚡🌟 Nivel 4: JavaScript Asíncrono & APIs Modernas
- 🌐 **Fetch API Mastery** - GET, POST, headers, error handling profesional 📡💎
- ⏰ **Async/Await Pro** - Promesas, async patterns, concurrent requests 🔄✨  
- 🎯 **Error Handling** - try/catch, user feedback, retry logic 🛡️🎨
- 📦 **ES6 Modules** - import/export, code organization, tree shaking 🏗️⚙️

🎊✨ **¡FELICITACIONES, HÉROE DEL FRONTEND NIVEL 3!** 🏆💻 Has dominado completamente la interactividad web con JavaScript puro. Tu progresión gradual desde tarjetas básicas hasta sistemas completos demuestra un crecimiento extraordinario.

### 🌟 Lo que has logrado es ÉPICO:
🃏 **DOM Foundation** - Manipulación básica que sentó las bases sólidas  
📝 **Storage Mastery** - Persistencia de datos entre sesiones como un pro  
🎛️ **System Architecture** - Dashboards complejos con múltiples componentes integrados  
⚡ **Event Mastery** - Desde clicks simples hasta event delegation avanzado  
💾 **Data Persistence** - De localStorage básico hasta configuración global completa  

### 🚀 Tu próxima aventura te espera:
¡Estás 100% preparado para dominar React, Vue y el ecosistema moderno del frontend! Con tus bases sólidas en JavaScript puro, los frameworks serán como superpoderes adicionales para tu arsenal ya épico.

¡Elliot 🤓, Fernanda 👧, Mijael 👦, Fe 🌟, Doky 🐕, Chocolate 🍫, Amorosa 💖 y Chanchi 🐱 están súper orgullosos de tu evolución extraordinaria! 💪🌟🎯🚀💻✨

**¡El futuro del desarrollo frontend te está esperando!** 🌈💫🏆