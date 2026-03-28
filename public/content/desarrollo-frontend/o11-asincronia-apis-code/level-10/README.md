# ⏰ Nivel 10: JavaScript Asíncrono - El Poder del Tiempo ✨

```
   █████╗ ███████╗██╗   ██╗███╗   ██╗ ██████╗
  ██╔══██╗██╔════╝╚██╗ ██╔╝████╗  ██║██╔════╝
  ███████║███████╗ ╚████╔╝ ██╔██╗ ██║██║     
  ██╔══██║╚════██║  ╚██╔╝  ██║╚██╗██║██║     
  ██║  ██║███████║   ██║   ██║ ╚████║╚██████╗
  ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═══╝ ╚═════╝
```

> **🎯 Objetivo:** Dominar JavaScript asíncrono desde cero: timers, promises, async/await y crear apps que manejan el tiempo 🚀

---

## ⏲️ Reto 1: Temporizador Pomodoro - setTimeout y setInterval

**📖 Historia:** Fernanda 🧙‍♀️ estudia hechizos avanzados pero se distrae fácilmente con TikTok. Descubre la técnica Pomodoro: 25 minutos de estudio, 5 de descanso. Necesita un temporizador que cuente hacia atrás cada segundo, y cuando llegue a 0, ¡le avise con una alerta! Ya no pierde el tiempo, su productividad explota 🚀📚

**📝 Descripción:** Tu programa debe crear un temporizador countdown usando `setInterval()` que decremente un contador cada segundo, actualice el DOM en tiempo real, y cuando llegue a 0 use `clearInterval()` para detenerlo y mostrar un alert. También incluye botón de reset que usa `clearInterval()` y reinicia.

**⚙️ Funcionalidades:**
- Iniciar countdown de 25 segundos con `setInterval()`
- Decrementar contador cada 1000ms (1 segundo)
- Actualizar display en formato MM:SS
- Detener con `clearInterval()` al llegar a 0
- Botón de reset para reiniciar temporizador

**✅ Casos de prueba:**

| Input                   | Expected Output             |
| ----------------------- | --------------------------- |
| `timeLeft` inicial      | `1500` (25 min en segundos) |
| Después de 1 segundo    | `timeLeft === 1499`         |
| Display muestra formato | `'25:00'`                   |
| Tipo de `intervalId`    | `'number'`                  |
| `isRunning` es booleano | `true`                      |

**💻 Código base:**

**📁 Estructura:**
```
o1-pomodoro-timer/
  ├── index.html
  ├── css/
  │   └── styles.css
  └── js/
      └── main.js
```

**index.html:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>⏲️ Temporizador Pomodoro</title>
  <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
  <main class="app">
    <header class="app__header">
      <h1 class="app__title">⏲️ Temporizador Pomodoro</h1>
      <p class="app__subtitle">setInterval | Abre la consola para ver resultados</p>
    </header>

    <section class="timer">
      <div id="display" class="timer__display">25:00</div>
      <div class="timer__controls">
        <button id="startBtn" class="btn btn--start">▶️ Iniciar</button>
        <button id="resetBtn" class="btn btn--reset">🔄 Resetear</button>
      </div>
    </section>
  </main>

  <script src="./js/main.js"></script>
</body>
</html>
```

**css/styles.css:**
```css
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.app {
  background-color: white;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  padding: 60px;
  max-width: 500px;
  width: 100%;
}

.app__header {
  text-align: center;
  margin-bottom: 50px;
}

.app__title {
  margin: 0;
  font-size: 2.5rem;
  color: #667eea;
  margin-bottom: 10px;
}

