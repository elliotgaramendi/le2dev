# ⚡ Nivel 6: Funciones - El Poder del Código Reutilizable ✨

```
  ███████╗██╗   ██╗███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
  ██╔════╝██║   ██║████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
  █████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
  ██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
  ██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
  ╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
```

> **🎯 Objetivo:** Dominar funciones desde cero: crear, usar parámetros, arrow functions y técnicas avanzadas 🚀

---

## 🎯 Reto 1: Calculadora Mágica - Funciones Básicas

**📖 Historia:** Fernanda 🧙‍♀️ necesita una calculadora para sus pociones. Debe crear funciones que sumen, resten, multipliquen y dividan. Aprenderá a crear funciones con `function`, usar parámetros, retornar valores y llamarlas múltiples veces 🧮✨

**📝 Descripción:** Tu programa debe crear 4 funciones básicas de calculadora: `sum(a, b)` que retorna la suma, `subtract(a, b)` que retorna la resta, `multiply(a, b)` que retorna la multiplicación, y `divide(a, b)` que retorna la división.

**⚙️ Funcionalidades:**
- Crear función `sum(a, b)` que retorna `a + b`
- Crear función `subtract(a, b)` que retorna `a - b`
- Crear función `multiply(a, b)` que retorna `a * b`
- Crear función `divide(a, b)` que retorna `a / b`
- Llamar funciones con diferentes valores

**✅ Casos de prueba:**

| Input             | Expected Output |
| ----------------- | --------------- |
| `sum(10, 5)`      | `15`            |
| `subtract(10, 5)` | `5`             |
| `multiply(10, 5)` | `50`            |
| `divide(10, 5)`   | `2`             |
| `typeof sum`      | `'function'`    |

**💻 Código base:**

```javascript
// your code here 💻
// create sum, subtract, multiply, divide functions

console.log(sum(10, 5) === 15);
console.log(subtract(10, 5) === 5);
console.log(multiply(10, 5) === 50);
console.log(divide(10, 5) === 2);
console.log(typeof sum === 'function');
```

**💡 Tips:**
- 🔹 Función básica: `function nombre(param) { return valor; }`
- 🔹 Parámetros: variables que recibe la función
- 🔹 `return` devuelve el resultado
- 🔹 Llamar función: `nombre(argumentos)`

**🚀 Motivación:** ¡Fernanda calcula sus pociones con funciones! 🧮✨

**📁 Carpeta:** `o1-magic-calculator-functions/`

---

## 🏹 Reto 2: Transformador de Poder - Arrow Functions

**📖 Historia:** Elliot ⚡ descubrió arrow functions, la sintaxis moderna de JavaScript. Debe crear funciones flecha para: duplicar un número `double(x)`, calcular cuadrado `square(x)`, saludar `greet(name)`, y verificar si es adulto `isAdult(age)`. ¡Más cortas y elegantes! 🎯

**📝 Descripción:** Tu programa debe crear 4 arrow functions: `double` que duplica un número, `square` que calcula el cuadrado, `greet` que retorna saludo con el nombre, e `isAdult` que retorna `true` si edad >= 18.

**⚙️ Funcionalidades:**
- Crear `double` arrow function: `(x) => x * 2`
- Crear `square` arrow function: `(x) => x * x`
- Crear `greet` arrow function: `(name) => 'Hola ' + name`
- Crear `isAdult` arrow function: `(age) => age >= 18`
- Demostrar sintaxis moderna de arrow functions

**✅ Casos de prueba:**

| Input             | Expected Output |
| ----------------- | --------------- |
| `double(7)`       | `14`            |
| `square(5)`       | `25`            |
| `greet('Elliot')` | `'Hola Elliot'` |
| `isAdult(20)`     | `true`          |
| `typeof double`   | `'function'`    |

**💻 Código base:**

```javascript
// your code here 💻
// create double, square, greet, isAdult arrow functions

console.log(double(7) === 14);
console.log(square(5) === 25);
console.log(greet('Elliot') === 'Hola Elliot');
console.log(isAdult(20) === true);
console.log(typeof double === 'function');
```

