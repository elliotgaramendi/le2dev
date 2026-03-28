# 🌐 Nivel 11: Fetch API - Conectando con el Mundo ✨

```
  ███████╗███████╗████████╗ ██████╗██╗  ██╗     █████╗ ██████╗ ██╗
  ██╔════╝██╔════╝╚══██╔══╝██╔════╝██║  ██║    ██╔══██╗██╔══██╗██║
  █████╗  █████╗     ██║   ██║     ███████║    ███████║██████╔╝██║
  ██╔══╝  ██╔══╝     ██║   ██║     ██╔══██║    ██╔══██║██╔═══╝ ██║
  ██║     ███████╗   ██║   ╚██████╗██║  ██║    ██║  ██║██║     ██║
  ╚═╝     ╚══════╝   ╚═╝    ╚═════╝╚═╝  ╚═╝    ╚═╝  ╚═╝╚═╝     ╚═╝
```

> **🎯 Objetivo:** Dominar Fetch API desde cero: traer datos reales 🌍, manejar errores 🛡️, loading states ⏳ y crear apps conectadas 🚀✨

---

## 🐕 Reto 1: Galería de Perritos - GET Request 📸

**📖 Historia:** Doky 🐕 está solo en casa y extraña a sus amigos perrunos 😢. Descubre una API mágica 🪄 que le muestra fotos aleatorias de perritos de todo el mundo 🌎. Cada vez que hace click en "Nuevo Perrito" 🎲, la API le trae una foto diferente 🖼️. Ahora tiene compañía virtual infinita ♾️. Usa `fetch()` para traer las imágenes 📡, maneja el loading mientras espera ⏳, y si falla la conexión 📵, muestra un error amigable 💔. ¡Doky nunca se sentirá solo otra vez! 🐶💖✨

