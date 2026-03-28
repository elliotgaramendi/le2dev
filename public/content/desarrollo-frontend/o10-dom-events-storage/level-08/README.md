# 👂 Nivel 8: Eventos - La Magia de la Interactividad ✨

```
  ███████╗██╗   ██╗███████╗███╗   ██╗████████╗ ██████╗ ███████╗
  ██╔════╝██║   ██║██╔════╝████╗  ██║╚══██╔══╝██╔═══██╗██╔════╝
  █████╗  ██║   ██║█████╗  ██╔██╗ ██║   ██║   ██║   ██║███████╗
  ██╔══╝  ╚██╗ ██╔╝██╔══╝  ██║╚██╗██║   ██║   ██║   ██║╚════██║
  ███████╗ ╚████╔╝ ███████╗██║ ╚████║   ██║   ╚██████╔╝███████║
  ╚══════╝  ╚═══╝  ╚══════╝╚═╝  ╚═══╝   ╚═╝    ╚═════╝ ╚══════╝
```

> **🎯 Objetivo:** Dominar eventos desde cero: clicks, formularios, inputs en tiempo real y control total de interacciones 🚀

---

## 🖱️ Reto 1: Botón Contador - Click Event

**📖 Historia:** Fernanda 🧙‍♀️ está aburrida en su torre y decide crear un juego simple: cada vez que presiona un botón mágico, un contador aumenta. ¿Podrá llegar a 100 clicks? Su récord actual es 47. El botón también cambia de color cada 10 clicks para mantenerla motivada 🎮✨

**📝 Descripción:** Tu programa debe capturar el evento `click` de un botón usando `addEventListener()`, incrementar un contador cada vez que se hace click, actualizar el texto de un elemento para mostrar el conteo actual, y validar que el evento se dispara correctamente.

**⚙️ Funcionalidades:**
- Seleccionar botón y elemento contador del DOM
- Agregar event listener con `addEventListener('click', callback)`
- Incrementar variable `count` en cada click
- Actualizar `textContent` del contador en pantalla
- Verificar que el evento `click` funciona correctamente

**✅ Casos de prueba:**

| Input                                            | Expected Output |
| ------------------------------------------------ | --------------- |
| `count` después de 3 clicks                      | `3`             |
| `counterDisplay.textContent` después de 3 clicks | `'Clicks: 3'`   |
| `count` después de 5 clicks más (total 8)        | `8`             |
| `btn` es elemento HTML                           | `true`          |
| `typeof count`                                   | `'number'`      |

**💻 Código base:**

**📁 Estructura:**
```
o1-click-counter/
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
  <title>🖱️ Botón Contador</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div class="container">
    <h1 class="container__title">🖱️ Botón Contador</h1>
    <h5 class="container__subtitle">Click Event | Abre la consola para ver resultados</h5>
    
    <div id="counterDisplay" class="counter">Clicks: 0</div>
    <button id="clickBtn" class="btn btn--primary">¡Haz Click! 🎯</button>
  </div>

  <script src="js/main.js"></script>
</body>
</html>
```

**css/styles.css:**
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}

.container__title {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.container__subtitle {
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 40px;
}

.counter {
  font-size: 4rem;
  font-weight: bold;
  margin: 30px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.btn {
  padding: 20px 50px;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn--primary {
  background: #4CAF50;
  color: white;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.btn:active {
  transform: translateY(-1px);
}
```

**js/main.js:**
```javascript
let count = 0; // contador inicial 🎯

// your code here 💻
// select elements
// add click event listener
// increment count and update display

console.log(count === 3);
console.log(counterDisplay.textContent === 'Clicks: 3');
console.log(count === 8);
console.log(btn instanceof HTMLElement === true);
console.log(typeof count === 'number');
```

**💡 Tips:**
- 🔹 `element.addEventListener('click', () => { ... })`
- 🔹 Usa arrow function para el callback
- 🔹 Actualiza el DOM dentro del callback
- 🔹 `count++` incrementa el contador

**🚀 Motivación:** ¡Fernanda rompe su récord con tu código! 🖱️✨

**📁 Carpeta:** `o1-click-counter/`

---

## 📝 Reto 2: Formulario Mágico - Submit y preventDefault

**📖 Historia:** Elliot ⚡ quiere registrarse en la Academia de Héroes pero el formulario tiene un problema: cuando presiona "Enviar", ¡la página se recarga y pierde todos sus datos! Necesita capturar el evento `submit`, prevenir el comportamiento default con `preventDefault()`, y mostrar un mensaje de bienvenida con su nombre 🎓

**📝 Descripción:** Tu programa debe capturar el evento `submit` de un formulario usando `addEventListener()`, prevenir el refresco de página con `event.preventDefault()`, obtener el valor del input con `.value`, mostrar un mensaje personalizado en pantalla, y resetear el formulario con `form.reset()`.

**⚙️ Funcionalidades:**
- Seleccionar formulario y elementos del DOM
- Agregar event listener para evento `submit`
- Usar `event.preventDefault()` para evitar refresco
- Obtener valor del input con `input.value`
- Mostrar mensaje dinámico con el nombre ingresado

**✅ Casos de prueba:**

| Input                              | Expected Output                                    |
| ---------------------------------- | -------------------------------------------------- |
| Enviar formulario con 'Elliot'     | `message.textContent` contiene 'Bienvenido Elliot' |
| `heroForm.tagName`                 | `'FORM'`                                           |
| `nameInput.value` después de reset | `''` (vacío)                                       |
| `nameInput` es input element       | `true`                                             |
| `typeof message.textContent`       | `'string'`                                         |

**💻 Código base:**

**📁 Estructura:**
```
o2-magic-form-submit/
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
  <title>📝 Formulario Mágico</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div class="container">
    <h1 class="container__title">📝 Formulario Mágico</h1>
    <h5 class="container__subtitle">Submit Event | Abre la consola para ver resultados</h5>
    
    <form id="heroForm" class="form">
      <input 
        type="text" 
        id="nameInput" 
        class="form__input" 
        placeholder="Tu nombre de héroe" 
        required
      >
      <button type="submit" class="form__btn">¡Registrarse! ⚡</button>
    </form>
    
    <div id="message" class="message"></div>
  </div>

  <script src="js/main.js"></script>
</body>
</html>
```

**css/styles.css:**
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}

.container__title {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.container__subtitle {
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 40px;
}

.form {
  background: rgba(255, 255, 255, 0.2);
  padding: 40px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 350px;
}

.form__input {
  padding: 15px 20px;
  font-size: 1.1rem;
  border: none;
  border-radius: 10px;
  outline: none;
  transition: transform 0.2s;
}

.form__input:focus {
  transform: scale(1.02);
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
}

.form__btn {
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.form__btn:hover {
  background: #45a049;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.message {
  font-size: 1.8rem;
  margin-top: 30px;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
```

**js/main.js:**
```javascript
// your code here 💻
// select heroForm, nameInput, message
// add submit event listener
// use event.preventDefault()
// show welcome message with name
// reset form

console.log(message.textContent.includes('Bienvenido Elliot'));
console.log(heroForm.tagName === 'FORM');
console.log(nameInput.value === '');
console.log(nameInput instanceof HTMLInputElement === true);
console.log(typeof message.textContent === 'string');
```

**💡 Tips:**
- 🔹 `form.addEventListener('submit', (event) => { ... })`
- 🔹 `event.preventDefault()` SIEMPRE primero
- 🔹 `input.value` obtiene el texto
- 🔹 `form.reset()` limpia el formulario

**🚀 Motivación:** ¡Elliot se registra sin perder sus datos! ⚡📝

**📁 Carpeta:** `o2-magic-form-submit/`

---

## ⌨️ Reto 3: Buscador en Vivo - Input Event

**📖 Historia:** Doky 🐕 tiene una lista de 100 héroes pero es difícil encontrarlos. Quiere un buscador que filtre la lista EN TIEMPO REAL mientras escribe. Si escribe "Fe", debe mostrar solo "Fe" y "Fernanda". Si escribe "E", debe ver "Elliot", "Fe", "Fernanda". ¡Sin presionar botones, magia instantánea! 🔍✨

**📝 Descripción:** Tu programa debe capturar el evento `input` (tiempo real) de un campo de búsqueda usando `addEventListener()`, filtrar un array de héroes según el texto escrito con `filter()` y `includes()`, actualizar dinámicamente una lista en el DOM usando `innerHTML` o bucles, y mostrar todos los héroes cuando búsqueda está vacía.

**⚙️ Funcionalidades:**
- Seleccionar input de búsqueda y lista de resultados
- Agregar event listener para evento `input` (tiempo real)
- Filtrar array usando `filter()` según texto de búsqueda
- Actualizar lista en DOM dinámicamente
- Mostrar todos los héroes cuando búsqueda está vacía

**✅ Casos de prueba:**

| Input                            | Expected Output                      |
| -------------------------------- | ------------------------------------ |
| Buscar 'Fe'                      | `resultsList.children.length` es `2` |
| `heroes.length` (array original) | `7`                                  |
| `searchInput.value` con 'Elliot' | Muestra solo 1 resultado             |
| `searchInput` es input element   | `true`                               |
| `typeof heroes`                  | `'object'`                           |

**💻 Código base:**

**📁 Estructura:**
```
o3-live-search-input/
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
  <title>⌨️ Buscador en Vivo</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div class="container">
    <h1 class="container__title">⌨️ Buscador en Vivo</h1>
    <h5 class="container__subtitle">Input Event | Abre la consola para ver resultados</h5>
    
    <div class="search">
      <input 
        type="text" 
        id="searchInput" 
        class="search__input" 
        placeholder="Buscar héroe... 🔍"
      >
    </div>
    
    <ul id="resultsList" class="results"></ul>
  </div>

  <script src="js/main.js"></script>
</body>
</html>
```

**css/styles.css:**
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  background: linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%);
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  min-height: 100vh;
}

.container__title {
  font-size: 2.5rem;
  color: white;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.container__subtitle {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
}

.search {
  width: 100%;
  max-width: 500px;
  margin-bottom: 30px;
}

.search__input {
  width: 100%;
  padding: 18px 25px;
  font-size: 1.1rem;
  border: none;
  border-radius: 50px;
  outline: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.search__input:focus {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
}

.results {
  list-style: none;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.results__item {
  background: white;
  padding: 18px 25px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  color: #333;
  font-size: 1.1rem;
  transition: all 0.2s ease;
}

.results__item:hover {
  transform: translateX(5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}
```

**js/main.js:**
```javascript
const heroes = ['Elliot', 'Fernanda', 'Fe', 'Mijael', 'Doky', 'Amorosa', 'Chocolate']; // array de héroes 🦸

// your code here 💻
// select searchInput and resultsList
// display all heroes initially
// add input event listener
// filter heroes and update list

console.log(resultsList.children.length === 2);
console.log(heroes.length === 7);
console.log(resultsList.children.length === 1);
console.log(searchInput instanceof HTMLInputElement === true);
console.log(typeof heroes === 'object');
```

**💡 Tips:**
- 🔹 `input.addEventListener('input', (event) => { ... })`
- 🔹 `event.target.value` obtiene texto actual
- 🔹 `array.filter(item => item.includes(search))`
- 🔹 `.toLowerCase()` para búsqueda case-insensitive

**🚀 Motivación:** 🎉 ¡PROYECTO FINAL! Doky encuentra héroes al instante 🐕🔍✨

**📁 Carpeta:** `o3-live-search-input/`

---

## 📊 Resumen del Nivel 8 🎯

**🎉 Has completado:**
- ✅ **Click events:** `addEventListener('click', callback)`
- ✅ **Submit events:** `preventDefault()` y formularios
- ✅ **Input events:** Búsqueda en tiempo real

**⏰ Tiempo estimado:** 2 horas 

**🎓 Conceptos clave:**
- `addEventListener()` conecta eventos a funciones
- `event.preventDefault()` previene comportamiento default
- `event.target` es el elemento que disparó el evento
- `'click'` para botones e interacciones
- `'submit'` para formularios
- `'input'` para cambios en tiempo real
- Callback functions ejecutan código al ocurrir evento

**🔜 Próximo nivel:** 💾 Nivel 9 - LocalStorage (Guardar Datos)

---

💪 **¡Felicidades!** Fernanda, Mijael, Fe, Elliot, Chocolate, Amorosa y Doky están orgullosos. ¡Eres un maestro de eventos! 🏆✨🚀
