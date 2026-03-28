# 💾 Nivel 9: LocalStorage - Memoria Persistente ✨

```
  ███████╗████████╗ ██████╗ ██████╗  █████╗  ██████╗ ███████╗
  ██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗██╔══██╗██╔════╝ ██╔════╝
  ███████╗   ██║   ██║   ██║██████╔╝███████║██║  ███╗█████╗  
  ╚════██║   ██║   ██║   ██║██╔══██╗██╔══██║██║   ██║██╔══╝  
  ███████║   ██║   ╚██████╔╝██║  ██║██║  ██║╚██████╔╝███████╗
  ╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝
```

> **🎯 Objetivo:** Dominar localStorage desde cero: guardar datos, recuperarlos, trabajar con objetos y crear aplicaciones persistentes 🚀

---

## 📝 Reto 1: Notas Inmortales - Guardar y Recuperar

**📖 Historia:** Fernanda 🧙‍♀️ escribe sus hechizos en un cuaderno mágico, pero siempre lo pierde. Un día descubre que puede guardar sus notas en el navegador y NUNCA se borrarán, ¡incluso si cierra la página! Escribe "Hechizo de levitación" y cuando regresa al día siguiente... ¡ahí está! Su mente explota de emoción 🤯💫

**📝 Descripción:** Tu programa debe capturar texto de un textarea, guardarlo en `localStorage` usando `setItem()`, recuperarlo al cargar la página con `getItem()`, y mostrar el valor guardado automáticamente al recargar.

**⚙️ Funcionalidades:**
- Capturar evento `input` del textarea en tiempo real
- Guardar texto en localStorage con clave 'note'
- Recuperar nota guardada al cargar la página
- Actualizar localStorage cada vez que cambia el texto
- Mostrar nota persistente después de recargar

**✅ Casos de prueba:**

| Input                                 | Expected Output         |
| ------------------------------------- | ----------------------- |
| Escribir 'Hola' y recargar            | Textarea muestra 'Hola' |
| `localStorage.getItem('note')`        | `'Hola'`                |
| Textarea es elemento válido           | `true`                  |
| `typeof localStorage.getItem('note')` | `'string'`              |
| Borrar todo y recargar                | Textarea vacío          |

**💻 Código base:**

**📁 Estructura:**
```
o1-immortal-notes/
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
  <title>📝 Notas Inmortales</title>
  <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
  <main class="app">
    <header class="app__header">
      <h1 class="app__title">📝 Notas Inmortales</h1>
      <p class="app__subtitle">LocalStorage | Abre la consola para ver resultados</p>
    </header>

    <section class="note">
      <label for="noteText" class="note__label">Escribe tu nota mágica:</label>
      <textarea 
        id="noteText" 
        name="note"
        class="note__textarea" 
        placeholder="Escribe algo... se guardará automáticamente ✨"
        rows="10"
      ></textarea>
      <p class="note__info">💾 Se guarda automáticamente</p>
    </section>
  </main>

  <script src="./js/main.js"></script>
</body>
</html>
```

**css/styles.css:**
```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.app {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  padding: 40px;
  max-width: 600px;
  width: 100%;
}

.app__header {
  text-align: center;
  margin-bottom: 30px;
}

.app__title {
  font-size: 2.5rem;
  color: #667eea;
  margin-bottom: 10px;
}

.app__subtitle {
  font-size: 0.9rem;
  color: #666;
}

.note {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.note__label {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
}

.note__textarea {
  width: 100%;
  padding: 15px;
  font-size: 1rem;
  font-family: inherit;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  resize: vertical;
  transition: border-color 0.3s ease;
}

.note__textarea:focus {
  outline: none;
  border-color: #667eea;
}

.note__info {
  font-size: 0.9rem;
  color: #4CAF50;
  font-weight: 500;
}
```

**js/main.js:**
```javascript
// your code here 💻
// select textarea
// load saved note from localStorage
// add input event listener
// save to localStorage on every change

// tests (run after implementation)
const runTests = () => {
  console.log('=== Tests ===');
  console.log(noteText.value.includes('Hola'));
  console.log(localStorage.getItem('note') === 'Hola');
  console.log(noteText instanceof HTMLTextAreaElement === true);
  console.log(typeof localStorage.getItem('note') === 'string');
  console.log(noteText.value === '');
};

// uncomment to run tests
// runTests();
```

**💡 Tips:**
- 🔹 `localStorage.setItem('key', value)` guarda
- 🔹 `localStorage.getItem('key')` recupera
- 🔹 Cargar datos al inicio: `textarea.value = localStorage.getItem('note') || ''`
- 🔹 Evento `input` para guardar en tiempo real

**🚀 Motivación:** ¡Fernanda nunca perderá sus hechizos! 📝✨

---

## 🎨 Reto 2: Paleta de Colores - Storage con Objetos