**📝 Descripción:** Tu programa debe usar `fetch()` con método GET para consumir la API pública Dog CEO 🐕 (https://dog.ceo/api/breeds/image/random), parsear la respuesta con `.json()` 📋, mostrar un loading spinner mientras carga ⏳, renderizar la imagen en el DOM cuando llegue 🖼️, manejar errores de red con `.catch()` 🛡️, y validar el status code de la respuesta ✅.

**⚙️ Funcionalidades:**
- Hacer petición GET con `fetch(url)` 📡
- Parsear respuesta JSON con `.json()` 📋
- Mostrar loading state mientras espera ⏳
- Renderizar imagen en el DOM 🖼️
- Manejar errores con `try/catch` 🛡️
- Botón para cargar nueva foto 🎲
- Tests automáticos en el DOM ✅

**✅ Casos de prueba:**

| Test 🧪                            | Expected Output 🎯                   |
| --------------------------------- | ----------------------------------- |
| `typeof fetchDog`                 | `'function'`                        |
| Response después de fetch exitoso | `response.status === 200`           |
| URL de imagen es string           | `typeof imageUrl === 'string'`      |
| URL incluye https                 | `imageUrl.includes('https')`        |
| Imagen se renderiza en DOM        | `dogImage.src.includes('https://')` |

**💻 Código base:**

**📁 Estructura**
```
o1-dog-gallery/
  ├── index.html
  ├── css/
  │   └── styles.css
  └── js/
      └── main.js
```

**index.html**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🐕 Galería de Perritos</title>
  <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
  <main class="app">
    <header class="app__header">
      <h1 class="app__title">🐕 Galería de Perritos</h1>
      <p class="app__subtitle">Fetch API - GET 📡 | Tests en el DOM ✅</p>
    </header>

    <section class="gallery">
      <div id="imageContainer" class="gallery__container">
        <div id="loading" class="loading" style="display: none;">
          <div class="loading__spinner"></div>
          <p class="loading__text">Cargando perrito... 🐕</p>
        </div>
        <img id="dogImage" class="gallery__image" alt="Perrito aleatorio 🐶">
        <p id="error" class="gallery__error" style="display: none;"></p>
      </div>
      <button id="newDogBtn" class="btn">🎲 Nuevo Perrito</button>
    </section>

    <aside id="testResults" class="tests"></aside>
  </main>

  <script src="./js/main.js"></script>
</body>
</html>
```

**css/styles.css**
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
  padding: 20px;
  box-sizing: border-box;
}

.app {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  padding: 40px;
  max-width: 600px;
  width: 100%;
  margin: 20px;
  box-sizing: border-box;
}

.app__header {
  text-align: center;
  margin-bottom: 30px;
}

.app__title {
  margin: 0 0 10px 0;
  font-size: 2.5rem;
  color: #667eea;
}

.app__subtitle {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

.gallery {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.gallery__container {
  min-height: 400px;
  background-color: #f8f9fa;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.gallery__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  display: none;
}

.gallery__error {
  margin: 0;
  padding: 20px;
  color: #e74c3c;
  font-size: 1.1rem;
  text-align: center;
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
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
  font-size: 1.1rem;
  color: #666;
}

.btn {
  padding: 15px 40px;
  font-size: 1.2rem;
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
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.btn:active {
  transform: translateY(0);
}

.tests {
  margin-top: 30px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  display: none;
}

.tests__title {
  margin: 0 0 15px 0;
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
}

.tests__item {
  margin: 8px 0;
  padding: 8px;
  border-radius: 6px;
}

.tests__item--pass {
  background-color: #d4edda;
  color: #155724;
}

.tests__item--fail {
  background-color: #f8d7da;
  color: #721c24;
}

@media (max-width: 768px) {
  .app {
    padding: 30px 20px;
  }
  
  .app__title {
    font-size: 2rem;
  }
  
  .gallery__container {
    min-height: 300px;
  }
}
```

**js/main.js**
```javascript
const API_URL = 'https://dog.ceo/api/breeds/image/random';

let imageUrl = '';
let response = null;

// your code here 💻
// select elements 🎯
// create fetchDog async function 🐕
// show loading, hide image and error ⏳
// use fetch() to get data 📡
// parse with .json() 📋
// handle success and errors 🛡️
// render image in DOM 🖼️
// create runTests function ✅
// call runTests in finally block 🎯

// 🧪 Tests function (add this at the end)
const runTests = () => {
  const testResults = document.getElementById('testResults');
  testResults.style.display = 'block';
  
  const tests = [
    { name: 'fetchDog es función', result: typeof fetchDog === 'function' },
    { name: 'Response status es 200', result: response && response.status === 200 },
    { name: 'imageUrl es string', result: typeof imageUrl === 'string' },
    { name: 'imageUrl incluye https', result: imageUrl.includes('https') },
    { name: 'Imagen renderizada en DOM', result: dogImage.src.includes('https://') }
  ];
  
  let html = '<p class="tests__title">🧪 Resultados de Tests:</p>';
  tests.forEach(test => {
    const status = test.result ? '✅' : '❌';
    const className = test.result ? 'tests__item--pass' : 'tests__item--fail';
    html += `<div class="tests__item ${className}">${status} ${test.name}: ${test.result}</div>`;
  });
  
  testResults.innerHTML = html;
};
```

**💡 Tips:**
- 🔹 `fetch(url)` retorna una Promise 🎁
- 🔹 `response.json()` también es Promise 📋
- 🔹 Usa `async/await` para código limpio ✨
- 🔹 Verifica `response.ok` antes de parsear ✅
- 🔹 `try/catch/finally` para manejar errores 🛡️
- 🔹 Llama `runTests()` en el `finally` 🎯

**🚀 Motivación:** ¡Doky tiene amigos perritos infinitos! 🐕💖✨

---

## 🤖 Reto 2: Portal Rick and Morty - GET con Query Params 🌌

**📖 Historia:** Elliot ⚡ es fan #1 de Rick and Morty 🧪. Quiere crear un portal dimensional 🌀 que le muestre todos los personajes 👽 de la serie. Escribe un nombre en el buscador 🔍 ("Rick", "Morty", "Summer") y ¡BOOM! 💥 aparecen todas las cards con fotos 📸, nombre 📛, especie 🧬, y status (Alive/Dead) 💀. Implementa loading state ⏳, manejo de errores si no encuentra personajes 🚫, y muestra los resultados en una grid bonita 🎨. ¡Wubba Lubba Dub Dub! 🎉🌈

**📝 Descripción:** Tu programa debe usar `fetch()` con query parameters para buscar personajes en la Rick and Morty API 🤖 (https://rickandmortyapi.com/api/character/?name=rick), capturar input del usuario 📝, construir URL dinámica con el nombre 🔧, mostrar loading mientras espera ⏳, parsear respuesta JSON 📋, renderizar múltiples cards en el DOM 🎴, manejar error 404 cuando no encuentra resultados 🚫, y validar datos recibidos ✅.

**⚙️ Funcionalidades:**
- Capturar input de búsqueda desde formulario 📝
- Construir URL con query parameters 🔧
- Hacer petición GET a Rick and Morty API 📡
- Mostrar loading mientras espera ⏳
- Parsear y renderizar cards de personajes 🎴
- Manejar error 404 (no encontrado) 🚫
- Grid responsive para las cards 📱
- Tests automáticos en el DOM ✅

**✅ Casos de prueba:**

| Test 🧪                        | Expected Output 🎯                   |
| ----------------------------- | ----------------------------------- |
| `typeof searchCharacters`     | `'function'`                        |
| Buscar "Rick"                 | `characters.length > 0`             |
| Primer personaje tiene `name` | `characters[0].name !== undefined`  |
| Response status               | `response.status === 200`           |
| Cards renderizadas en DOM     | `characterList.children.length > 0` |

**💻 Código base:**

**📁 Estructura**
```
o2-rick-morty-portal/
  ├── index.html
  ├── css/
  │   └── styles.css
  └── js/
      └── main.js
```

**index.html**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🤖 Portal Rick and Morty</title>
  <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
  <main class="app">
    <header class="app__header">
      <h1 class="app__title">🤖 Portal Rick and Morty</h1>
      <p class="app__subtitle">Fetch API - Query Params 🔍 | Tests en el DOM ✅</p>
    </header>

    <form id="searchForm" class="search">
      <input 
        type="text" 
        id="searchInput" 
        name="character"
        class="search__input" 
        placeholder="Busca un personaje... 👽"
        required
      >
      <button type="submit" class="search__btn">🔍 Buscar</button>
    </form>

    <div id="loading" class="loading" style="display: none;">
      <div class="loading__spinner"></div>
      <p class="loading__text">Abriendo portal... 🌀</p>
    </div>

    <p id="error" class="error" style="display: none;"></p>

    <section id="characterList" class="characters"></section>

    <aside id="testResults" class="tests"></aside>
  </main>

  <script src="./js/main.js"></script>
</body>
</html>
```

**css/styles.css**
```css
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  background-image: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
  padding: 20px;
  box-sizing: border-box;
}

.app {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  padding: 40px;
  max-width: 1200px;
  width: 100%;
  margin: 20px auto;
  box-sizing: border-box;
}

.app__header {
  text-align: center;
  margin-bottom: 30px;
}

.app__title {
  margin: 0 0 10px 0;
  font-size: 2.5rem;
  color: #2ecc71;
}

.app__subtitle {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

.search {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.search__input {
  flex: 1;
  padding: 12px 20px;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
}

.search__input:focus {
  outline: none;
  border-color: #2ecc71;
}

.search__btn {
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: bold;
  background-image: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.search__btn:hover {
  transform: translateY(-2px);
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 40px;
  box-sizing: border-box;
}

.loading__spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #2ecc71;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading__text {
  margin: 0;
  font-size: 1.1rem;
  color: #666;
}

.error {
  margin: 20px 0;
  padding: 15px;
  background-color: #fee;
  border-left: 4px solid #e74c3c;
  border-radius: 8px;
  color: #c0392b;
  text-align: center;
  box-sizing: border-box;
}

.characters {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.character {
  background-color: #f8f9fa;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

.character:hover {
  transform: translateY(-5px);
}

.character__image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.character__info {
  padding: 15px;
}

.character__name {
  margin: 0 0 10px 0;
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
}

.character__detail {
  margin: 5px 0;
  font-size: 0.95rem;
  color: #666;
}

.character__status {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: bold;
  margin-top: 8px;
}

.character__status--alive {
  background-color: #d4edda;
  color: #155724;
}

.character__status--dead {
  background-color: #f8d7da;
  color: #721c24;
}

.character__status--unknown {
  background-color: #e2e3e5;
  color: #383d41;
}

.tests {
  margin-top: 30px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  display: none;
  box-sizing: border-box;
}

.tests__title {
  margin: 0 0 15px 0;
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
}

.tests__item {
  margin: 8px 0;
  padding: 8px;
  border-radius: 6px;
}

.tests__item--pass {
  background-color: #d4edda;
  color: #155724;
}

.tests__item--fail {
  background-color: #f8d7da;
  color: #721c24;
}

@media (max-width: 768px) {
  .app {
    padding: 30px 20px;
  }
  
  .app__title {
    font-size: 2rem;
  }
  
  .characters {
    grid-template-columns: 1fr;
  }
}
```

**js/main.js**
```javascript
const API_URL = 'https://rickandmortyapi.com/api/character/';

let characters = [];
let response = null;

// your code here 💻
// select elements 🎯
// create searchCharacters async function 🔍
// construct URL with query param: ?name=value 🔧
// show loading, hide others ⏳
// fetch character data 📡
// parse with .json() 📋
// handle 404 error (no results) 🚫
// render character cards in DOM 🎴
// create runTests function ✅
// call runTests in finally block 🎯

// 🧪 Tests function (add this at the end)
const runTests = () => {
  const testResults = document.getElementById('testResults');
  testResults.style.display = 'block';
  
  const tests = [
    { name: 'searchCharacters es función', result: typeof searchCharacters === 'function' },
    { name: 'characters tiene datos', result: characters.length > 0 },
    { name: 'Primer personaje tiene name', result: characters[0] && characters[0].name !== undefined },
    { name: 'Response status es 200', result: response && response.status === 200 },
    { name: 'Cards renderizadas', result: characterList.children.length > 0 }
  ];
  
  let html = '<p class="tests__title">🧪 Resultados de Tests:</p>';
  tests.forEach(test => {
    const status = test.result ? '✅' : '❌';
    const className = test.result ? 'tests__item--pass' : 'tests__item--fail';
    html += `<div class="tests__item ${className}">${status} ${test.name}: ${test.result}</div>`;
  });
  
  testResults.innerHTML = html;
};
```

**💡 Tips:**
- 🔹 URL con query: `${API_URL}?name=${searchTerm}` 🔧
- 🔹 La API retorna array en `data.results` 📋
- 🔹 Status 404 = no encontró personajes 🚫
- 🔹 Renderiza cada card con `createElement` 🎴
- 🔹 Status: Alive ✅, Dead ❌, Unknown ❓
- 🔹 `finally` ejecuta siempre para tests 🎯

**🚀 Motivación:** 🎉 ¡PROYECTO FINAL! Elliot abre portales dimensionales 🤖🌌✨

---

## 📊 Resumen del Nivel 11 🎯

**🎉 Has completado:**
- ✅ **Fetch API** `fetch(url)` 📡, `.json()` 📋
- ✅ **GET requests** Traer datos de APIs públicas 🌍
- ✅ **Query parameters** Búsquedas dinámicas 🔍
- ✅ **Error handling** Status codes, network errors 🛡️
- ✅ **Loading states** UX mientras espera ⏳
- ✅ **Renderizado dinámico** Mostrar datos en DOM 🎴
- ✅ **Tests automáticos** Validación en el DOM ✅

**⏰ Tiempo estimado** 2 horas ⏰

**🎓 Conceptos clave:**
- `fetch()` hace peticiones HTTP 📡
- Retorna Promise que se resuelve con Response 🎁
- `.json()` parsea el body de la respuesta 📋
- Siempre verificar `response.ok` o `response.status` ✅
- `try/catch/finally` para errores y cleanup 🛡️
- Query params: `?key=value&key2=value2` 🔧
- Loading states mejoran UX ⏳
- APIs públicas permiten practicar gratis 🆓

**🔜 Próximo nivel** 📦 Nivel 12 - Módulos ES6

---

💪 **¡Felicidades!** 🎉 Fernanda 🧙‍♀️, Mijael 👦, Fe 🔥, Elliot ⚡, Chocolate 🐕, Amorosa 💖 y Doky 🐶 están orgullosos. ¡Eres un maestro de las APIs! 🏆✨�
