# 🎨 Nivel 7: DOM - Manipular la Página en Vivo ✨

```
  ██████╗  ██████╗ ███╗   ███╗    ███╗   ███╗ █████╗  ██████╗ ██╗ ██████╗
  ██╔══██╗██╔═══██╗████╗ ████║    ████╗ ████║██╔══██╗██╔════╝ ██║██╔════╝
  ██║  ██║██║   ██║██╔████╔██║    ██╔████╔██║███████║██║  ███╗██║██║     
  ██║  ██║██║   ██║██║╚██╔╝██║    ██║╚██╔╝██║██╔══██║██║   ██║██║██║     
  ██████╔╝╚██████╔╝██║ ╚═╝ ██║    ██║ ╚═╝ ██║██║  ██║╚██████╔╝██║╚██████╗
  ╚═════╝  ╚═════╝ ╚═╝     ╚═╝    ╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝ ╚═════╝
```

> **🎯 Objetivo:** Dominar DOM desde cero: seleccionar elementos, modificar contenido, cambiar estilos y crear elementos dinámicamente 🚀

---

## 🔍 Reto 1: Selector Mágico - querySelector

**📖 Historia:** Fernanda 🧙‍♀️ tiene una página HTML con un título `<h1 id="title">`, un párrafo `<p class="description">` y un botón `<button id="btn">`. Debe seleccionarlos con `querySelector` y `getElementById`, luego cambiar sus textos con `textContent`. ¡Primeros pasos en DOM! 🎯

**📝 Descripción:** Tu programa debe seleccionar 3 elementos del HTML usando `document.getElementById()` y `document.querySelector()`, luego modificar su contenido de texto con `textContent` para mostrar nuevos mensajes.

**⚙️ Funcionalidades:**
- Seleccionar elemento por ID: `document.getElementById('title')`
- Seleccionar elemento por clase: `document.querySelector('.description')`
- Seleccionar elemento por ID con querySelector: `document.querySelector('#btn')`
- Modificar texto con `textContent`
- Validar que los elementos existen

**✅ Casos de prueba:**

| Input                                        | Expected Output                   |
| -------------------------------------------- | --------------------------------- |
| `title.textContent` después de cambiar       | `'Bienvenido al DOM'`             |
| `description.textContent` después de cambiar | `'JavaScript controla la página'` |
| `btn.textContent` después de cambiar         | `'Click Mágico'`                  |
| `title.tagName`                              | `'H1'`                            |
| `typeof title`                               | `'object'`                        |

**💻 Código base:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>🔍 Selector Mágico</title>
</head>
<body>
  <h1 id="title">Título Original</h1>
  <p class="description">Descripción original</p>
  <button id="btn">Botón Original</button>

  <script>
    // your code here 💻
    // select title, description, btn
    // change textContent of each

    console.log(title.textContent === 'Bienvenido al DOM');
    console.log(description.textContent === 'JavaScript controla la página');
    console.log(btn.textContent === 'Click Mágico');
    console.log(title.tagName === 'H1');
    console.log(typeof title === 'object');
  </script>