**📖 Historia:** Doky 🐕 es un artista y tiene colores favoritos que usa todo el tiempo: rojo para pasión, azul para calma, verde para naturaleza. Pero cada vez que abre su app de dibujo, ¡tiene que configurarlos otra vez! Necesita guardar sus 3 colores favoritos como un objeto en localStorage. Al día siguiente, ¡boom! Ahí están sus colores 🎨💖

**📝 Descripción:** Tu programa debe crear un objeto con 3 colores, convertirlo a JSON con `JSON.stringify()`, guardarlo en localStorage, recuperarlo con `getItem()`, parsearlo con `JSON.parse()`, y mostrar los colores en la página aplicando estilos.

**⚙️ Funcionalidades:**
- Crear objeto con propiedades de colores
- Convertir objeto a string con `JSON.stringify()`
- Guardar en localStorage con clave 'palette'
- Recuperar y parsear con `JSON.parse()`
- Aplicar colores recuperados al DOM

**✅ Casos de prueba:**

| Input                                                                   | Expected Output                   |
| ----------------------------------------------------------------------- | --------------------------------- |
| Guardar `{primary: '#e74c3c', secondary: '#3498db', accent: '#2ecc71'}` | localStorage contiene JSON string |
| Recuperar objeto                                                        | `palette.primary === '#e74c3c'`   |
| Tipo del string guardado                                                | `'string'`                        |
| Tipo del objeto recuperado                                              | `'object'`                        |
| JSON string incluye 'primary'                                           | `true`                            |

**💻 Código base:**

**📁 Estructura:**
```
o2-color-palette/
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
  <title>🎨 Paleta de Colores</title>
  <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
  <main class="app">
    <header class="app__header">
      <h1 class="app__title">🎨 Paleta de Colores</h1>
      <p class="app__subtitle">JSON + LocalStorage | Abre la consola para ver resultados</p>
    </header>

    <section class="palette">
      <article id="colorPrimary" class="palette__color">
        <div class="palette__box"></div>
        <p class="palette__label">Primary</p>
      </article>

      <article id="colorSecondary" class="palette__color">
        <div class="palette__box"></div>
        <p class="palette__label">Secondary</p>
      </article>

      <article id="colorAccent" class="palette__color">
        <div class="palette__box"></div>
        <p class="palette__label">Accent</p>
      </article>
    </section>

    <button id="saveBtn" class="btn">💾 Guardar Paleta</button>
  </main>

  <script src="./js/main.js"></script>
</body>
</html>
```

**css/styles.css:**
```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  background-image: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.app {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  padding: 40px;
  max-width: 600px;
  width: 100%;
}

.app__header {
  text-align: center;
  margin-bottom: 40px;
}

.app__title {
  font-size: 2.5rem;
  color: #f5576c;
  margin-bottom: 10px;
}

.app__subtitle {
  font-size: 0.9rem;
  color: #666;
}

.palette {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.palette__color {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.palette__box {
  width: 100%;
  height: 120px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.palette__box:hover {
  transform: translateY(-5px);
}

.palette__label {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
}

.btn {
  width: 100%;
  padding: 15px;
  font-size: 1.2rem;
  font-weight: bold;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}
```

**js/main.js:**
```javascript
// your code here 💻
// create palette object with 3 colors
// save palette as JSON string to localStorage
// load palette from localStorage and parse
// apply colors to DOM elements

// tests (run after click save button)
const runTests = () => {
  console.log('=== Tests ===');
  const saved = localStorage.getItem('palette');
  const palette = JSON.parse(saved);
  
  console.log(saved.includes('primary'));
  console.log(palette.primary === '#e74c3c');
  console.log(typeof saved === 'string');
  console.log(typeof palette === 'object');
  console.log(saved.includes('primary') === true);
};

// uncomment to run tests
// runTests();
```

**💡 Tips:**
- 🔹 `JSON.stringify(objeto)` convierte a string
- 🔹 `JSON.parse(string)` convierte a objeto
- 🔹 `element.style.backgroundColor = color`
- 🔹 Siempre usa try/catch al parsear

**🚀 Motivación:** ¡Doky guarda sus colores favoritos para siempre! 🎨🐕

---

## 📋 Reto 3: Lista de Tareas - CRUD Completo

**📖 Historia:** Elliot ⚡ tiene 1000 cosas por hacer pero su cerebro es un caos. Crea una lista de tareas donde puede: AGREGAR nuevas tareas, VER todas sus tareas, MARCAR como completadas, y ELIMINAR las que ya hizo. La magia: ¡todo se guarda en localStorage! Cierra el navegador, va al gimnasio, regresa... ¡y su lista sigue ahí! Es como tener un asistente personal 24/7 🚀📝

