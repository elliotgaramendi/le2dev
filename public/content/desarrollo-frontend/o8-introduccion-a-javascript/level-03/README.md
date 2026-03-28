# 🔁 Nivel 3: Loops y Operadores Lógicos 🌀

```
  _                          
 | |                         
 | | ___   ___  _ __  ___    
 | |/ _ \ / _ \| '_ \/ __|   
 | | (_) | (_) | |_) \__ \   
 |_|\___/ \___/| .__/|___/   
               | |            
               |_|            
```

> **🎯 Objetivo:** Dominar bucles for y while, break/continue, y operadores lógicos para automatizar tareas ✨

---

## 🔢 Reto 1: Contador Mágico - For Loop

**📖 Historia:** Fe 🌟 necesita contar del 1 al 10 y sumar todos los números para un ritual mágico. Hacerlo manualmente es aburrido, ¡usa el bucle `for`! El bucle tiene 3 partes: **inicio** `let i = 1`, **condición** `i <= 10`, **incremento** `i++`. Es como una máquina que cuenta sola 🔄✨

**📝 Descripción:** El bucle `for` repite código un número específico de veces. Es perfecto cuando sabes cuántas iteraciones necesitas.

**⚡ Funcionalidad:** 
- Usar `for` para contar números
- Acumular suma de números
- Mostrar cada número en consola

**✅ Casos de prueba:**

| Input               | Expected Output |
| ------------------- | --------------- |
| `start=1`, `end=10` | `sum=55`        |
| `start=1`, `end=5`  | `sum=15`        |
| `start=5`, `end=10` | `sum=45`        |

**💻 Código base:**

```javascript
let start = -1; // Change this
let end = -1; // Change this
let sum = 0;
// Use for loop: for (let i = start; i <= end; i++)
// Inside loop: console.log(i) and sum += i
```

**💡 Tips:**
- 🔹 `for (let i = start; i <= end; i++)` estructura básica
- 🔹 `sum += i` acumula valores
- 🔹 `console.log(i)` muestra cada número

**🚀 Motivación:** ¡Fe cuenta hasta 10 en un segundo! Los bucles son superpoderes 🔢⚡

**📁 Carpeta:** `o1-magic-counter-for/`

---

## ✖️ Reto 2: Tabla de Multiplicar - For Simple

**📖 Historia:** Elliot 🤓 necesita la tabla del 8 (su número favorito) del 1 al 12. En lugar de calcular cada multiplicación manualmente, usa un bucle `for` que muestre cada resultado. ¡Es como tener una calculadora automática! 🧮✨

**📝 Descripción:** Usa un bucle `for` simple para generar una tabla de multiplicar. Muestra cada operación con `console.log()`.

**⚡ Funcionalidad:** 
- Usar `for` para multiplicar
- Mostrar cada operación en consola
- Acumular suma total

**✅ Casos de prueba:**

| Input               | Expected Output                     |
| ------------------- | ----------------------------------- |
| `table=8`, `upTo=3` | Consola: `8 x 1 = 8`, etc, `sum=24` |
| `table=5`, `upTo=4` | Suma total: `50`                    |
| `table=3`, `upTo=5` | Suma total: `45`                    |

**💻 Código base:**

```javascript
const table = 8;
let upTo = -1; // Change this
let sum = 0;
// Use for loop: for (let i = 1; i <= upTo; i++)
// Calculate: const result = table * i
// Show: console.log(`${table} x ${i} = ${result}`)
// Accumulate: sum += result
```

**💡 Tips:**
- 🔹 `const result = table * i` calcula
- 🔹 Template strings para mostrar bonito
- 🔹 `sum += result` acumula
- 🔹 Usa `console.log()` en cada iteración

**🚀 Motivación:** ¡Elliot genera su tabla favorita instantáneamente! 🧮🔥

**📁 Carpeta:** `o2-multiplication-table-for/`

---

## 🔄 Reto 3: While vs For - Misma Tarea, Diferente Estilo

