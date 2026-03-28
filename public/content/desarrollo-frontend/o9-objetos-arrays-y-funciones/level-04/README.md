# 📦 Nivel 4: Arrays - Las Listas Mágicas ✨

```
                                  
   __ _ _ __ _ __ __ _ _   _ ___ 
  / _` | '__| '__/ _` | | | / __|
 | (_| | |  | | | (_| | |_| \__ \
  \__,_|_|  |_|  \__,_|\__, |___/
                        __/ |    
                       |___/     
```

> **🎯 Objetivo:** Dominar arrays desde cero: crear, modificar, buscar, iterar y usar operadores modernos 🚀

---

## 🎨 Reto 1: La Paleta Mágica - Crear, Modificar, Push y Pop

**📖 Historia:** Fernanda 🧙‍♀️ es una artista mágica que guarda colores en su paleta. Cada color tiene una posición (índice) que empieza en 0. Necesita crear su paleta con 3 colores: `'azul'`, `'morado'`, `'verde'`. Luego debe cambiar el morado por `'blanco'`, agregar `'negro'` al final con `push()` y quitar los últimos 2 colores con `pop()` 🎨✨

**📝 Descripción:** Tu programa debe crear una paleta de colores, modificar uno de ellos, agregar un color nuevo y finalmente eliminar los dos últimos para dejar solo 2 colores en la paleta.

**⚙️ Funcionalidades:**
- Crear array con 3 colores iniciales
- Modificar el color del índice 1
- Agregar color al final con `push()`
- Eliminar últimos 2 colores con `pop()`
- Validar resultado final con 2 colores

**✅ Casos de prueba:**

| Operación                                | Expected Output |
| ---------------------------------------- | --------------- |
| `colors.length === 2`                    | `true`          |
| `colors[0] === 'azul'`                   | `true`          |
| `colors[colors.length - 1] === 'blanco'` | `true`          |
| `colors[1] === 'blanco'`                 | `true`          |
| `typeof colors === 'object'`             | `true`          |

**💻 Código base:**

```javascript
const colors = []; // edit this line 🎨

// your code here 💻
// modify, push, pop

console.log(colors.length === 2);
console.log(colors[0] === 'azul');
console.log(colors[colors.length - 1] === 'blanco');
console.log(colors[1] === 'blanco');
console.log(typeof colors === 'object');
```

**💡 Tips:**
- 🔹 Arrays empiezan en índice 0
- 🔹 Último elemento: `arr[arr.length - 1]`
- 🔹 `push()` retorna nueva longitud
- 🔹 `pop()` retorna elemento removido
- 🔹 Modifica con: `arr[indice] = nuevoValor`

**🚀 Motivación:** ¡Domina lo esencial de arrays con la paleta de Fernanda! 🎨✨

**📁 Carpeta:** `o1-array-basics-palette/`

---

## 🚂 Reto 2: El Tren Expreso - Shift, Unshift e Includes

**📖 Historia:** Elliot ⚡ maneja el Tren Expreso con vagones: `['Vagón1', 'Vagón2', 'Vagón3']`. Debe agregar `'Locomotora'` al frente con `unshift()`, quitarla con `shift()`, agregar `'VIP'` al inicio y verificar con `includes()` si ciertos vagones existen antes de vender boletos 🚂💨

**📝 Descripción:** Tu programa debe gestionar vagones de un tren agregando y quitando elementos del inicio del array, y verificando si ciertos vagones existen para validar boletos.

**⚙️ Funcionalidades:**
- Agregar 'Locomotora' al inicio con `unshift()`
- Quitar primer vagón con `shift()`
- Agregar vagón 'VIP' al inicio
- Verificar existencia de vagones con `includes()`
- Validar que el tren tenga 4 vagones al final

**✅ Casos de prueba:**

| Operación                              | Expected Output |
| -------------------------------------- | --------------- |
| `train.length === 4`                   | `true`          |
| `train[0] === 'VIP'`                   | `true`          |
| `train.includes('VIP') === true`       | `true`          |
| `train.includes('Fantasma') === false` | `true`          |
| `Array.isArray(train) === true`        | `true`          |

**💻 Código base:**

