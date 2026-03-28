# 🏛️ Nivel 5: Objects - Estructuras de Datos Mágicas ✨

```
   ██████╗ ██████╗      ██╗███████╗ ██████╗████████╗███████╗
  ██╔═══██╗██╔══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝
  ██║   ██║██████╔╝     ██║█████╗  ██║        ██║   ███████╗
  ██║   ██║██╔══██╗██   ██║██╔══╝  ██║        ██║   ╚════██║
  ╚██████╔╝██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║
   ╚═════╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝
```

> **🎯 Objetivo:** Dominar objetos desde cero: crear, manipular propiedades, usar métodos útiles y operadores modernos 🚀

---

## 👤 Reto 1: Ficha de Héroe - Objects Básicos

**📖 Historia:** Fernanda 🧙‍♀️ necesita crear fichas para los héroes de su reino. Cada ficha tiene nombre, poder y nivel. Debe crear la ficha de 'Elliot' con poder 'rayo' y nivel 92, luego acceder a sus propiedades y modificar el nivel a 95 ⚡

**📝 Descripción:** Tu programa debe crear un objeto que represente un héroe con sus características, acceder a sus propiedades usando dot notation y modificar valores.

**⚙️ Funcionalidades:**
- Crear objeto con propiedades: nombre, poder, nivel
- Acceder a propiedades con dot notation
- Modificar valor de una propiedad
- Agregar nueva propiedad al objeto
- Validar tipos de datos del objeto

**✅ Casos de prueba:**

| Input         | Expected Output |
| ------------- | --------------- |
| `hero.name`   | `'Elliot'`      |
| `hero.power`  | `'rayo'`        |
| `hero.level`  | `95`            |
| `hero.active` | `true`          |
| `typeof hero` | `'object'`      |

**💻 Código base:**

```javascript
const hero = {}; // edit this line 🦸

// your code here 💻
// create properties, modify level, add active

console.log(hero.name === 'Elliot');
console.log(hero.power === 'rayo');
console.log(hero.level === 95);
console.log(hero.active === true);
console.log(typeof hero === 'object');
```

**💡 Tips:**
- 🔹 Object literal: `{ clave: valor }`
- 🔹 Dot notation: `obj.propiedad`
- 🔹 Modificar: `obj.propiedad = nuevoValor`
- 🔹 Agregar: `obj.nuevaPropiedad = valor`

**🚀 Motivación:** ¡Crea la primera ficha de héroe del reino! 👤✨

**📁 Carpeta:** `o1-hero-card-objects-basics/`

---

## 🔑 Reto 2: Acceso Dinámico - Bracket Notation

**📖 Historia:** Doky 🐕 tiene un cofre mágico con propiedades: `{ oro: 100, plata: 50, bronce: 25 }`. Mijael quiere saber cuánto hay de un metal específico usando una variable. Necesita bracket notation `[]` para acceder dinámicamente 💰

**📝 Descripción:** Tu programa debe crear un cofre de tesoro y acceder a sus propiedades usando bracket notation, permitiendo acceso dinámico con variables.

**⚙️ Funcionalidades:**
- Crear objeto con 3 propiedades de metales
- Acceder con bracket notation `obj['propiedad']`
- Usar variable para acceso dinámico
- Modificar valor con bracket notation
- Agregar nueva propiedad dinámicamente

**✅ Casos de prueba:**

| Input                                  | Expected Output |
| -------------------------------------- | --------------- |
| `chest['oro']`                         | `100`           |
| `chest[metal]` donde `metal='plata'`   | `50`            |
| `chest['bronce']` después de modificar | `30`            |
| `chest['diamante']` después de agregar | `200`           |
| `Object.keys(chest).length`            | `4`             |

**💻 Código base:**

```javascript
const chest = {}; // edit this line 💰

const metal = 'plata'; // variable for dynamic access

// your code here 💻
// create properties, modify bronce, add diamante

console.log(chest['oro'] === 100);
console.log(chest[metal] === 50);
console.log(chest['bronce'] === 30);
console.log(chest['diamante'] === 200);
console.log(Object.keys(chest).length === 4);
```

**💡 Tips:**
- 🔹 Bracket notation: `obj['propiedad']`
- 🔹 Con variable: `obj[variable]`
- 🔹 Útil para nombres dinámicos
- 🔹 Puede usar espacios: `obj['mi propiedad']`

**🚀 Motivación:** ¡Doky necesita gestionar su cofre mágico! 💰🐕

**📁 Carpeta:** `o2-dynamic-chest-bracket-notation/`

---