**📖 Historia:** Mijael 👦 quiere hacer lo mismo que Fe (contar y sumar), pero con `while`. El bucle `while` repite MIENTRAS la condición sea verdadera. A diferencia del `for`, solo tiene la condición. Tú controlas el inicio y el incremento manualmente. ¡Ojo! Si olvidas incrementar, tendrás un loop infinito 🌀✨

**📝 Descripción:** El bucle `while` repite mientras la condición sea true. Debes manejar el contador manualmente.

**⚡ Funcionalidad:** 
- Usar `while` para contar números
- Acumular suma
- Incrementar contador manualmente (¡CRÍTICO!)

**✅ Casos de prueba:**

| Input               | Expected Output |
| ------------------- | --------------- |
| `start=1`, `end=10` | `sum=55`        |
| `start=1`, `end=5`  | `sum=15`        |
| `start=3`, `end=8`  | `sum=33`        |

**💻 Código base:**

```javascript
let start = -1; // Change this
let end = -1; // Change this
let sum = 0;
let current = start;
// Use while loop: while (current <= end)
// Inside loop: console.log(current) and sum += current
// CRITICAL: current++ at the end!
```

**💡 Tips:**
- 🔹 `while (current <= end)` condición
- 🔹 `sum += current` acumula
- 🔹 `current++` CRUCIAL para avanzar
- 🔹 ¡Olvidas `current++` = loop infinito! ⚠️

**🚀 Motivación:** ¡Mijael domina while! Mismo resultado, diferente herramienta 🔄💫

**📁 Carpeta:** `o3-counter-while-basic/`

---

## 🎯 Reto 4: Operadores Lógicos - AND, OR, NOT

**📖 Historia:** Fernanda 👧 organiza una fiesta. Para entrar necesitas: ser mayor de edad (18+) **Y** tener invitación. Para la zona VIP: ser VIP **O** tener pase especial. Si estás en la lista negra, **NO** puedes entrar. Usa operadores: `&&` (AND), `||` (OR), `!` (NOT) 🎉🔒

**📝 Descripción:** Los operadores lógicos combinan condiciones booleanas. Son fundamentales para decisiones complejas.

**⚡ Funcionalidad:** 
- Usar `&&` (ambas deben ser true)
- Usar `||` (al menos una true)
- Usar `!` (invierte el valor)

**✅ Casos de prueba:**

| Input                         | Expected Output              |
| ----------------------------- | ---------------------------- |
| `age=20`, `hasInvite=true`    | `canEnter=true` (AND)        |
| `age=16`, `hasInvite=true`    | `canEnter=false` (AND fails) |
| `isVIP=false`, `hasPass=true` | `canEnterVIP=true` (OR)      |
| `isBanned=true`               | `canEnterParty=false` (NOT)  |

**💻 Código base:**

```javascript
let age = -1; // Change this
let hasInvite = true; // Change this
let isVIP = false; // Change this
let hasPass = false; // Change this
let isBanned = false; // Change this

// AND: canEnter = age >= 18 && hasInvite
// OR: canEnterVIP = isVIP || hasPass
// NOT: canEnterParty = !isBanned
// Combine: const finalAccess = canEnter && canEnterParty
```

**💡 Tips:**
- 🔹 `&&` = AND (ambas deben ser true)
- 🔹 `||` = OR (al menos una true)
- 🔹 `!` = NOT (invierte true↔false)
- 🔹 `true && false` → false
- 🔹 `true || false` → true
- 🔹 `!true` → false

**🚀 Motivación:** ¡Fernanda controla su fiesta con lógica! Operadores para decisiones complejas 🧩🎉

**📁 Carpeta:** `o4-logical-operators/`

---

## 🚪 Reto 5: Busca el Número - Break para Salir

**📖 Historia:** Chocolate 🐕 busca su número favorito del 1 al 50. Tiene que revisar cada número, pero cuando lo encuentra, ¡ya no necesita seguir buscando! Usa `break` para salir del loop inmediatamente. Break es como una puerta de salida de emergencia 🎲🚪