```javascript
const train = []; // edit this line 🚂

// your code here 💻
// unshift, shift, includes

console.log(train.length === 4);
console.log(train[0] === 'VIP');
console.log(train.includes('VIP') === true);
console.log(train.includes('Fantasma') === false);
console.log(Array.isArray(train) === true);
```

**💡 Tips:**
- 🔹 `unshift()` agrega al inicio (índice 0)
- 🔹 `shift()` quita el primero y lo retorna
- 🔹 `includes()` retorna booleano
- 🔹 shift/unshift reordenan todos los índices

**🚀 Motivación:** ¡Elliot necesita tu ayuda para manejar el tren! 🚂⚡

**📁 Carpeta:** `o2-shift-unshift-train/`

---

## 🔍 Reto 3: Búsqueda y Corte - IndexOf y Slice

**📖 Historia:** Doky 🐕 es detective con números sospechosos: `[10, 25, 30, 25, 45, 30, 60]`. Debe encontrar la POSICIÓN del primer `25` con `indexOf()`, verificar si existe `100`, y extraer números del medio (índice 2 al 5) con `slice()` sin alterar el original 🔎

**📝 Descripción:** Tu programa debe buscar la posición de números específicos en una lista de sospechosos y extraer segmentos de la lista sin modificar el array original.

**⚙️ Funcionalidades:**
- Encontrar posición del primer 25 con `indexOf()`
- Buscar número inexistente (retorna -1)
- Extraer segmento del medio con `slice()`
- Extraer últimos 3 números con `slice()`
- Verificar que el array original no se modifique

**✅ Casos de prueba:**

| Operación                        | Expected Output |
| -------------------------------- | --------------- |
| `position25 === 1`               | `true`          |
| `position100 === -1`             | `true`          |
| `middleNumbers.length === 3`     | `true`          |
| `lastThree[0] === 45`            | `true`          |
| `typeof position25 === 'number'` | `true`          |

**💻 Código base:**

```javascript
const suspects = []; // edit this line 🔍

const position25 = -2; // your code here 💻
const position100 = -2; // your code here 💻
const middleNumbers = []; // your code here 💻 (slice 2 to 5)
const lastThree = []; // your code here 💻 (slice -3)

console.log(position25 === 1);
console.log(position100 === -1);
console.log(middleNumbers.length === 3);
console.log(lastThree[0] === 45);
console.log(typeof position25 === 'number');
```

**💡 Tips:**
- 🔹 `indexOf()` retorna `-1` si no encuentra
- 🔹 Solo encuentra la PRIMERA aparición
- 🔹 `slice(inicio, fin)` → fin NO incluido
- 🔹 `slice()` NO modifica el original

**🚀 Motivación:** ¡Doky necesita tus habilidades de detective! 🐕🔍

**📁 Carpeta:** `o3-indexof-slice-detective/`

---

## 🔄 Reto 4: Iteración vs Transformación - ForEach y Map

**📖 Historia:** Fe 👨‍🍳 tiene kilos de harina: `[5, 10, 15, 20]`. Con `forEach()` debe sumar todos (solo iterar). Con `map()` debe duplicar cada valor (crear nuevo array). ¡Map transforma y retorna, forEach solo recorre! 🍞

**📝 Descripción:** Tu programa debe procesar cantidades de harina de dos formas: calcular el total sumando todos los valores, y crear una nueva lista con cada cantidad duplicada.

**⚙️ Funcionalidades:**
- Sumar todos los kilos usando `forEach()`
- Duplicar cada cantidad usando `map()`
- Crear nuevo array sin modificar el original
- Validar que el array original permanezca intacto
- Comparar comportamiento de forEach vs map

**✅ Casos de prueba:**

| Operación                        | Expected Output |
| -------------------------------- | --------------- |
| `totalKilos === 50`              | `true`          |
| `doubledKilos[0] === 10`         | `true`          |
| `doubledKilos.length === 4`      | `true`          |
| `flourKilos[0] === 5`            | `true`          |
| `typeof totalKilos === 'number'` | `true`          |

**💻 Código base:**

