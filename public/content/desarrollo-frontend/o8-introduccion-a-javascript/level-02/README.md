# 🔧 Nivel 2: Transformaciones y Lógica Mágica ⚡

```
  _                            __                         
 | |                          / _|                        
 | |_ _ __ __ _ _ __  ___    | |_ ___  _ __ _ __ ___  ___
 | __| '__/ _` | '_ \/ __|   |  _/ _ \| '__| '_ ` _ \/ __|
 | |_| | | (_| | | | \__ \   | || (_) | |  | | | | | \__ \
  \__|_|  \__,_|_| |_|___/   |_| \___/|_|  |_| |_| |_|___/
                                                            
```

> **🎯 Objetivo:** Dominar conversiones de tipos, operadores avanzados, comparaciones y control de flujo con MAGIA ✨

---

## 🧪 Reto 1: Laboratorio de Pociones - Type Conversion

**📖 Historia:** Fernanda acaba de abrir su laboratorio de pociones mágicas 🧙‍♀️. Los ingredientes llegan en formatos caóticos: algunos números vienen como texto `"30"`, otros estados vienen como números `1` o `0`. ¡Necesita convertirlos al tipo correcto usando `String()`, `Number()` y `Boolean()` antes de que explote el caldero! 💥✨

**📝 Descripción:** Convierte tres ingredientes mágicos a sus tipos correctos. La Poción de Invisibilidad necesita duración en número, la Poción de Fuerza necesita nivel como texto, y la Poción de Velocidad necesita estado como booleano.

**⚡ Funcionalidad:** 
- Usar `Number()` para convertir strings a números
- Usar `String()` para convertir números a texto  
- Usar `Boolean()` para convertir números a true/false

**✅ Casos de prueba:**

| Input                                                            | Expected Output                                           |
| ---------------------------------------------------------------- | --------------------------------------------------------- |
| `invisibilityDuration='30'`, `strengthLevel=8`, `speedActive=1`  | `durationNumber=30`, `levelString='8'`, `isActive=true`   |
| `invisibilityDuration='45'`, `strengthLevel=10`, `speedActive=0` | `durationNumber=45`, `levelString='10'`, `isActive=false` |
| `invisibilityDuration='60'`, `strengthLevel=5`, `speedActive=1`  | `durationNumber=60`, `levelString='5'`, `isActive=true`   |

**💻 Código base:**

```javascript
const invisibilityDuration = '30';
const strengthLevel = 8;
const speedActive = 1;
// Convert invisibilityDuration to number
// Convert strengthLevel to string
// Convert speedActive to boolean
// Create message: "Pociones listas! Invisibilidad: X min, Fuerza: Y, Velocidad: Z"
```

**💡 Tips:**
- 🔹 `Number("30")` convierte string a número
- 🔹 `String(8)` convierte número a string
- 🔹 `Boolean(1)` da `true`, `Boolean(0)` da `false`
- 🔹 Usa template strings para el mensaje

**🚀 Motivación:** ¡Salva el laboratorio de Fernanda dominando las conversiones! 🧪✨

**📁 Carpeta:** `o1-potions-type-conversion/`

---

## ⚡ Reto 2: Convertidor Relámpago - Unary Plus

**📖 Historia:** Elliot descubrió el operador unario `+`, un poder que convierte texto a número en un rayo ⚡. Mijael quiere probarlo con edades, medidas en píxeles y decimales. También aprenderán `parseInt()` que extrae números de "100px" y `parseFloat()` que mantiene decimales como 3.14 🎯

**📝 Descripción:** El operador `+` es la forma más rápida de convertir strings a números. `parseInt()` extrae enteros ignorando texto, y `parseFloat()` mantiene decimales.

**⚡ Funcionalidad:** 
- Usar `+` para convertir strings de números
- Usar `parseInt()` para extraer enteros
- Usar `parseFloat()` para mantener decimales

**✅ Casos de prueba:**

| Input                                                       | Expected Output                                                         |
| ----------------------------------------------------------- | ----------------------------------------------------------------------- |
| `age='42'`, `pi='3.14'`, `width='100px'`, `height='50.5px'` | `ageNumber=42`, `piNumber=3.14`, `widthNumber=100`, `heightNumber=50.5` |
| `age='25'`, `pi='2.71'`, `width='200px'`, `height='75.8px'` | `ageNumber=25`, `piNumber=2.71`, `widthNumber=200`, `heightNumber=75.8` |
| `age='18'`, `pi='1.41'`, `width='150px'`, `height='30.3px'` | `ageNumber=18`, `piNumber=1.41`, `widthNumber=150`, `heightNumber=30.3` |

**💻 Código base:**

```javascript
const age = '42';
const pi = '3.14';
const width = '100px';
const height = '50.5px';
// Convert age using unary +
// Convert pi using unary +
// Extract number from width using parseInt()
// Extract number from height using parseFloat()
```

**💡 Tips:**
- 🔹 `+value` convierte instantáneamente
- 🔹 `parseInt("100px")` extrae 100
- 🔹 `parseFloat("50.5px")` mantiene decimales
- 🔹 `+"abc"` da `NaN`

**🚀 Motivación:** ¡Elliot y Mijael te enseñan el truco del rayo convertidor! ⚡💫

**📁 Carpeta:** `o2-lightning-unary-plus/`

---

## 🎲 Reto 3: Casino Mágico - Operadores Avanzados

**📖 Historia:** Doky 🐕 abrió el Casino Mágico donde los números compiten en desafíos matemáticos. Ronda 1: **¿Par o impar?** (módulo `%`). Ronda 2: **Elevar al cuadrado** (potencia `**`). Ronda 3: **Contador de victorias** (incremento `++`). ¡BONUS! Aprende el **operador ternario** `? :` para decidir ganadores en una línea 🎯✨

**📝 Descripción:** Usa operadores matemáticos avanzados y aprende el operador ternario para condicionales cortos. El ternario funciona así: `condición ? valorSiTrue : valorSiFalse`

**⚡ Funcionalidad:** 
- Usar `%` para calcular residuos (par/impar)
- Usar `**` para elevar al cuadrado
- Usar `++` para incrementar
- **NUEVO:** Usar `? :` (ternario) para decisiones rápidas

**✅ Casos de prueba:**

| Input                             | Expected Output                                                                             |
| --------------------------------- | ------------------------------------------------------------------------------------------- |
| `feNumber=8`, `amorosaNumber=7`   | `feRemainder=0`, `amorosaRemainder=1`, `feSquared=64`, `amorosaSquared=49`, `victories=1`   |
| `feNumber=10`, `amorosaNumber=15` | `feRemainder=0`, `amorosaRemainder=1`, `feSquared=100`, `amorosaSquared=225`, `victories=1` |
| `feNumber=5`, `amorosaNumber=6`   | `feRemainder=1`, `amorosaRemainder=0`, `feSquared=25`, `amorosaSquared=36`, `victories=1`   |

**💻 Código base:**

```javascript
let feNumber = -1; // Change this
let amorosaNumber = -1; // Change this
let victories = 0;
// Calculate remainder for feNumber (% 2)
// Calculate remainder for amorosaNumber (% 2)
// Calculate feNumber squared (** 2)
// Calculate amorosaNumber squared (** 2)
// Increment victories
// BONUS: Use ternary to check if number is even: number % 2 === 0 ? 'par' : 'impar'
```

**💡 Tips:**
- 🔹 `n % 2 === 0` → es par
- 🔹 `n ** 2` → n al cuadrado
- 🔹 `++counter` incrementa en 1
- 🔹 **TERNARIO:** `edad >= 18 ? 'Mayor' : 'Menor'`
- 🔹 El ternario reemplaza if/else cortos

**🚀 Motivación:** ¡Domina operadores y el ternario mágico en el casino de Doky! 🎲💎

**📁 Carpeta:** `o3-casino-math-operators/`

---

## 🐷 Reto 4: El Chanchito de la Verdad - Truthy y Falsy

**📖 Historia:** En el reino vive el chanchito NN 🐷 que detecta si un valor es "verdadero" (truthy) o "falso" (falsy) en JavaScript. Cuando le das algo truthy (número positivo, texto), hace "¡OINK! 🟢". Si le das falsy (0, "", null), gruñe "¡GRUÑIDO! 🔴". Fe quiere probar diferentes valores usando el operador ternario que aprendiste antes 💡

**📝 Descripción:** Evalúa si valores son truthy o falsy usando `Boolean()` y el operador ternario `? :` para mostrar resultados.

**⚡ Funcionalidad:** 
- Convertir valores con `Boolean()`
- Usar operador ternario para mensajes
- Identificar valores falsy: `0`, `""`, `null`, `undefined`, `NaN`, `false`

**✅ Casos de prueba:**

| Input                                                            | Expected Output                                                                                                  |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `value1=8`, `value2=0`, `value3='Fe'`, `value4=''`               | `result1='8 es truthy'`, `result2='0 es falsy'`, `result3='Fe es truthy'`, `result4='(vacío) es falsy'`          |
| `value1=100`, `value2=null`, `value3='Hola'`, `value4=undefined` | `result1='100 es truthy'`, `result2='null es falsy'`, `result3='Hola es truthy'`, `result4='undefined es falsy'` |
| `value1=-5`, `value2=false`, `value3='0'`, `value4=NaN`          | `result1='-5 es truthy'`, `result2='false es falsy'`, `result3='0 es truthy'`, `result4='NaN es falsy'`          |

**💻 Código base:**

```javascript
let value1 = -1; // Change this
let value2 = -1; // Change this
let value3 = ''; // Change this
let value4 = null; // Change this
// Convert each value to boolean
// Use ternary operator to create messages
// Example: Boolean(value1) ? 'truthy' : 'falsy'
```

**💡 Tips:**
- 🔹 `Boolean(8)` da `true` (truthy)
- 🔹 `Boolean(0)` da `false` (falsy)
- 🔹 **Falsy:** `0`, `""`, `null`, `undefined`, `NaN`, `false`
- 🔹 **Truthy:** todo lo demás
- 🔹 Usa ternario: `Boolean(x) ? 'truthy 🟢' : 'falsy 🔴'`

**🚀 Motivación:** ¡El chanchito NN te enseña truthy/falsy con el poder del ternario! 🐷💫

**📁 Carpeta:** `o4-truth-pig-truthy-falsy/`

---

## 🔗 Reto 5: La Maldición del + - Concatenación vs Suma

**📖 Historia:** Hace 100 años, una bruja maldijo el símbolo `+` 🧙‍♀️🔮. A veces suma números, ¡pero otras CONCATENA strings! Mijael está confundido: `5 + 3` da `8` pero `'5' + 3` da `'53'`. Demuestra todos los casos para romper la maldición 💫

**📝 Descripción:** El operador `+` suma números PERO concatena si hay strings. JavaScript evalúa de izquierda a derecha.

**⚡ Funcionalidad:** 
- Probar `+` con números (suma)
- Probar `+` con strings (concatena)
- Probar mezclas (convierte todo a string)

**✅ Casos de prueba:**

| Input                                                  | Expected Output  |
| ------------------------------------------------------ | ---------------- |
| `number1 + number2` donde `number1=5`, `number2=3`     | `8` (number)     |
| `string1 + string2` donde `string1='5'`, `string2='3'` | `'53'` (string)  |
| `string1 + number2` donde `string1='5'`, `number2=3`   | `'53'` (string)  |
| `number1 + number2 + string3` donde `5 + 3 + '2'`      | `'82'` (string)  |
| `string1 + number2 + number3` donde `'2' + 5 + 3`      | `'253'` (string) |

**💻 Código base:**

```javascript
let number1 = -1; // Change this
let number2 = -1; // Change this
const string1 = '5';
const string2 = '3';
// Test 1: number + number
// Test 2: string + string
// Test 3: string + number
// Test 4: number + number + string
// Test 5: string + number + number
// Show each result and its type with typeof
```

**💡 Tips:**
- 🔹 `number + number` = suma
- 🔹 `string + string` = concatenación
- 🔹 `string + number` = convierte todo a string
- 🔹 Evalúa de izquierda a derecha
- 🔹 `5 + 3 + '2'` = `(5 + 3) + '2'` = `'82'`

**🚀 Motivación:** ¡Rompe la maldición entendiendo las reglas del +! Mijael cuenta contigo 🔮✨

**📁 Carpeta:** `o5-plus-curse-concatenation/`

---

## ⚖️ Reto 6: Tribunal de la Igualdad - Comparaciones

**📖 Historia:** Chocolate 🐕 es Juez del Tribunal de la Igualdad. Debe decidir si valores son "realmente iguales" con `===` (estricto) o solo "parecidos" con `==` (suelto). ¿Es `8` igual a `'8'`? ¿Es `0` igual a `false`? ¡Muestra las comparaciones para que Chocolate juzgue! ⚖️

**📝 Descripción:** Compara valores con `===` (valor Y tipo) y `==` (convierte tipos). Muestra resultados booleanos.

**⚡ Funcionalidad:** 
- Usar `===` para igualdad estricta
- Usar `==` para igualdad suelta
- Comparar diferentes tipos

**✅ Casos de prueba:**

| Input                                 | Expected Output              |
| ------------------------------------- | ---------------------------- |
| `number1=8` vs `string1='8'`          | `strict=false`, `loose=true` |
| `zero=0` vs `boolFalse=false`         | `strict=false`, `loose=true` |
| `emptyString=''` vs `boolFalse=false` | `strict=false`, `loose=true` |
| `number1=8` vs `number1=8`            | `strict=true`, `loose=true`  |

**💻 Código base:**

```javascript
let number1 = -1; // Change this
const string1 = '8';
let zero = -1; // Change this
const boolFalse = false;
const emptyString = '';
// Compare number1 === string1
// Compare number1 == string1
// Compare zero === boolFalse
// Compare zero == boolFalse
// Show results
```

**💡 Tips:**
- 🔹 `===` compara valor Y tipo
- 🔹 `==` convierte tipos antes
- 🔹 **SIEMPRE usa `===`**
- 🔹 `!==` es "no igual estricto"

**🚀 Motivación:** ¡Chocolate te enseña la importancia de ===! 🐕⚖️✨

**📁 Carpeta:** `o6-equality-tribunal-comparisons/`

---

## 🎓 Reto 7: Examen de Hogwarts - If/Else

**📖 Historia:** ¡Amorosa 💖 recibió su carta de Hogwarts! El Sombrero Seleccionador 🎩 hará 3 preguntas y según sus respuestas, la asignará a Gryffindor 🦁, Slytherin 🐍, Ravenclaw 🦅 o Hufflepuff 🦡. ¡Ahora SÍ puedes usar if/else para decidir! 🔮

**📝 Descripción:** Usa `if/else if/else` para asignar casa según respuestas a 3 preguntas.

**⚡ Funcionalidad:** 
- Usar `prompt()` para preguntas
- Usar `if/else` para decisiones
- Combinar condiciones con `&&`

**✅ Casos de prueba:**

| Input                                     | Expected Output      |
| ----------------------------------------- | -------------------- |
| `brave='sí'`, `clever='no'`, `loyal='no'` | `house='Gryffindor'` |
| `brave='no'`, `clever='sí'`, `loyal='no'` | `house='Slytherin'`  |
| `brave='no'`, `clever='sí'`, `loyal='sí'` | `house='Ravenclaw'`  |
| `brave='no'`, `clever='no'`, `loyal='sí'` | `house='Hufflepuff'` |

**💻 Código base:**

```javascript
// Ask: ¿Eres valiente? (sí/no)
// Ask: ¿Eres astuto/a? (sí/no)
// Ask: ¿Eres leal? (sí/no)
// Use if/else to determine house
// Gryffindor: brave && !clever
// Slytherin: clever && !loyal
// Ravenclaw: clever && loyal
// Hufflepuff: default (else)
```

**💡 Tips:**
- 🔹 Usa `.toLowerCase()` para validar
- 🔹 `if (brave === 'sí' && clever === 'no')`
- 🔹 `else if` para más casas
- 🔹 `else` final para Hufflepuff

**🚀 Motivación:** ¡Amorosa entrará a Hogwarts gracias a tus condicionales! 🎓✨

**📁 Carpeta:** `o7-hogwarts-if-else/`

---

## 🐾 Reto 8: Test de Personalidad - If/Else Anidados

**📖 Historia:** Mijael 👦 quiere una mascota mágica pero no sabe cuál. El Oráculo de las Mascotas 🔮 pregunta sobre comida, actividad y lugar favorito. Según las respuestas, eres: Perro 🐕 (activo), Gato 🐱 (independiente), Hamster 🐹 (tranquilo) o Dragón 🐲 (aventurero) 🎯

**📝 Descripción:** Usa condicionales múltiples para determinar mascota ideal.

**⚡ Funcionalidad:** 
- Usar `prompt()` para 3 preguntas
- Usar `if/else` con múltiples condiciones
- Combinar respuestas con `&&`

**✅ Casos de prueba:**

| Input                               | Expected Output |
| ----------------------------------- | --------------- |
| `food='pizza'`, `activity='correr'` | `pet='Perro'`   |
| `food='sushi'`, `activity='leer'`   | `pet='Gato'`    |
| `activity='dormir'`                 | `pet='Hamster'` |
| Otros casos                         | `pet='Dragón'`  |

**💻 Código base:**

```javascript
// Ask: ¿Comida favorita? (pizza/sushi/galletas)
// Ask: ¿Actividad favorita? (correr/leer/dormir)
// Ask: ¿Lugar favorito? (parque/casa/cama)
// Use if/else to determine pet
// Dog: pizza && correr
// Cat: sushi && leer
// Hamster: dormir
// Dragon: else (default)
```

**💡 Tips:**
- 🔹 `.toLowerCase()` para normalizar
- 🔹 Combina con `&&`
- 🔹 Orden importa: verifica casos específicos primero
- 🔹 `else` final para dragón

**🚀 Motivación:** ¡Mijael encontrará su mascota perfecta! 🐾✨

**📁 Carpeta:** `o8-pet-personality-if-else/`

---

## 🎚️ Reto 9: Selector de Misión - Switch Statement

**📖 Historia:** Chocolate el perro 🐕 es un guerrero legendario. Cada día tiene una misión del Rey Fe 🤴: Lunes=entrenar ⚔️, Miércoles=mazmorras 🗝️, Viernes=taberna 🍺, Domingo=fiesta 🎉. Usa `switch` para mostrar la misión del día 🗓️

**📝 Descripción:** Usa `switch` para asignar misiones según número de día (1-7).

**⚡ Funcionalidad:** 
- Usar `switch` con casos
- Usar `break` correctamente
- Usar `default` para inválidos

**✅ Casos de prueba:**

| Input    | Expected Output                            |
| -------- | ------------------------------------------ |
| `day=1`  | `mission='Lunes: Entrenar con espadas'`    |
| `day=3`  | `mission='Miércoles: Explorar mazmorras'`  |
| `day=7`  | `mission='Domingo: Fiesta en el castillo'` |
| `day=10` | `mission='Día no válido'`                  |

**💻 Código base:**

```javascript
let day = -1; // Change this (1-7)
let mission = '';
// Use switch(day)
// case 1: Monday mission + break
// case 2: Tuesday mission + break
// ...
// case 7: Sunday mission + break
// default: invalid day
```

**💡 Tips:**
- 🔹 `switch (day) { case 1: ... }`
- 🔹 `break` para salir
- 🔹 `default` para casos no contemplados
- 🔹 Switch usa `===` (estricto)

**🚀 Motivación:** 🎉 ¡PROYECTO FINAL! Chocolate tiene misiones épicas toda la semana 🐕⚔️✨

**📁 Carpeta:** `o9-mission-selector-switch/`

---

## 📊 Resumen del Nivel 2 🎯

**🎉 Has completado:**
- ✅ Type Conversion: `String()`, `Number()`, `Boolean()`
- ✅ Operador unario `+`, `parseInt()`, `parseFloat()`
- ✅ Operadores matemáticos: `%`, `**`, `++`
- ✅ **Operador ternario `? :`**
- ✅ Truthy y Falsy values
- ✅ Concatenación vs Suma
- ✅ Comparaciones: `===` vs `==`
- ✅ Condicionales: `if/else`
- ✅ Switch statements

**⏰ Tiempo estimado:** 2-3 horas 

**🔜 Próximo nivel:** 🔁 Nivel 3 - Loops y Repetición Mágica

---

💪 **¡Felicidades!** Fernanda, Mijael, Fe, Elliot, Chocolate, Amorosa y NN están orgullosos. ¡Eres un mago del código! 🏆✨🚀