**📝 Descripción:** Usa `break` para salir del loop cuando encuentres lo que buscas, sin continuar iteraciones innecesarias.

**⚡ Funcionalidad:** 
- Usar `for` o `while` para iterar
- Comparar números
- Usar `break` para salir al encontrar

**✅ Casos de prueba:**

| Input                    | Expected Output                |
| ------------------------ | ------------------------------ |
| `target=25`, `limit=50`  | `found=true`, `iterations=25`  |
| `target=5`, `limit=50`   | `found=true`, `iterations=5`   |
| `target=100`, `limit=50` | `found=false`, `iterations=50` |

**💻 Código base:**

```javascript
const target = -1; // Change this (number to find)
const limit = 50;
let found = false;
let iterations = 0;
// Use for loop: for (let i = 1; i <= limit; i++)
// Increment iterations
// Check if i === target
// If yes: found = true, break
// console.log each attempt
```

**💡 Tips:**
- 🔹 `break` sale del loop inmediatamente
- 🔹 Útil cuando encuentras lo que buscas
- 🔹 Ahorra iteraciones innecesarias
- 🔹 Cuenta solo hasta encontrar o llegar al límite

**🚀 Motivación:** ¡Chocolate encuentra su número y para! Break para salidas inteligentes 🎯🐕

**📁 Carpeta:** `o5-break-search/`

---

## ⏭️ Reto 6: Solo Números Pares - Continue para Saltar

**📖 Historia:** Amorosa 💖 debe contar del 1 al 20, pero SOLO quiere procesar números pares. No quiere perder tiempo con impares. Usa `continue` para SALTAR los impares sin romper el loop. Continue es como decir "siguiente, por favor" ⏭️✨

**📝 Descripción:** Usa `continue` para saltar iteraciones que no necesitas procesar, sin romper el loop.

**⚡ Funcionalidad:** 
- Usar `for` del 1 al límite
- Detectar números impares
- Usar `continue` para saltarlos
- Sumar solo pares

**✅ Casos de prueba:**

| Input      | Expected Output                    |
| ---------- | ---------------------------------- |
| `limit=10` | `sum=30` (2+4+6+8+10), `count=5`   |
| `limit=20` | `sum=110` (2+4+...+20), `count=10` |
| `limit=6`  | `sum=12` (2+4+6), `count=3`        |

**💻 Código base:**

```javascript
let limit = -1; // Change this
let sum = 0;
let count = 0;
// Use for loop: for (let i = 1; i <= limit; i++)
// Check if i is odd: if (i % 2 !== 0) continue
// If we reach here, it's even
// sum += i and count++
// console.log even numbers processed
```

**💡 Tips:**
- 🔹 `continue` salta a la siguiente iteración
- 🔹 `i % 2 !== 0` detecta impares
- 🔹 Después de `continue`, el código restante no se ejecuta
- 🔹 Solo los pares llegan al `sum += i`

**🚀 Motivación:** ¡Amorosa procesa solo lo que necesita! Continue para saltos elegantes ⏭️💫

**📁 Carpeta:** `o6-continue-even-numbers/`

---

## 🌟 Reto 7: Pirámide de Estrellas - For Anidado

**📖 Historia:** Elliot 🤓 quiere dibujar una pirámide de estrellas. Usa bucles anidados: el exterior controla las FILAS (altura), el interior controla las ESTRELLAS por fila. Fila 1 tiene 1 estrella, fila 2 tiene 2 estrellas, etc. ¡Es como construir con bloques de código! 🌟🏗️

**📝 Descripción:** Los bucles anidados son bucles dentro de bucles. El exterior itera, el interior itera por cada iteración del exterior.

**⚡ Funcionalidad:** 
- Usar bucle exterior para filas
- Usar bucle interior para estrellas
- Fila i tiene i estrellas
- Mostrar cada fila con `console.log()`

**✅ Casos de prueba:**