</body>
</html>
```

**💡 Tips:**
- 🔹 `document.getElementById('id')` → por ID
- 🔹 `document.querySelector('.clase')` → por clase
- 🔹 `document.querySelector('#id')` → también funciona con ID
- 🔹 `element.textContent = 'nuevo texto'` → cambiar contenido

**🚀 Motivación:** ¡Fernanda controla la página con JavaScript! 🔍✨

**📁 Carpeta:** `o1-magic-selector-queryselector/`

---

## ✏️ Reto 2: Editor de Contenido - innerHTML y value

**📖 Historia:** Elliot ⚡ tiene un div `<div id="container">` y un input `<input id="nameInput">`. Debe usar `innerHTML` para agregar HTML completo dentro del div (¡con etiquetas!), y usar `value` para obtener y establecer el texto del input. ¡Diferentes formas de contenido! 📝

**📝 Descripción:** Tu programa debe manipular contenido de dos formas: usar `innerHTML` para agregar HTML con etiquetas dentro de un div, y usar `value` para leer y modificar el contenido de un input de texto.

**⚙️ Funcionalidades:**
- Seleccionar div con `getElementById('container')`
- Usar `innerHTML` para agregar HTML: `'<h2>Hola</h2><p>Mundo</p>'`
- Seleccionar input con `querySelector('#nameInput')`
- Establecer valor del input con `value = 'Elliot'`
- Leer valor del input con `value`

**✅ Casos de prueba:**

| Input                                   | Expected Output |
| --------------------------------------- | --------------- |
| `container.innerHTML.includes('<h2>')`  | `true`          |
| `container.innerHTML.includes('Hola')`  | `true`          |
| `nameInput.value` después de establecer | `'Elliot'`      |
| `container.children.length`             | `2`             |
| `typeof nameInput.value`                | `'string'`      |

**💻 Código base:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>✏️ Editor de Contenido</title>
</head>
<body>
  <div id="container"></div>
  <input type="text" id="nameInput" placeholder="Escribe tu nombre">

  <script>
    // your code here 💻
    // select container and nameInput
    // set innerHTML of container to '<h2>Hola</h2><p>Mundo</p>'
    // set value of nameInput to 'Elliot'

    console.log(container.innerHTML.includes('<h2>') === true);
    console.log(container.innerHTML.includes('Hola') === true);
    console.log(nameInput.value === 'Elliot');
    console.log(container.children.length === 2);
    console.log(typeof nameInput.value === 'string');
  </script>
</body>
</html>
```

**💡 Tips:**
- 🔹 `innerHTML` permite HTML: `<h1>Título</h1>`
- 🔹 `textContent` solo texto plano
- 🔹 `input.value` para inputs, textarea, select
- 🔹 `innerHTML` ⚠️ cuidado con XSS en producción

**🚀 Motivación:** ¡Elliot edita contenido dinámicamente! ⚡✏️

**📁 Carpeta:** `o2-content-editor-innerhtml/`

---

## 🎨 Reto 3: Cambio de Estilo - classList

**📖 Historia:** Doky 🐕 tiene un box `<div id="box" class="box">` con estilos CSS. Debe usar `classList.add()` para agregar clase 'active', `classList.remove()` para quitar 'box', y `classList.toggle()` para alternar 'hidden'. ¡Control total de clases CSS! 🎨

**📝 Descripción:** Tu programa debe manipular las clases CSS de un elemento usando `classList`: agregar la clase 'active' con `add()`, remover la clase 'box' con `remove()`, y alternar la clase 'hidden' con `toggle()`.

**⚙️ Funcionalidades:**
- Seleccionar div con ID 'box'
- Agregar clase 'active' con `classList.add('active')`
- Remover clase 'box' con `classList.remove('box')`
- Alternar clase 'hidden' con `classList.toggle('hidden')`
- Verificar clases con `classList.contains()`

**✅ Casos de prueba:**

| Input                                                | Expected Output |
| ---------------------------------------------------- | --------------- |
| `box.classList.contains('active')` después de add    | `true`          |
| `box.classList.contains('box')` después de remove    | `false`         |
| `box.classList.contains('hidden')` después de toggle | `true`          |
| `box.classList.length` al final                      | `2`             |
| `typeof box.classList`                               | `'object'`      |

**💻 Código base:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>🎨 Cambio de Estilo</title>
  <style>
    .box { width: 100px; height: 100px; background: blue; }
    .active { border: 5px solid red; }
    .hidden { display: none; }
  </style>
</head>
<body>
  <div id="box" class="box"></div>

  <script>
    // your code here 💻
    // select box
    // add class 'active'
    // remove class 'box'
    // toggle class 'hidden'

    console.log(box.classList.contains('active') === true);
    console.log(box.classList.contains('box') === false);
    console.log(box.classList.contains('hidden') === true);
    console.log(box.classList.length === 2);
    console.log(typeof box.classList === 'object');
  </script>