## 🏰 Reto 3: Reino Anidado - Nested Objects

**📖 Historia:** Amorosa 💖 gestiona un reino con estructura compleja: `{ name: 'Arendelle', king: { name: 'Fe', age: 35 }, population: 5000 }`. Debe acceder a propiedades anidadas y modificar la edad del rey 👑

**📝 Descripción:** Tu programa debe trabajar con objetos dentro de objetos (anidados), accediendo a propiedades profundas y modificándolas.

**⚙️ Funcionalidades:**
- Crear objeto con propiedades anidadas
- Acceder a propiedades de segundo nivel
- Modificar propiedades anidadas
- Agregar nueva propiedad al objeto anidado
- Validar estructura del reino

**✅ Casos de prueba:**

| Input                | Expected Output |
| -------------------- | --------------- |
| `kingdom.name`       | `'Arendelle'`   |
| `kingdom.king.name`  | `'Fe'`          |
| `kingdom.king.age`   | `36`            |
| `kingdom.king.power` | `'fuego'`       |
| `kingdom.population` | `5000`          |

**💻 Código base:**

```javascript
const kingdom = {}; // edit this line 🏰

// your code here 💻
// create nested structure, modify age, add power

console.log(kingdom.name === 'Arendelle');
console.log(kingdom.king.name === 'Fe');
console.log(kingdom.king.age === 36);
console.log(kingdom.king.power === 'fuego');
console.log(kingdom.population === 5000);
```

**💡 Tips:**
- 🔹 Anidado: `{ prop: { subprop: valor } }`
- 🔹 Acceso: `obj.prop.subprop`
- 🔹 Modificar: `obj.prop.subprop = nuevo`
- 🔹 Puede tener múltiples niveles

**🚀 Motivación:** ¡Amorosa organiza la estructura de su reino! 🏰💖

**📁 Carpeta:** `o3-nested-kingdom-objects/`

---

## 📋 Reto 4: Lista de Héroes - Array de Objects

**📖 Historia:** Chocolate 🐕 tiene una lista de héroes: `[{ name: 'Elliot', level: 92 }, { name: 'Fernanda', level: 88 }]`. Debe agregar un nuevo héroe, acceder al nivel del primero, y contar cuántos héroes hay 🦸

**📝 Descripción:** Tu programa debe trabajar con arrays que contienen objetos, combinando lo aprendido de arrays y objects.

**⚙️ Funcionalidades:**
- Crear array con 2 objetos de héroes
- Acceder a propiedades de objetos dentro del array
- Agregar nuevo héroe con `push()`
- Contar total de héroes
- Validar estructura de datos

**✅ Casos de prueba:**

| Input                   | Expected Output |
| ----------------------- | --------------- |
| `heroes.length`         | `3`             |
| `heroes[0].name`        | `'Elliot'`      |
| `heroes[0].level`       | `92`            |
| `heroes[2].name`        | `'Mijael'`      |
| `Array.isArray(heroes)` | `true`          |

**💻 Código base:**

```javascript
const heroes = []; // edit this line 🦸

// your code here 💻
// create array with 2 heroes, add third hero

console.log(heroes.length === 3);
console.log(heroes[0].name === 'Elliot');
console.log(heroes[0].level === 92);
console.log(heroes[2].name === 'Mijael');
console.log(Array.isArray(heroes) === true);
```

**💡 Tips:**
- 🔹 Array de objects: `[{}, {}]`
- 🔹 Acceso: `array[indice].propiedad`
- 🔹 Push object: `array.push({ prop: valor })`
- 🔹 Combina arrays + objects

**🚀 Motivación:** ¡Chocolate gestiona su equipo de héroes! 🐕🦸

**📁 Carpeta:** `o4-heroes-list-array-objects/`

---

## 🔄 Reto 5: Copiar y Combinar - Spread y Destructuring

**📖 Historia:** Fe 👨‍🍳 tiene dos recetas: `{ name: 'Pizza', time: 30 }` y `{ temp: 200, servings: 4 }`. Debe combinarlas con spread `{...obj}` y extraer propiedades con destructuring. También debe crear copia de una receta 📝

**📝 Descripción:** Tu programa debe usar operadores modernos para copiar objetos, combinarlos sin modificar originales, y extraer propiedades en variables.

**⚙️ Funcionalidades:**
- Crear dos objetos con propiedades diferentes
- Combinar objetos con spread operator
- Crear copia de objeto con spread
- Extraer propiedades con destructuring
- Validar que originales no se modifiquen

**✅ Casos de prueba:**