.app__subtitle {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

.timer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.timer__display {
  font-size: 6rem;
  font-weight: bold;
  color: #333;
  font-family: 'Courier New', monospace;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.timer__controls {
  display: flex;
  gap: 20px;
}

.btn {
  padding: 15px 40px;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.btn--start {
  background-image: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
  color: white;
}

.btn--reset {
  background-image: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
  color: white;
}
```

**js/main.js:**
```javascript
let timeLeft = 1500; // 25 minutos en segundos ⏱️
let intervalId = null;
let isRunning = false;

// your code here 💻
// select elements
// create formatTime function (converts seconds to MM:SS)
// create startTimer function with setInterval
// create resetTimer function with clearInterval
// add event listeners

// tests (run after timer starts)
const runTests = () => {
  console.log('=== Tests ===');
  console.log(timeLeft === 1500);
  console.log(timeLeft === 1499);
  console.log(display.textContent === '25:00');
  console.log(typeof intervalId === 'number');
  console.log(typeof isRunning === 'boolean');
};

// uncomment to run tests
// runTests();
```

**💡 Tips:**
- 🔹 `setInterval(callback, 1000)` ejecuta cada segundo
- 🔹 `clearInterval(intervalId)` detiene el intervalo
- 🔹 Formato: `Math.floor(seconds / 60)` para minutos
- 🔹 `seconds % 60` para segundos restantes

**🚀 Motivación:** ¡Fernanda es más productiva que nunca! ⏲️✨

---

## 🎲 Reto 2: Juego de Reacción - Promises

**📖 Historia:** Elliot ⚡ y Doky 🐕 compiten para ver quién tiene reflejos más rápidos. El juego: aparece un botón después de un tiempo aleatorio (2-5 segundos), el primero en hacer click gana. Usan `Promise` con `setTimeout` para el delay aleatorio, `.then()` cuando aparece el botón, y miden el tiempo de reacción en milisegundos. ¡El perdedor lava los platos! 🏆

**📝 Descripción:** Tu programa debe crear una Promise que se resuelve después de un delay aleatorio usando `setTimeout()`, usar `.then()` para mostrar el botón cuando se resuelva, capturar el tiempo de click, calcular tiempo de reacción en milisegundos, y mostrar resultado con `.catch()` para manejar errores.

**⚙️ Funcionalidades:**
- Crear Promise con `setTimeout()` de delay aleatorio
- Resolver Promise cuando termina el delay
- Usar `.then()` para mostrar botón clickeable
- Medir tiempo de reacción al hacer click
- Usar `.catch()` para manejar errores potenciales

**✅ Casos de prueba:**

| Input                          | Expected Output                 |
| ------------------------------ | ------------------------------- |
| Delay aleatorio generado       | Entre `2000` y `5000` ms        |
| `startTime` es timestamp       | `typeof startTime === 'number'` |
| Click después de mostrar botón | `reactionTime > 0`              |
| Promise se resuelve            | `'resolved'`                    |
| Tipo de Promise                | `'object'`                      |

**💻 Código base:**

**📁 Estructura:**
```
o2-reaction-game/
  ├── index.html
  ├── css/
  │   └── styles.css
  └── js/
      └── main.js
```

**index.html:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🎲 Juego de Reacción</title>
  <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
  <main class="app">
    <header class="app__header">
      <h1 class="app__title">🎲 Juego de Reacción</h1>
      <p class="app__subtitle">Promises | Abre la consola para ver resultados</p>
    </header>

    <section class="game">
      <p id="instructions" class="game__text">Haz click en "Iniciar" y espera...</p>
      <button id="startBtn" class="btn btn--start">🚀 Iniciar Juego</button>
      <button id="clickBtn" class="btn btn--target" style="display: none;">¡CLICK AQUÍ! ⚡</button>
      <div id="result" class="game__result"></div>
    </section>
  </main>

  <script src="./js/main.js"></script>
</body>
</html>
```

**css/styles.css:**
```css
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  background-image: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.app {
  background-color: white;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  padding: 60px;
  max-width: 600px;
  width: 100%;
}

.app__header {
  text-align: center;
  margin-bottom: 50px;
}

.app__title {
  margin: 0;
  font-size: 2.5rem;
  color: #2ecc71;
  margin-bottom: 10px;
}

.app__subtitle {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

.game {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.game__text {
  margin: 0;
  font-size: 1.3rem;
  color: #333;
  text-align: center;
}

.game__result {
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  color: #2ecc71;
  min-height: 40px;
}

.btn {
  padding: 20px 50px;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.btn--start {
  background-image: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
  color: white;
}

.btn--target {
  background-image: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  animation: pulse 0.5s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
```

**js/main.js:**
```javascript
let startTime = 0;
let reactionTime = 0;

// your code here 💻
// select elements
// create waitRandomTime function that returns a Promise
// Promise resolves after random delay (2-5 seconds)
// on start: hide start button, show instructions
// use .then() to show click button when ready
// measure reaction time on click

// tests (run after game completes)
const runTests = () => {
  console.log('=== Tests ===');
  const delay = Math.floor(Math.random() * 3000) + 2000;
  console.log(delay >= 2000 && delay <= 5000);
  console.log(typeof startTime === 'number');
  console.log(reactionTime > 0);
  console.log('resolved' === 'resolved');
  console.log(typeof Promise.resolve() === 'object');
};

// uncomment to run tests
// runTests();
```

**💡 Tips:**
- 🔹 `new Promise((resolve) => setTimeout(resolve, delay))`
- 🔹 `.then(() => { mostrar botón })`
- 🔹 `Date.now()` para timestamp actual
- 🔹 Reacción = `endTime - startTime`

**🚀 Motivación:** ¡Elliot y Doky miden sus reflejos ninja! 🎲⚡

---

## 🌐 Reto 3: Simulador de API - Async/Await

**📖 Historia:** Amorosa 💖 es desarrolladora y necesita probar su app sin conexión a internet. Crea un simulador de API que "finge" traer datos de usuarios desde un servidor: tarda 2 segundos en responder (como internet lento), usa `async/await` para esperar la respuesta, maneja errores con `try/catch`, y muestra los datos en pantalla. ¡Perfecta para desarrollo offline! 🚀💻

**📝 Descripción:** Tu programa debe crear una función async que simula una API con `setTimeout()` envuelto en Promise, usar `await` para esperar la respuesta, implementar `try/catch` para manejar errores, mostrar loading state mientras espera, y renderizar datos de usuarios en el DOM cuando lleguen.

**⚙️ Funcionalidades:**
- Crear función `async` que simula fetch a API
- Usar `await` para esperar Promise con delay
- Implementar `try/catch` para errores
- Mostrar estado de carga (loading)
- Renderizar lista de usuarios en DOM

**✅ Casos de prueba:**

| Input                            | Expected Output |
| -------------------------------- | --------------- |
| `users.length` después de cargar | `3`             |
| Primer usuario `name`            | `'Fernanda'`    |
| `isLoading` inicial              | `true`          |
| `isLoading` después de cargar    | `false`         |
| Tipo de función `fetchUsers`     | `'function'`    |

**💻 Código base:**

**📁 Estructura:**
```
o3-api-simulator/
  ├── index.html
  ├── css/
  │   └── styles.css
  └── js/
      └── main.js
```

**index.html:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🌐 Simulador de API</title>
  <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
  <main class="app">
    <header class="app__header">
      <h1 class="app__title">🌐 Simulador de API</h1>
      <p class="app__subtitle">Async/Await | Abre la consola para ver resultados</p>
    </header>

    <section class="content">
      <button id="loadBtn" class="btn">📡 Cargar Usuarios</button>
      <div id="loading" class="loading" style="display: none;">
        <div class="loading__spinner"></div>
        <p class="loading__text">Cargando datos...</p>
      </div>
      <ul id="userList" class="users"></ul>
    </section>
  </main>

  <script src="./js/main.js"></script>
</body>
</html>
```

**css/styles.css:**
```css
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.app {
  background-color: white;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  padding: 50px;
  max-width: 600px;
  width: 100%;
}

.app__header {
  text-align: center;
  margin-bottom: 40px;
}

.app__title {
  margin: 0;
  font-size: 2.5rem;
  color: #667eea;
  margin-bottom: 10px;
}

.app__subtitle {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
}

.btn {
  padding: 18px 50px;
  font-size: 1.3rem;
  font-weight: bold;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.loading__spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading__text {
  margin: 0;
  font-size: 1.2rem;
  color: #666;
}

.users {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.users__item {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 12px;
  border-left: 4px solid #667eea;
  transition: transform 0.2s ease;
}

.users__item:hover {
  transform: translateX(5px);
}

.users__name {
  margin: 0;
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.users__email {
  margin: 0;
  font-size: 1rem;
  color: #666;
}
```

**js/main.js:**
```javascript
let users = [];
let isLoading = false;

// your code here 💻
// select elements
// create async fetchUsers function that simulates API
// use setTimeout wrapped in Promise
// await the promise
// use try/catch for error handling
// show loading state
// render users to DOM

// tests (run after users load)
const runTests = () => {
  console.log('=== Tests ===');
  console.log(users.length === 3);
  console.log(users[0].name === 'Fernanda');
  console.log(isLoading === true);
  console.log(isLoading === false);
  console.log(typeof fetchUsers === 'function');
};

// uncomment to run tests
// runTests();
```

**💡 Tips:**
- 🔹 `async function nombre() { ... }`
- 🔹 `await new Promise(resolve => setTimeout(resolve, 2000))`
- 🔹 `try { ... } catch (error) { ... }`
- 🔹 Actualizar DOM después de await

**🚀 Motivación:** 🎉 ¡PROYECTO FINAL! Amorosa simula APIs como una pro 💖🌐✨

---

## 📊 Resumen del Nivel 10 🎯

**🎉 Has completado:**
- ✅ **Timers:** `setTimeout()`, `setInterval()`, `clearInterval()`
- ✅ **Promises:** `.then()`, `.catch()`, `.finally()`
- ✅ **Async/Await:** `async`, `await`, `try/catch`

**⏰ Tiempo estimado:** 2 horas 

**🎓 Conceptos clave:**
- JavaScript es asíncrono (no bloquea)
- setTimeout ejecuta después de X ms
- setInterval ejecuta cada X ms
- Promises representan operaciones futuras
- async/await hace código async legible
- try/catch maneja errores en async
- await solo funciona dentro de async

**🔜 Próximo nivel:** 🌐 Nivel 11 - Fetch API

---

💪 **¡Felicidades!** Fernanda, Mijael, Fe, Elliot, Chocolate, Amorosa y Doky están orgullosos. ¡Eres un maestro del código asíncrono! 🏆✨🚀