```javascript
const flourKilos = []; // edit this line 🍞

let totalKilos = 0;
// your code here 💻 (forEach to sum)

const doubledKilos = []; // your code here 💻 (map to double)

console.log(totalKilos === 50);
console.log(doubledKilos[0] === 10);
console.log(doubledKilos.length === 4);
console.log(flourKilos[0] === 5);
console.log(typeof totalKilos === 'number');
```

**💡 Tips:**
- 🔹 `forEach()` NO retorna nada
- 🔹 `map()` SÍ retorna nuevo array
- 🔹 Usa forEach para logs, sumas
- 🔹 Usa map para transformar

**🚀 Motivación:** ¡Fe necesita procesar su harina! 👨‍🍳🍞

**📁 Carpeta:** `o4-foreach-map-factory/`

---

## 🎯 Reto 5: Filtrar y Encontrar - Filter y Find

**📖 Historia:** Amorosa 💖 tiene niveles de poder: `[45, 78, 92, 60, 88, 55, 95]`. Con `filter()` debe encontrar TODOS los guardianes con poder >70 (élite). Con `find()` debe encontrar el PRIMERO con poder >90 (legendario). ¡Filter devuelve múltiples, find devuelve solo uno! 🛡️

**📝 Descripción:** Tu programa debe clasificar guardianes por nivel de poder: obtener todos los élite que superen 70 de poder, y encontrar el primer legendario que supere 90.

**⚙️ Funcionalidades:**
- Filtrar TODOS los guardianes élite (>70) con `filter()`
- Encontrar el PRIMER guardián legendario (>90) con `find()`
- Crear nuevo array con los filtrados
- Retornar un solo elemento con find
- Validar que el array original no cambie

**✅ Casos de prueba:**

| Operación                                | Expected Output |
| ---------------------------------------- | --------------- |
| `eliteGuardians.length === 4`            | `true`          |
| `firstLegendary === 92`                  | `true`          |
| `Array.isArray(eliteGuardians) === true` | `true`          |
| `guardians.length === 7`                 | `true`          |
| `typeof firstLegendary === 'number'`     | `true`          |

**💻 Código base:**

```javascript
const guardians = []; // edit this line 🛡️

const eliteGuardians = []; // your code here 💻 (filter >70)
const firstLegendary = null; // your code here 💻 (find >90)

console.log(eliteGuardians.length === 4);
console.log(firstLegendary === 92);
console.log(Array.isArray(eliteGuardians) === true);
console.log(guardians.length === 7);
console.log(typeof firstLegendary === 'number');
```

**💡 Tips:**
- 🔹 `filter()` retorna array (puede ser `[]`)
- 🔹 `find()` retorna elemento o `undefined`
- 🔹 Filter: obtiene MÚLTIPLES elementos
- 🔹 Find: obtiene PRIMER elemento que cumple
- 🔹 Ninguno modifica el original

**🚀 Motivación:** ¡Amorosa necesita clasificar guardianes! 💖🛡️

**📁 Carpeta:** `o5-filter-find-guardians/`

---

## 🌟 Reto 6: Copiar y Combinar - Spread Operator

**📖 Historia:** Mijael tiene `['espada', 'escudo']`, Chocolate tiene `['arco', 'flecha']`. Con spread `...` deben copiar y combinar arrays sin destruir los originales. También agregar `'hacha'` al inicio y `'lanza'` al final. ¡Magia inmutable! ⚡

**📝 Descripción:** Tu programa debe crear copias de arrays y combinarlos sin modificar los originales, usando el operador spread para expansión de elementos.

**⚙️ Funcionalidades:**
- Crear copia de seguridad con spread
- Combinar dos clanes en uno solo
- Agregar elemento al inicio de un array
- Validar que los originales no se modifiquen
- Demostrar inmutabilidad con spread

**✅ Casos de prueba:**

| Operación                            | Expected Output |
| ------------------------------------ | --------------- |
| `backupClan.length === 2`            | `true`          |
| `unitedClan.length === 4`            | `true`          |
| `clanWithAxe[0] === 'hacha'`         | `true`          |
| `mijaelClan.length === 2`            | `true`          |
| `Array.isArray(unitedClan) === true` | `true`          |

**💻 Código base:**