**📝 Descripción:** Tu programa debe implementar un CRUD completo (Create, Read, Update, Delete) con localStorage: agregar tareas a un array, guardar el array completo en localStorage como JSON, cargar tareas al iniciar, mostrar tareas en el DOM con botones de eliminar, y actualizar localStorage cada vez que cambia el array.

**⚙️ Funcionalidades:**
- Agregar nuevas tareas desde un formulario
- Guardar array de tareas en localStorage como JSON
- Cargar y parsear tareas al iniciar la página
- Renderizar lista de tareas en el DOM
- Eliminar tareas y actualizar localStorage

**✅ Casos de prueba:**

| Input                               | Expected Output        |
| ----------------------------------- | ---------------------- |
| Agregar tarea 'Estudiar JS'         | Array incluye la tarea |
| `tasks.length` después de agregar 2 | `2`                    |
| Eliminar primera tarea              | `tasks.length === 1`   |
| Tipo de datos en localStorage       | `'string'`             |
| Tipo del array recuperado           | `'object'`             |

**💻 Código base:**

**📁 Estructura:**
```
o3-task-list-crud/
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
  <title>📋 Lista de Tareas</title>
  <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
  <main class="app">
    <header class="app__header">
      <h1 class="app__title">📋 Lista de Tareas</h1>
      <p class="app__subtitle">CRUD + LocalStorage | Abre la consola para ver resultados</p>
    </header>

    <form id="taskForm" class="form">
      <input 
        type="text" 
        id="taskInput"
        name="task"
        class="form__input" 
        placeholder="Nueva tarea... ✨"
        required
      >
      <button type="submit" class="form__btn">➕ Agregar</button>
    </form>

    <ul id="taskList" class="tasks"></ul>
  </main>

  <script src="./js/main.js"></script>
</body>
</html>
```

**css/styles.css:**
```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  background-image: linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.app {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  padding: 40px;
  max-width: 500px;
  width: 100%;
}

.app__header {
  text-align: center;
  margin-bottom: 30px;
}

.app__title {
  font-size: 2.5rem;
  color: #66a6ff;
  margin-bottom: 10px;
}

.app__subtitle {
  font-size: 0.9rem;
  color: #666;
}

.form {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}

.form__input {
  flex: 1;
  padding: 12px 20px;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  transition: border-color 0.3s ease;
}

.form__input:focus {
  outline: none;
  border-color: #66a6ff;
}

.form__btn {
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.form__btn:hover {
  transform: translateY(-2px);
}

.tasks {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tasks__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  transition: background-color 0.2s ease;
}

.tasks__item:hover {
  background-color: #e9ecef;
}

.tasks__text {
  font-size: 1rem;
  color: #333;
}

.tasks__delete {
  padding: 8px 16px;
  font-size: 0.9rem;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.tasks__delete:hover {
  background-color: #c0392b;
}
```

**js/main.js:**
```javascript
let tasks = []; // array de tareas 📋

// your code here 💻
// load tasks from localStorage
// render tasks to DOM
// add submit event listener
// implement addTask function
// implement deleteTask function
// save tasks to localStorage after changes

// tests (run after adding tasks)
const runTests = () => {
  console.log('=== Tests ===');
  console.log(tasks.includes('Estudiar JS'));
  console.log(tasks.length === 2);
  console.log(tasks.length === 1);
  console.log(typeof localStorage.getItem('tasks') === 'string');
  console.log(typeof tasks === 'object');
};

// uncomment to run tests
// runTests();
```

**💡 Tips:**
- 🔹 Funciones separadas: `loadTasks()`, `saveTasks()`, `renderTasks()`
- 🔹 `tasks.push(newTask)` para agregar
- 🔹 `tasks.splice(index, 1)` para eliminar
- 🔹 Renderiza después de cada cambio

**🚀 Motivación:** 🎉 ¡PROYECTO FINAL! Elliot organiza su vida con localStorage ⚡📋✨

---

## 📊 Resumen del Nivel 9 🎯

**🎉 Has completado:**
- ✅ **LocalStorage básico:** `setItem()`, `getItem()`
- ✅ **JSON:** `stringify()` y `parse()` con objetos
- ✅ **CRUD completo:** Create, Read, Update, Delete

**⏰ Tiempo estimado:** 2 horas 

**🎓 Conceptos clave:**
- localStorage guarda datos en el navegador
- Los datos persisten entre sesiones
- Solo acepta strings (usar JSON para objetos)
- Máximo ~5-10MB por dominio
- `JSON.stringify()` → objeto a string
- `JSON.parse()` → string a objeto
- Siempre validar datos recuperados

**🔜 Próximo nivel:** ⏰ Nivel 10 - Async JavaScript

---

💪 **¡Felicidades!** Fernanda, Mijael, Fe, Elliot, Chocolate, Amorosa y Doky están orgullosos. ¡Eres un maestro de localStorage! 🏆✨🚀
