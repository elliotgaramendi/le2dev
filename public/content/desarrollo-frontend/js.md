# 🚀 JavaScript Moderno: De Cero a Crear Apps

> **Aprende JavaScript moderno con práctica desde el día 1** ⚡

---

## 🌱 Nivel 1: Tu Primer Código

#### 📦 Variables y Console
- `console.log()` - mostrar mensajes en la consola
- `let` - variables que pueden cambiar
- `const` - valores constantes (no cambian)
- Diferencia entre `let` y `const`
- Naming conventions (camelCase)
- ❌ No enseñar `var` (obsoleto, confunde)

#### 🎨 Tipos Primitivos
- `string` - textos con comillas simples/dobles
- `number` - enteros y decimales
- `boolean` - true/false
- `typeof` - identificar el tipo de dato
- Template literals con backticks `` `Hola ${nombre}` ``

#### 🔔 Interacción Básica
- `alert()` - mostrar mensajes al usuario
- `prompt()` - capturar texto del usuario
- `confirm()` - preguntas sí/no
- Guardar resultado de prompt en variables

**5 Retos** • 1.5-2 horas

---

## 🔧 Nivel 2: Operaciones y Decisiones

#### 🔄 Type Casting (Conversión de Tipos)
- Por qué `prompt()` siempre devuelve string
- `Number()` - convertir a número
- `String()` - convertir a texto
- **Operador unario `+`** - conversión rápida: `+prompt()`
- `parseInt()` y `parseFloat()` - para casos específicos
- `NaN` y cómo detectarlo con `isNaN()`

#### ➕ Operadores Aritméticos
- Básicos: `+`, `-`, `*`, `/`
- Módulo: `%` (residuo de división)
- Potencia: `**` (exponenciación)
- Incremento/Decremento: `++`, `--`
- Concatenación de strings con `+`
- Operadores de asignación: `+=`, `-=`, `*=`, `/=`

#### ⚖️ Comparaciones
- **Siempre usar:** `===` y `!==` (igualdad estricta)
- ❌ **Nunca usar:** `==` y `!=` (explica brevemente por qué)
- Comparaciones: `>`, `<`, `>=`, `<=`
- Comparar strings (orden alfabético)

#### 🧠 Control de Flujo
- `if`, `else if`, `else` - tomar decisiones
- Operador ternario: `condicion ? valorTrue : valorFalse`
- Truthy y Falsy values - qué valores se consideran "falsos"
- Guard clauses - retornos tempranos

**6 Retos** • 2 horas

---

## 🔁 Nivel 3: Repetir Tareas

#### 🌀 For Loop
- Sintaxis: `for (inicio; condicion; incremento)`
- Casos de uso: contar, acumular, iterar
- Estructura básica: `for (let i = 0; i < 10; i++)`

#### 🔄 While Loop
- Sintaxis: `while (condicion)`
- Diferencia con for: control manual del contador
- ⚠️ Cuidado con loops infinitos
- Cuándo usar while vs for

#### 🛑 Control de Loops
- `break` - salir del loop inmediatamente
- `continue` - saltar a la siguiente iteración
- Casos de uso de cada uno

#### 🪆 Loops Anidados
- For dentro de for
- While dentro de while
- Patrones 2D: filas y columnas
- Aplicaciones prácticas

#### 🧩 Operadores Lógicos
- `&&` (AND) - ambas condiciones deben ser true
- `||` (OR) - al menos una debe ser true
- `!` (NOT) - invierte el valor booleano
- Combinar en condiciones complejas
- Tabla de verdad básica

**6 Retos** • 2 horas

---

## 📦 Nivel 4: Arrays (Listas)

#### 📋 Arrays Básicos
- Crear arrays: `[]`
- Índices y `.length`
- Acceder y modificar: `array[0]`

#### ➕➖ Métodos de Modificación
- `push()`, `pop()` - Añadir/quitar al final
- `shift()`, `unshift()` - Añadir/quitar al inicio

#### 🔍 Métodos de Búsqueda
- `includes()` - Verificar si existe
- `indexOf()` - Encontrar posición
- `slice()` - Extraer porción

#### 🔄 Métodos de Iteración (Lo Importante)
- `forEach()` - Iterar cada elemento
- `map()` - Transformar array
- `filter()` - Filtrar elementos
- `find()` - Buscar con condición

#### 🎯 Operadores Modernos
- Spread `...array` - Copiar/combinar
- Destructuring `[a, b] = array` - Extraer valores

**7 Retos** • 2 horas

---

## 🏛️ Nivel 5: Objects (Objetos)

#### 📦 Objects Básicos
- Object literals: `{}`
- Propiedades clave-valor
- Dot notation: `obj.nombre`
- Bracket notation: `obj['nombre']`

#### 🔧 Trabajar con Objects
- Añadir/modificar propiedades
- Objects anidados
- Arrays de objects
- Shorthand properties

#### 🔑 Métodos Útiles
- `Object.keys()` - Array de claves
- `Object.values()` - Array de valores
- `Object.entries()` - Array de pares

#### 🆕 Operadores Modernos
- **Optional Chaining:** `obj?.propiedad?.subpropiedad`
- **Nullish Coalescing:** `valor ?? 'default'`
- Spread para objects: `{...obj}`
- Destructuring: `const {nombre, edad} = persona`

#### 📄 JSON
- `JSON.stringify()` - Object a string
- `JSON.parse()` - String a object

**7 Retos** • 2 horas

---

## ⚡ Nivel 6: Funciones