| Input      | Expected Output                           |
| ---------- | ----------------------------------------- |
| `height=3` | Consola: `*`, `**`, `***`, `totalStars=6` |
| `height=4` | Hasta `****`, `totalStars=10`             |
| `height=5` | Hasta `*****`, `totalStars=15`            |

**💻 Código base:**

```javascript
let height = -1; // Change this
let totalStars = 0;
// Use outer loop: for (let i = 1; i <= height; i++)
// Initialize row string: let row = ''
// Use inner loop: for (let j = 1; j <= i; j++)
// Build row: row += '*'
// Show row: console.log(row)
// Count total: totalStars += i
```

**💡 Tips:**
- 🔹 Exterior: `for (let i = 1; i <= height; i++)`
- 🔹 Interior: `for (let j = 1; j <= i; j++)`
- 🔹 Fila i tiene i estrellas
- 🔹 `totalStars` suma 1+2+3+...+height

**🚀 Motivación:** ¡Elliot dibuja pirámides con código! Bucles anidados = arte digital 🌟🎨

**📁 Carpeta:** `o7-star-pyramid-nested/`

---

## 🔍 Reto 8: Busca en Cuadrícula - While Anidado

**📖 Historia:** Fe 🌟 busca un cristal mágico escondido en una cuadrícula de 5x5 (25 posiciones). Usa `while` anidado: el exterior recorre filas, el interior recorre columnas. Debe buscar hasta encontrar el cristal O revisar toda la cuadrícula. Usa `break` para salir de ambos loops cuando lo encuentre 💎🗺️

**📝 Descripción:** Los bucles `while` también pueden anidarse. Debes manejar contadores para filas y columnas, y usar `break` con banderas.

**⚡ Funcionalidad:** 
- Usar `while` exterior para filas
- Usar `while` interior para columnas
- Buscar posición específica (fila, columna)
- Usar `break` y bandera para salir

**✅ Casos de prueba:**

| Input                          | Expected Output                        |
| ------------------------------ | -------------------------------------- |
| `targetRow=3`, `targetCol=2`   | `found=true`, `checked=12`             |
| `targetRow=1`, `targetCol=1`   | `found=true`, `checked=1`              |
| `targetRow=10`, `targetCol=10` | `found=false`, `checked=25` (all grid) |

**💻 Código base:**

```javascript
const gridSize = 5;
const targetRow = -1; // Change this
const targetCol = -1; // Change this
let row = 1;
let found = false;
let checked = 0;

// Outer while: while (row <= gridSize && !found)
// Inner while: let col = 1; while (col <= gridSize && !found)
// Check: if (row === targetRow && col === targetCol)
// If found: found = true, break inner
// Increment col++ and checked++
// After inner: increment row++
```

**💡 Tips:**
- 🔹 Usa `!found` en ambas condiciones para salir
- 🔹 Exterior maneja filas, interior maneja columnas
- 🔹 `checked` cuenta todas las posiciones revisadas
- 🔹 Reinicia `col = 1` en cada fila nueva

**🚀 Motivación:** ¡Fe encuentra el cristal en la cuadrícula! While anidado para búsquedas 2D 💎🔍

**📁 Carpeta:** `o8-grid-search-nested-while/`

---

## 📊 Resumen del Nivel 3 🎯

**🎉 Has completado:**
- ✅ For loop básico (contar y sumar)
- ✅ For con multiplicación (tabla)
- ✅ While básico (mismo objetivo que for)
- ✅ Operadores lógicos: `&&`, `||`, `!`
- ✅ Break para salir del loop
- ✅ Continue para saltar iteraciones
- ✅ For anidado (pirámide)
- ✅ While anidado con break (búsqueda 2D)

**⏰ Tiempo estimado:** 2-3 horas 

**🔜 Próximo nivel:** 🏗️ Nivel 4 - Arrays y Objects

---

💪 **¡Felicidades!** Fe, Mijael, Elliot, Fernanda, Chocolate y Amorosa están orgullosos. ¡Dominas loops y operadores lógicos! 🔁✨🚀
