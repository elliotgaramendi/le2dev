# 🌱 Nivel 1: Primeros Pasos en JavaScript ✨

```
   _____ _             _   
  / ____| |           | |  
 | (___ | |_ __ _ _ __| |_ 
  \___ \| __/ _` | '__| __|
  ____) | || (_| | |  | |_ 
 |_____/ \__\__,_|_|   \__|
                            
```

> **🎯 Objetivo:** Dominar console, variables, tipos de datos, operadores y entrada/salida básica 💻✨

---

## 💬 Reto 1: Console Básico

**📝 Descripción:** Muestra diferentes mensajes usando console 🖥️

**⚡ Funcionalidad:** Usar `console.log()`, `console.warn()` y `console.error()` para mostrar mensajes

**✅ Casos de prueba:**
- ✅ Mensaje normal aparece en color estándar 💬
- ✅ Advertencia aparece en color amarillo/naranja ⚠️
- ✅ Error aparece en color rojo ❌
- ✅ Los tres mensajes se muestran sin errores de sintaxis 🎯

**🏗️ Código base:**
```javascript
// Show a normal message
// Show a warning
// Show an error
```

**💡 Tips:**
- 🔹 `console.log()` para mensajes normales 💬
- 🔹 `console.warn()` para advertencias ⚠️
- 🔹 `console.error()` para errores ❌
- 🔹 Abre la consola con F12 o clic derecho → Inspeccionar 🔍

**📁 Carpeta:** `o1-console-basics/`

**🎨 HTML:**
```html
<title>💬 Console Básico 🖥️</title>
<h1>💬 Console Básico 🖥️</h1>
<h5>🔍 Abre la consola para ver los mensajes 💬</h5>
```

**🚀 Motivación:** ¡La consola es tu mejor amiga! Aquí verás todo lo que tu código hace 🌟✨

---

## 📦 Reto 2: Primera Variable

**📝 Descripción:** Crea tu primera variable y muéstrala en consola ✍️

**⚡ Funcionalidad:** Usar `const` para guardar tu nombre y mostrarlo con `console.log()`

**✅ Casos de prueba:**
- ✅ Variable declarada con `const` 🔒
- ✅ Variable contiene un string con tu nombre 📝
- ✅ El nombre se muestra correctamente en consola 💻
- ✅ Usa nombres descriptivos en inglés (ejemplo: `name`, `myName`) 🎯

**🏗️ Código base:**
```javascript
// Create a variable with your name
// Show your name in console
```

**💡 Tips:**
- 🔹 `const name = "Tu Nombre";` 📦
- 🔹 `console.log()` para mostrar 💬
- 🔹 Los nombres de variables van en inglés 🌐
- 🔹 Los mensajes al usuario van en español 🇪🇸

**📁 Carpeta:** `o2-first-variable/`

**🎨 HTML:**
```html
<title>📦 Mi Primera Variable ✨</title>
<h1>📦 Mi Primera Variable ✨</h1>
<h5>🔍 Abre la consola para ver tu nombre 👤</h5>
```

**🚀 Motivación:** ¡Las variables son cajitas mágicas que guardan información! 📦✨

---

## 🎨 Reto 3: Tipos de Datos

**📝 Descripción:** Crea variables de diferentes tipos de datos 🌈

**⚡ Funcionalidad:** Declarar string, number, boolean, undefined y null

**✅ Casos de prueba:**
- ✅ Variable tipo string con texto 📝
- ✅ Variable tipo number con un número 🔢
- ✅ Variable tipo boolean (true o false) ✅
- ✅ Variable undefined (sin valor asignado) ❓
- ✅ Variable null (valor vacío intencional) ⭕
- ✅ Todas se muestran correctamente en consola 💻

**🏗️ Código base:**
```javascript
// String: your favorite language
// Number: your favorite number
// Boolean: are you learning JavaScript?
// Undefined: a variable without value
// Null: an empty value
// Show all in console
```

**💡 Tips:**
- 🔹 String: `"texto entre comillas"` 📝
- 🔹 Number: `8` (sin comillas) 🔢
- 🔹 Boolean: `true` o `false` ✅❌
- 🔹 Undefined: declarar sin asignar valor ❓
- 🔹 Null: `null` ⭕

**📁 Carpeta:** `o3-data-types/`

**🎨 HTML:**
```html
<title>🎨 Tipos de Datos 🌈</title>
<h1>🎨 Tipos de Datos 🌈</h1>
<h5>🔍 Explora los diferentes tipos en la consola 📊</h5>
```

**🚀 Motivación:** JavaScript tiene diferentes tipos de datos. ¡Conócelos todos! 🎨✨

---

## 🔍 Reto 4: Detective de Tipos

**📝 Descripción:** Usa `typeof` para identificar el tipo de cada variable 🕵️‍♂️

**⚡ Funcionalidad:** Descubrir el tipo de dato usando el operador `typeof`

**✅ Casos de prueba:**
- ✅ `typeof` de un string muestra "string" 📝
- ✅ `typeof` de un number muestra "number" 🔢
- ✅ `typeof` de un boolean muestra "boolean" ✅
- ✅ `typeof` de undefined muestra "undefined" ❓
- ✅ `typeof` de null muestra "object" (bug de JavaScript) ⭕

**🏗️ Código base:**
```javascript
const favoriteLanguage = 'JavaScript';
const favoriteNumber = 8;
const isLearning = true;
let girlfriend;
const isMarried = null;
// Show the type of each variable using typeof
```

**💡 Tips:**
- 🔹 `typeof variable` muestra el tipo 🔍
- 🔹 `typeof` siempre retorna un string 📝
- 🔹 ¡Sorpresa! `typeof null` es "object" (bug histórico) 🐛
- 🔹 No necesitas paréntesis: `typeof x` (no `typeof(x)`) 🎯

**📁 Carpeta:** `o4-type-detective/`

**🎨 HTML:**
```html
<title>🔍 Detective de Tipos 🕵️‍♂️</title>
<h1>🔍 Detective de Tipos 🕵️‍♂️</h1>
<h5>🎯 Investiga los tipos en la consola 🔬</h5>
```

**🚀 Motivación:** ¡Ser detective de tipos te evitará muchos bugs! 🔍✨

---

## ➕ Reto 5: Operadores Matemáticos

**📝 Descripción:** Realiza operaciones matemáticas básicas 🧮

**⚡ Funcionalidad:** Usar operadores `+`, `-`, `*`, `/` con números

**✅ Casos de prueba:**
- ✅ Suma de dos números es correcta ➕
- ✅ Resta de dos números es correcta ➖
- ✅ Multiplicación de dos números es correcta ✖️
- ✅ División de dos números es correcta ➗
- ✅ Resultados mostrados con template strings 💬

**🏗️ Código base:**
```javascript
const number1 = 8;
const number2 = 5;
// Calculate sum
// Calculate difference
// Calculate product
// Calculate quotient
// Show results with template strings
```

**💡 Tips:**
- 🔹 Usa `+`, `-`, `*`, `/` para operaciones ➕➖✖️➗
- 🔹 Guarda resultados en variables 📦
- 🔹 Template strings: \`Suma: ${sum}\` 💬
- 🔹 Nombres en inglés: `sum`, `difference`, `product`, `quotient` 🌐

**📁 Carpeta:** `o5-math-operators/`

**🎨 HTML:**
```html
<title>➕ Operadores Matemáticos 🧮</title>
<h1>➕ Operadores Matemáticos 🧮</h1>
<h5>🔢 Revisa los cálculos en la consola 🧮</h5>
```

**🚀 Motivación:** ¡JavaScript es una calculadora súper poderosa! 🔢✨

---

## ✨ Reto 6: Template Strings

**📝 Descripción:** Crea mensajes combinando texto y variables 🎤

**⚡ Funcionalidad:** Usar template strings con backticks para interpolar variables

**✅ Casos de prueba:**
- ✅ Usa backticks (\`) en lugar de comillas 📝
- ✅ Incluye al menos 2 variables en el mensaje 🔗
- ✅ Usa `${}` para insertar variables ✨
- ✅ El mensaje se muestra correctamente formateado 💬

**🏗️ Código base:**
```javascript
const name = 'Fernanda';
const age = 15;
const favoriteAnimal = 'Doky';
// Create a presentation message using template strings
// Show the message in console
```

**💡 Tips:**
- 🔹 Backticks: \`texto ${variable} más texto\` 📝
- 🔹 `${}` inserta el valor de la variable 🔗
- 🔹 Puedes hacer operaciones dentro: `${age + 1}` 🧮
- 🔹 Más legible que concatenación: `"Hola " + name` ❌

**📁 Carpeta:** `o6-template-strings/`

**🎨 HTML:**
```html
<title>✨ Template Strings 🎤</title>
<h1>✨ Template Strings 🎤</h1>
<h5>💬 Mira tu presentación en la consola 🌟</h5>
```

**🚀 Motivación:** ¡Template strings hacen tu código más limpio y legible! ✨💫

---

## 🔔 Reto 7: Primer Alert

**📝 Descripción:** Muestra un mensaje emergente al usuario 📢

**⚡ Funcionalidad:** Usar `alert()` para mostrar una ventana emergente

**✅ Casos de prueba:**
- ✅ Aparece una ventana emergente 🪟
- ✅ El mensaje incluye emojis ✨
- ✅ El mensaje está en español para el usuario 🇪🇸
- ✅ Solo hay un alert (no spamear al usuario) 🎯

**🏗️ Código base:**
```javascript
// Show a welcome message with alert
```

**💡 Tips:**
- 🔹 `alert("mensaje")` muestra ventana emergente 🔔
- 🔹 Bloquea la página hasta que el usuario haga clic ⏸️
- 🔹 Usa emojis para hacerlo más amigable 🎉
- 🔹 Los mensajes siempre en español para el usuario 🇪🇸

**📁 Carpeta:** `o7-first-alert/`

**🎨 HTML:**
```html
<title>🔔 Mi Primer Alert 📢</title>
<h1>🔔 Mi Primer Alert 📢</h1>
```

**🚀 Motivación:** ¡Ahora puedes hablar directamente con el usuario! 💬✨

---

## ⌨️ Reto 8: Captura de Información

**📝 Descripción:** Captura información del usuario y muéstrala en consola 📥

**⚡ Funcionalidad:** Usar `prompt()` para capturar input y `console.log()` para mostrarlo

**✅ Casos de prueba:**
- ✅ `prompt()` muestra ventana de input 🪟
- ✅ Lo que el usuario escribe se guarda en una variable 💾
- ✅ El valor capturado se muestra en consola 💻
- ✅ Usa template strings para el mensaje de bienvenida 💬

**🏗️ Código base:**
```javascript
// Ask for the user's name
// Show a welcome message in console with their name
```

**💡 Tips:**
- 🔹 `prompt("pregunta")` captura texto del usuario ⌨️
- 🔹 Siempre retorna un string 📝
- 🔹 Si el usuario cancela, retorna `null` ❌
- 🔹 Usa template strings para el mensaje de bienvenida ✨

**📁 Carpeta:** `o8-capture-input/`

**🎨 HTML:**
```html
<title>⌨️ Captura de Información 📥</title>
<h1>⌨️ Captura de Información 📥</h1>
```

**🚀 Motivación:** ¡Tu programa ya puede interactuar con personas reales! 🎮✨

---

## 👋 Reto 9: Saludo Personalizado

**📝 Descripción:** Captura el nombre del usuario y muestra un saludo con `alert()` 🎉

**⚡ Funcionalidad:** Combinar `prompt()`, template strings y `alert()`

**✅ Casos de prueba:**
- ✅ `prompt()` captura el nombre del usuario ⌨️
- ✅ Template string crea mensaje personalizado 📝
- ✅ `alert()` muestra el saludo 🔔
- ✅ El flujo es: capturar → procesar → mostrar 🔄

**🏗️ Código base:**
```javascript
// Ask for the user's name
// Create a personalized greeting with template strings
// Show the greeting with alert
```

**💡 Tips:**
- 🔹 Captura con `prompt()` ⌨️
- 🔹 Crea el mensaje con template strings 📝
- 🔹 Muestra con `alert()` 🔔
- 🔹 Puedes guardar el mensaje en una variable o mostrarlo directo 🎯

**📁 Carpeta:** `o9-custom-greeting/`

**🎨 HTML:**
```html
<title>👋 Saludo Personalizado 🎉</title>
<h1>👋 Saludo Personalizado 🎉</h1>
```

**🚀 Motivación:** ¡Estás combinando varios conceptos! Eso es programar de verdad 🚀✨

---

## 👤 Reto 10: Mini Perfil

**📝 Descripción:** Captura múltiples datos y crea un perfil completo 📋

**⚡ Funcionalidad:** Usar varios `prompt()` y mostrar un perfil con `alert()`

**✅ Casos de prueba:**
- ✅ Captura al menos 3 datos del usuario 📊
- ✅ Usa template strings para crear el perfil 📝
- ✅ El perfil incluye todos los datos capturados 💬
- ✅ Template strings con saltos de línea (\n o multiline) 📄

**🏗️ Código base:**
```javascript
// Ask for name
// Ask for last name
// Ask for email
// Create profile with template strings (multiline)
// Show profile with alert
```

**💡 Tips:**
- 🔹 Múltiples `prompt()` para capturar varios datos ⌨️
- 🔹 Template strings multiline con backticks 📝
- 🔹 Saltos de línea automáticos en template strings 📄
- 🔹 Un solo `alert()` con todo el perfil 🔔

**📁 Carpeta:** `o10-mini-profile/`

**🎨 HTML:**
```html
<title>👤 Mini Perfil 📋</title>
<h1>👤 Mini Perfil 📋</h1>
```

**🚀 Motivación:** 🎉 ¡PROYECTO FINAL! Has integrado todo lo aprendido. ¡Eres increíble! 💪✨

---

## 📊 Resumen del Nivel 1 🎯

**🎉 Has completado:**
- ✅ Console: log, warn, error 💬
- ✅ Variables con const 📦
- ✅ Tipos de datos: string, number, boolean, undefined, null 🎨
- ✅ Operador typeof 🔍
- ✅ Operadores matemáticos: +, -, *, / ➕➖✖️➗
- ✅ Template strings con backticks ✨
- ✅ Alert y prompt 🔔⌨️
- ✅ Integración de conceptos 🔗

**⏰ Tiempo estimado:** 2-3 horas 

**🔜 Próximo nivel:** 🔧 Nivel 2 - Transformaciones y Lógica

---

💪 **¡Felicidades!** Has dado tus primeros pasos en JavaScript. Cada reto completado es una victoria. ¡Sigue así, campeón! 🏆✨🚀