```javascript
const mijaelClan = []; // edit this line ⚔️
const chocolateClan = []; // edit this line 🏹

const backupClan = []; // your code here 💻 (spread copy)
const unitedClan = []; // your code here 💻 (combine both)
const clanWithAxe = []; // your code here 💻 (add 'hacha' at start)

console.log(backupClan.length === 2);
console.log(unitedClan.length === 4);
console.log(clanWithAxe[0] === 'hacha');
console.log(mijaelClan.length === 2);
console.log(Array.isArray(unitedClan) === true);
```

**💡 Tips:**
- 🔹 `...` expande elementos del array
- 🔹 NO modifica originales (inmutable)
- 🔹 Crea copias rápidamente
- 🔹 Combina múltiples arrays fácil

**🚀 Motivación:** ¡Los clanes se unen sin perder identidad! 🌟✨

**📁 Carpeta:** `o6-spread-clan-fusion/`

---

## 🎁 Reto 7: Extracción Elegante - Destructuring

**📖 Historia:** Elliot ⚡ encontró tesoros: `['diamante', 'rubí', 'esmeralda', 'zafiro', 'perla']`. En vez de usar índices, usará destructuring para extraer en variables. También aprenderá a saltar elementos y capturar el resto con `...rest`. ¡Extracción mágica! 💎

**📝 Descripción:** Tu programa debe extraer valores del array directamente en variables usando destructuring, capturar múltiples elementos con rest, e intercambiar valores entre variables.

**⚙️ Funcionalidades:**
- Extraer primeros elementos en variables individuales
- Capturar elementos restantes con `...rest`
- Saltar elementos usando comas
- Intercambiar valores de dos variables (swap)
- Validar tipos de datos extraídos

**✅ Casos de prueba:**

| Operación                            | Expected Output |
| ------------------------------------ | --------------- |
| `first === 'diamante'`               | `true`          |
| `restJewels.length === 4`            | `true`          |
| `a === 10 && b === 5`                | `true`          |
| `typeof first === 'string'`          | `true`          |
| `Array.isArray(restJewels) === true` | `true`          |

**💻 Código base:**

```javascript
const treasures = []; // edit this line 💎

const first = ''; // your code here 💻 (destructure)
const second = ''; // your code here 💻
const restJewels = []; // your code here 💻 ([firstJewel, ...restJewels])

let a = 5;
let b = 10;
// your code here 💻 (swap using destructuring)

console.log(first === 'diamante');
console.log(restJewels.length === 4);
console.log(a === 10 && b === 5);
console.log(typeof first === 'string');
console.log(Array.isArray(restJewels) === true);
```

**💡 Tips:**
- 🔹 `[a, b] = array` extrae en variables
- 🔹 `[a, ...rest]` captura el resto
- 🔹 `[, , c]` usa comas para saltar
- 🔹 `[a, b] = [b, a]` swap elegante

**🚀 Motivación:** 🎉 ¡PROYECTO FINAL! Elliot domina la extracción ⚡💎✨

**📁 Carpeta:** `o7-destructuring-treasure/`

---

## 📊 Resumen del Nivel 4 🎯

**🎉 Has completado:**
- ✅ **Arrays básicos:** Crear, acceder, `.length`, modificar, `push()`, `pop()`
- ✅ **Inicio del array:** `shift()`, `unshift()`, `includes()`
- ✅ **Búsqueda:** `indexOf()`, `slice()`
- ✅ **Iteración:** `forEach()` vs `map()`
- ✅ **Filtrado:** `filter()` vs `find()`
- ✅ **Operadores modernos:** Spread `...`, Destructuring `[a, b]`

**⏰ Tiempo estimado:** 2-3 horas 

**🎓 Conceptos clave:**
- Arrays son colecciones ordenadas (índices desde 0)
- Métodos que modifican: push, pop, shift, unshift
- Métodos inmutables: slice, map, filter, includes, indexOf
- forEach NO retorna, map SÍ retorna
- filter retorna array, find retorna elemento
- Spread crea copias, destructuring extrae valores

**🔜 Próximo nivel:** 🏛️ Nivel 5 - Objects (Objetos)

---

💪 **¡Felicidades!** Fernanda, Mijael, Fe, Elliot, Chocolate, Amorosa y Doky están orgullosos. ¡Eres un maestro de arrays! 🏆✨🚀