#### 🎯 Funciones Básicas
- Function declaration (breve mención)
- Function expression (breve mención)
- Parámetros y argumentos
- Return values
- Scope básico de funciones

#### 🏹 Arrow Functions (El Estándar Moderno)
- Sintaxis básica: `() => {}`
- Con un parámetro: `x => {}`
- Return implícito: `x => x * 2`
- Con múltiples líneas: `() => { ... }`
- Cuándo usar arrow functions

#### 🎁 Parámetros Avanzados
- Default parameters: `(x = 10) => {}`
- Rest parameters: `(...nums) => {}`
- Spread en llamadas: `funcion(...array)`

**6 Retos** • 1.5-2 horas

---

## 🎨 Nivel 7: DOM - Manipular la Página

#### 🔍 Seleccionar Elementos
- `document.getElementById('id')`
- `document.querySelector('.class')` ← El más usado
- `document.querySelectorAll('.class')` - Múltiples

#### ✏️ Manipular Contenido
- `textContent` - Texto plano
- `innerHTML` - HTML (usar con cuidado)
- `value` - Para inputs

#### 🎨 Estilos y Clases
- `classList.add('clase')`
- `classList.remove('clase')`
- `classList.toggle('clase')`
- `style.propiedad` - Estilos inline (breve)

#### ➕ Crear/Eliminar (Breve)
- `document.createElement()`
- `elemento.appendChild()`
- `elemento.remove()`

**6 Retos** • 2 horas

---

## 👂 Nivel 8: Eventos - Interactividad

#### 🖱️ Eventos Básicos
- `addEventListener('evento', callback)`
- `removeEventListener()` (breve mención)
- Event object y sus propiedades

#### 🎯 Tipos de Eventos Esenciales
- `click` - Click en elementos
- `submit` - Envío de formularios
- `input` - Escribir en inputs (tiempo real)
- `change` - Cambio en selects/checkboxes
- `event.target` - Elemento que disparó el evento

#### 🛡️ Control de Eventos
- `event.preventDefault()` - Prevenir acción default
- Caso común: evitar submit de formulario

#### 📋 Trabajar con Formularios
- Capturar evento `submit`
- Obtener valores: `input.value`
- Validación básica de campos
- Resetear formulario: `form.reset()`

**6 Retos** • 2 horas

---

## 💾 Nivel 9: Guardar Datos

#### 📦 LocalStorage
- `localStorage.setItem('key', 'value')` - Guardar
- `localStorage.getItem('key')` - Recuperar
- `localStorage.removeItem('key')` - Eliminar
- `localStorage.clear()` - Limpiar todo

#### 🔄 Storage con Objetos
- Guardar objects: `JSON.stringify(objeto)`
- Recuperar objects: `JSON.parse(string)`
- Manejo de errores al parsear

#### 💡 Casos de Uso
- Guardar preferencias del usuario
- Persistir estado de la aplicación
- Recordar datos entre sesiones

**4 Retos** • 1.5 horas

---

## ⏰ Nivel 10: JavaScript Asíncrono

#### 🔄 Conceptos Básicos
- Sincronía vs Asincronía (teoría breve)
- El Event Loop (concepto simple)

#### ⏲️ Timers
- `setTimeout()` - Ejecutar después
- `setInterval()` - Ejecutar cada X tiempo
- `clearTimeout()`, `clearInterval()`

#### 🤝 Promises
- Qué es una Promise
- `.then()` - Manejar éxito
- `.catch()` - Manejar error
- `.finally()` - Siempre ejecutar

#### ✨ Async/Await (El Estándar Moderno)
- `async` function
- `await` - Esperar resultado
- `try/catch` - Manejar errores
- Por qué async/await > promises

**7 Retos** • 2 horas

---

## 🌐 Nivel 11: Conectar con APIs

#### 📡 Conceptos de APIs
- Qué es una API REST (simple)
- HTTP methods: GET, POST
- Status codes: 200, 404, 500

#### 🌊 Fetch API
- `fetch(url)` - Traer datos
- `.json()` - Parsear respuesta
- GET requests
- POST requests con body
- Headers básicos

#### 🎨 En la Práctica
- Mostrar datos en el DOM
- Loading states
- Error handling

**6 Retos** • 2 horas

---

## 📦 Nivel 12: Organizar tu Código

#### 🏗️ Módulos ES6
- Por qué usar módulos
- `type="module"` en HTML
- Named exports: `export const funcion = () => {}`
- Default export: `export default funcion`
- Import named: `import { funcion } from './archivo.js'`
- Import default: `import funcion from './archivo.js'`
- Estructura de carpetas recomendada

#### ✨ Buenas Prácticas
- Naming conventions consistentes
- DRY - Don't Repeat Yourself
- Comentarios útiles (no obvios)
- `"use strict"` (breve mención)
- Console para debugging

**5 Retos** • 1.5-2 horas

---

## 📊 Hoja de Ruta

```
Nivel 1  → Variables y tipos
Nivel 2  → Operadores y decisiones
Nivel 3  → Loops y lógica
Nivel 4  → Arrays
Nivel 5  → Objects
Nivel 6  → Funciones
Nivel 7  → DOM
Nivel 8  → Eventos
Nivel 9  → Storage
Nivel 10 → Async
Nivel 11 → APIs
Nivel 12 → Módulos
```

**Total:** 12 niveles • ~70 retos • 20-24 horas

---

✨ **Al terminar podrás crear aplicaciones web modernas e interactivas** ✨