</body>
</html>
```

**💡 Tips:**
- 🔹 `classList.add('clase')` agrega clase
- 🔹 `classList.remove('clase')` quita clase
- 🔹 `classList.toggle('clase')` alterna (on/off)
- 🔹 `classList.contains('clase')` verifica si existe

**🚀 Motivación:** ¡Doky cambia estilos como un diseñador! 🐕🎨

**📁 Carpeta:** `o3-style-changer-classlist/`

---

## ➕ Reto 4: Constructor de Elementos - createElement

**📖 Historia:** Amorosa 💖 necesita crear elementos desde cero con JavaScript. Debe usar `document.createElement('div')` para crear un nuevo div, establecer su texto con `textContent`, agregar clase con `classList.add()`, y finalmente agregarlo al body con `appendChild()`. ¡Construcción dinámica! 🏗️

**📝 Descripción:** Tu programa debe crear un nuevo elemento HTML desde JavaScript usando `createElement()`, configurar su contenido y clases, y finalmente agregarlo al DOM con `appendChild()` para que aparezca en la página.

**⚙️ Funcionalidades:**
- Crear elemento con `document.createElement('div')`
- Establecer ID con `id = 'newBox'`
- Establecer texto con `textContent = 'Soy nuevo'`
- Agregar clase con `classList.add('new-element')`
- Agregar al body con `document.body.appendChild(element)`

**✅ Casos de prueba:**

| Input                                      | Expected Output |
| ------------------------------------------ | --------------- |
| `newBox.textContent` después de crear      | `'Soy nuevo'`   |
| `newBox.classList.contains('new-element')` | `true`          |
| `newBox.id`                                | `'newBox'`      |
| `document.body.contains(newBox)`           | `true`          |
| `typeof newBox`                            | `'object'`      |

**💻 Código base:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>➕ Constructor de Elementos</title>
  <style>
    .new-element { 
      padding: 20px; 
      background: lightblue; 
      margin: 10px; 
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <h1>Elementos Dinámicos</h1>

  <script>
    // your code here 💻
    // create new div element
    // set id to 'newBox'
    // set textContent to 'Soy nuevo'
    // add class 'new-element'
    // append to body

    console.log(newBox.textContent === 'Soy nuevo');
    console.log(newBox.classList.contains('new-element') === true);
    console.log(newBox.id === 'newBox');
    console.log(document.body.contains(newBox) === true);
    console.log(typeof newBox === 'object');
  </script>
</body>
</html>
```

**💡 Tips:**
- 🔹 `document.createElement('tag')` crea elemento
- 🔹 Configurar propiedades antes de agregar al DOM
- 🔹 `parent.appendChild(child)` agrega al final
- 🔹 `element.remove()` para eliminar elemento

**🚀 Motivación:** 🎉 ¡PROYECTO FINAL! Amorosa construye elementos dinámicamente 💖🏗️✨

**📁 Carpeta:** `o4-element-builder-createelement/`

---

## 📊 Resumen del Nivel 7 🎯

**🎉 Has completado:**
- ✅ **Seleccionar elementos:** `getElementById()`, `querySelector()`
- ✅ **Manipular contenido:** `textContent`, `innerHTML`, `value`
- ✅ **Cambiar estilos:** `classList.add()`, `remove()`, `toggle()`
- ✅ **Crear elementos:** `createElement()`, `appendChild()`

**⏰ Tiempo estimado:** 2 horas 

**🎓 Conceptos clave:**
- DOM = Document Object Model (árbol de elementos)
- querySelector es el método moderno preferido
- textContent para texto, innerHTML para HTML
- classList maneja clases CSS dinámicamente
- createElement + appendChild crean elementos
- Los elementos son objetos JavaScript

**🔜 Próximo nivel:** 👂 Nivel 8 - Eventos (Interactividad)

---

💪 **¡Felicidades!** Fernanda, Mijael, Fe, Elliot, Chocolate, Amorosa y Doky están orgullosos. ¡Eres un maestro del DOM! 🏆✨🚀