**💡 Tips:**
- 🔹 Arrow function: `const nombre = (param) => expresion`
- 🔹 Return implícito: `x => x * 2` (sin llaves ni return)
- 🔹 Un parámetro: `x => ...` (sin paréntesis)
- 🔹 Múltiples líneas: `() => { ... return ... }`

**🚀 Motivación:** ¡Elliot domina la sintaxis moderna! ⚡🏹

**📁 Carpeta:** `o2-power-transformer-arrows/`

---

## 🎁 Reto 3: Laboratorio de Parámetros - Default Parameters

**📖 Historia:** Doky 🐕 tiene un laboratorio donde crea experimentos. Algunas veces olvida pasar todos los valores. Necesita funciones con valores por defecto: `createPotion(name, power = 50)`, `createHero(name, level = 1, active = true)`. ¡Los parámetros opcionales salvan el día! 🧪

**📝 Descripción:** Tu programa debe crear funciones con parámetros por defecto (default parameters): `createPotion(name, power = 50)` que retorna objeto con name y power, y `createHero(name, level = 1, active = true)` que retorna objeto con las 3 propiedades.

**⚙️ Funcionalidades:**
- Crear `createPotion(name, power = 50)` con default parameter
- Crear `createHero(name, level = 1, active = true)` con múltiples defaults
- Llamar funciones sin pasar todos los argumentos
- Retornar objetos desde las funciones
- Demostrar que defaults funcionan correctamente

**✅ Casos de prueba:**

| Input                             | Expected Output |
| --------------------------------- | --------------- |
| `createPotion('Fuego').power`     | `50`            |
| `createPotion('Hielo', 80).power` | `80`            |
| `createHero('Doky').level`        | `1`             |
| `createHero('Doky', 10).active`   | `true`          |
| `typeof createPotion`             | `'function'`    |

**💻 Código base:**

```javascript
// your code here 💻
// create createPotion and createHero with default parameters

console.log(createPotion('Fuego').power === 50);
console.log(createPotion('Hielo', 80).power === 80);
console.log(createHero('Doky').level === 1);
console.log(createHero('Doky', 10).active === true);
console.log(typeof createPotion === 'function');
```

**💡 Tips:**
- 🔹 Default parameter: `(param = valorDefault) => {}`
- 🔹 Se usa cuando no se pasa argumento
- 🔹 Puede tener múltiples defaults
- 🔹 `return { prop: valor }` retorna objeto

**🚀 Motivación:** ¡Doky crea experimentos con defaults! 🐕🧪

**📁 Carpeta:** `o3-default-params-lab/`

---

## 📦 Reto 4: Acumulador Infinito - Rest Parameters

**📖 Historia:** Amorosa 💖 necesita sumar cualquier cantidad de números sin saber cuántos serán. Con rest parameters `...` puede recibir todos los argumentos en un array: `sumAll(...numbers)`. Debe crear `sumAll`, `multiplyAll` y `getMax` que funcionen con infinitos números 🔢

**📝 Descripción:** Tu programa debe crear funciones con rest parameters que acepten cantidad variable de argumentos: `sumAll(...nums)` suma todos, `multiplyAll(...nums)` multiplica todos, `getMax(...nums)` retorna el mayor.

**⚙️ Funcionalidades:**
- Crear `sumAll(...nums)` que suma todos los números recibidos
- Crear `multiplyAll(...nums)` que multiplica todos
- Crear `getMax(...nums)` que usa `Math.max()` con spread
- Demostrar que funcionan con 2, 3, 4+ argumentos
- Usar rest parameters `...` para capturar todos los args

**✅ Casos de prueba:**

| Input                   | Expected Output |
| ----------------------- | --------------- |
| `sumAll(1, 2, 3)`       | `6`             |
| `sumAll(5, 10, 15, 20)` | `50`            |
| `multiplyAll(2, 3, 4)`  | `24`            |
| `getMax(10, 5, 20, 15)` | `20`            |
| `typeof sumAll`         | `'function'`    |

**💻 Código base:**

```javascript
// your code here 💻
// create sumAll, multiplyAll, getMax with rest parameters

console.log(sumAll(1, 2, 3) === 6);
console.log(sumAll(5, 10, 15, 20) === 50);
console.log(multiplyAll(2, 3, 4) === 24);
console.log(getMax(10, 5, 20, 15) === 20);
console.log(typeof sumAll === 'function');
```