| Input                            | Expected Output |
| -------------------------------- | --------------- |
| `fullRecipe.name`                | `'Pizza'`       |
| `fullRecipe.temp`                | `200`           |
| `Object.keys(fullRecipe).length` | `4`             |
| `recipeName` (destructured)      | `'Pizza'`       |
| `recipe1.name` (original)        | `'Pizza'`       |

**💻 Código base:**

```javascript
const recipe1 = {}; // edit this line 📝
const recipe2 = {}; // edit this line 📝

const fullRecipe = {}; // your code here 💻 (spread combine)
const recipeCopy = {}; // your code here 💻 (spread copy)

const recipeName = ''; // your code here 💻 (destructure name)
const cookTime = 0; // your code here 💻 (destructure time)

console.log(fullRecipe.name === 'Pizza');
console.log(fullRecipe.temp === 200);
console.log(Object.keys(fullRecipe).length === 4);
console.log(recipeName === 'Pizza');
console.log(recipe1.name === 'Pizza');
```

**💡 Tips:**
- 🔹 Spread: `{ ...obj1, ...obj2 }`
- 🔹 Copia: `{ ...obj }`
- 🔹 Destructuring: `const { prop } = obj`
- 🔹 Renombrar: `const { old: nuevo } = obj`

**🚀 Motivación:** ¡Fe combina recetas con operadores modernos! 👨‍🍳📝

**📁 Carpeta:** `o5-spread-destructure-recipes/`

---

## 💾 Reto 6: Guardar y Recuperar - JSON

**📖 Historia:** Elliot ⚡ necesita guardar datos de su héroe: `{ name: 'Elliot', power: 'rayo', level: 92 }`. Debe convertirlo a texto con `JSON.stringify()` para guardarlo, y luego recuperarlo con `JSON.parse()`. ¡Persistencia de datos! 💿

**📝 Descripción:** Tu programa debe convertir objetos a formato JSON (texto) para almacenarlos, y parsear strings JSON de vuelta a objetos.

**⚙️ Funcionalidades:**
- Crear objeto con datos de héroe
- Convertir objeto a string con `JSON.stringify()`
- Parsear string de vuelta a objeto con `JSON.parse()`
- Acceder a propiedades del objeto recuperado
- Validar tipos durante el proceso

**✅ Casos de prueba:**

| Input                         | Expected Output |
| ----------------------------- | --------------- |
| `typeof heroJSON`             | `'string'`      |
| `heroJSON.includes('Elliot')` | `true`          |
| `typeof recoveredHero`        | `'object'`      |
| `recoveredHero.name`          | `'Elliot'`      |
| `recoveredHero.level`         | `92`            |

**💻 Código base:**

```javascript
const hero = {}; // edit this line ⚡

const heroJSON = ''; // your code here 💻 (stringify)
const recoveredHero = null; // your code here 💻 (parse heroJSON)

console.log(typeof heroJSON === 'string');
console.log(heroJSON.includes('Elliot') === true);
console.log(typeof recoveredHero === 'object');
console.log(recoveredHero.name === 'Elliot');
console.log(recoveredHero.level === 92);
```

**💡 Tips:**
- 🔹 `JSON.stringify(obj)` → string
- 🔹 `JSON.parse(string)` → object
- 🔹 Útil para localStorage
- 🔹 JSON usa comillas dobles

**🚀 Motivación:** 🎉 ¡PROYECTO FINAL! Elliot aprende persistencia ⚡💾✨

**📁 Carpeta:** `o6-json-save-hero/`

---

## 📊 Resumen del Nivel 5 🎯

**🎉 Has completado:**
- ✅ **Objects básicos:** Crear `{}`, dot notation, modificar
- ✅ **Bracket notation:** Acceso dinámico con `[]`
- ✅ **Objects anidados:** Estructuras profundas
- ✅ **Array de objects:** Combinar arrays + objects
- ✅ **Operadores modernos:** Spread `{...obj}`, Destructuring `{ prop }`
- ✅ **JSON:** `stringify()` y `parse()`

**⏰ Tiempo estimado:** 2 horas 

**🎓 Conceptos clave:**
- Objects almacenan pares clave-valor
- Dot notation para nombres fijos
- Bracket notation para acceso dinámico
- Objects pueden anidarse infinitamente
- Spread crea copias inmutables
- JSON convierte objects ↔ strings

**🔜 Próximo nivel:** ⚡ Nivel 6 - Funciones

---

💪 **¡Felicidades!** Fernanda, Mijael, Fe, Elliot, Chocolate, Amorosa y Doky están orgullosos. ¡Eres un maestro de objects! 🏆✨🚀