**💡 Tips:**
- 🔹 Rest parameters: `(...nums) => {}`
- 🔹 `nums` es un array con todos los args
- 🔹 Usar loop o reduce para procesar
- 🔹 `Math.max(...array)` con spread

**🚀 Motivación:** ¡Amorosa suma infinitos números! 💖🔢

**📁 Carpeta:** `o4-infinite-accumulator-rest/`

---

## 🔄 Reto 5: Procesador de Arrays - Funciones con Arrays

**📖 Historia:** Fe 👨‍🍳 tiene listas de ingredientes y necesita procesarlas. Debe crear funciones que trabajen con arrays: `filterEven(numbers)` filtra pares, `doubleValues(numbers)` duplica cada valor, `getNames(heroes)` extrae nombres de objetos. ¡Combina funciones + arrays! 🍳

**📝 Descripción:** Tu programa debe crear funciones que procesen arrays: `filterEven(numbers)` retorna solo números pares usando `filter()`, `doubleValues(numbers)` duplica cada número usando `map()`, `getNames(heroes)` extrae la propiedad `name` de cada héroe.

**⚙️ Funcionalidades:**
- Crear `filterEven(numbers)` que usa `filter()` para pares
- Crear `doubleValues(numbers)` que usa `map()` para duplicar
- Crear `getNames(heroes)` que usa `map()` para extraer nombres
- Combinar funciones con métodos de arrays
- Demostrar procesamiento funcional de datos

**✅ Casos de prueba:**

| Input                                         | Expected Output |
| --------------------------------------------- | --------------- |
| `filterEven([1, 2, 3, 4, 5, 6])`              | `[2, 4, 6]`     |
| `doubleValues([5, 10, 15]).length`            | `3`             |
| `doubleValues([5, 10, 15])[0]`                | `10`            |
| `getNames([{name: 'Fe'}, {name: 'Doky'}])[1]` | `'Doky'`        |
| `typeof filterEven`                           | `'function'`    |

**💻 Código base:**

```javascript
// your code here 💻
// create filterEven, doubleValues, getNames functions

const numbers = [1, 2, 3, 4, 5, 6];
const values = [5, 10, 15];
const heroes = [{ name: 'Fe' }, { name: 'Doky' }];

console.log(filterEven(numbers).length === 3);
console.log(doubleValues(values).length === 3);
console.log(doubleValues(values)[0] === 10);
console.log(getNames(heroes)[1] === 'Doky');
console.log(typeof filterEven === 'function');
```

**💡 Tips:**
- 🔹 `filter()` retorna nuevo array filtrado
- 🔹 `map()` retorna nuevo array transformado
- 🔹 Arrow functions en callbacks: `.filter(x => x % 2 === 0)`
- 🔹 `array.map(obj => obj.prop)` extrae propiedades

**🚀 Motivación:** 🎉 ¡PROYECTO FINAL! Fe procesa datos como un chef ⚡👨‍🍳✨

**📁 Carpeta:** `o5-array-processor-functions/`

---

## 📊 Resumen del Nivel 6 🎯

**🎉 Has completado:**
- ✅ **Funciones básicas:** `function`, parámetros, `return`
- ✅ **Arrow functions:** `() => {}`, return implícito
- ✅ **Default parameters:** `(x = 10) => {}`
- ✅ **Rest parameters:** `(...nums) => {}`
- ✅ **Funciones + Arrays:** `filter()`, `map()` con callbacks

**⏰ Tiempo estimado:** 1.5-2 horas 

**🎓 Conceptos clave:**
- Funciones reutilizan código
- Arrow functions son la sintaxis moderna
- Default parameters dan valores por defecto
- Rest parameters capturan infinitos argumentos
- Funciones pueden recibir y retornar cualquier tipo
- Callbacks: funciones dentro de funciones

**🔜 Próximo nivel:** 🎨 Nivel 7 - DOM (Manipular la Página)

---

💪 **¡Felicidades!** Fernanda, Mijael, Fe, Elliot, Chocolate, Amorosa y Doky están orgullosos. ¡Eres un maestro de funciones! 🏆✨🚀
