# 🚀✨ JavaScript Nivel 2: Objetos, Arrays y Funciones 💻🎯

¡Ahora que dominas los fundamentos, es hora de construir las bases sólidas para ser un Frontend Developer! 🌟🎉 En este nivel aprenderás las estructuras de datos esenciales y patrones modernos que usan todos los proyectos profesionales. Desde crear tu primer objeto mágico 🧙‍♂️ hasta gestionar sistemas completos como la Academia de Héroes Digitales 🏰, cada reto te preparará para el mundo real del desarrollo frontend.

Este nivel está diseñado para ser el puente perfecto hacia el Frontend: objetos para estados, arrays para listas dinámicas, y funciones arrow para todo. ¡Fernanda 👧, Mijael 👦, Fe 🌟, Elliot 🤓, Doky 🐕, Amorosa 💖 y toda la pandilla te acompañarán en esta aventura épica hacia el desarrollo profesional! 🚀✨

---

## 🎯 Objetivos

* 🏗️ **Dominar objetos JavaScript** para manejar datos estructurados (props, state, configuraciones)
* 📋 **Manipular arrays dinámicamente** con métodos esenciales (push, pop, forEach, find)
* ⚡ **Crear funciones arrow modernas** con parámetros, return y validaciones robustas
* 🔄 **Integrar objetos + arrays + funciones** en sistemas completos y funcionales
* 🧩 **Desarrollar lógica de aplicaciones** con gestión de datos, búsquedas y estadísticas
* 🛡️ **Aplicar validación avanzada** para entrada de datos y casos edge
* 🎮 **Construir mini-aplicaciones** que simulen funcionalidades del mundo real
* 🎯 **Prepararse para el Frontend** con patrones y estructuras que se usan profesionalmente

---

## 📚✨ Conceptos a Aprender

```
    🏰✨ OBJETOS & PROPIEDADES        🔧⚡ MÉTODOS & MANIPULACIÓN
    ┌──────────────────────────┐     ┌──────────────────────────┐
    │ • object literals {}     │     │ • dot notation 🎯        │
    │ • propiedades dinámicas  │     │ • bracket notation []    │
    │ • nested objects 🪆      │ ──► │ • agregar propiedades ➕ │
    │ • object destructuring   │     │ • modificar valores ✏️   │
    │ • spread operator {...}  │     │ • Object.keys() 🔍       │
    └──────────────────────────┘     └──────────────────────────┘
              │                              │
              ▼                              ▼
    📋🎪 ARRAYS & COLECCIONES          🔄✨ ITERACIÓN & BÚSQUEDA
    ┌──────────────────────────┐     ┌──────────────────────────┐
    │ • array literals []      │     │ • forEach() 🔄           │
    │ • push/pop métodos       │     │ • find() 🔍              │
    │ • array.length           │ ◄── │ • includes() ✅          │
    │ • índices dinámicos      │     │ • array destructuring    │
    │ • arrays de objetos      │     │ • spread [...array]      │
    └──────────────────────────┘     └──────────────────────────┘
              │                              │
              ▼                              ▼
    ⚡🌀 FUNCIONES ARROW               🎮🚀 APLICACIONES REALES
    ┌──────────────────────────┐     ┌──────────────────────────┐
    │ • sintaxis moderna =>    │     │ • gestión de datos 📊    │
    │ • parámetros múltiples   │     │ • sistemas CRUD básicos  │
    │ • return explícito       │ ──► │ • validación robusta 🛡️  │
    │ • arrow functions puras  │     │ • búsquedas y filtros 🔍 │
    │ • composition patterns   │     │ • estadísticas y reports │
    └──────────────────────────┘     └──────────────────────────┘

        🎯🏆 RESULTADO: ¡Bases sólidas para Frontend Development!
```

---

## 🏆✨ Retos

### 👤 o2.1 Mi Primer Objeto Mágico

Crea tu primer objeto para representar a un personaje con propiedades básicas 🧙‍♂️

**🧠 Fundamentos:** object literals, properties, dot notation, property manipulation

---

#### 🎯 Problema 

Necesitas crear un objeto que represente a tu personaje favorito (Mijael, Fernanda, Fe, etc.) con información básica y poder acceder a sus propiedades de forma sencilla.

---

#### 📝 Descripción

* Crear un objeto `character` con propiedades: `name` (string), `age` (number), `favoriteColor` (string), `isHappy` (boolean)
* El personaje debe tener nombre "Mijael", edad 8, color favorito "azul", y estar feliz (true)
* Acceder a las propiedades usando dot notation
* Modificar propiedades existentes
* Agregar nuevas propiedades dinámicamente

---

#### ✅ Casos de prueba

**Caso 1:** Crear personaje con valores específicos: nombre "Mijael", edad 8, color "azul", feliz true  
**Caso 2:** Verificar que se puede acceder a name y retorna "Mijael"  
**Caso 3:** Verificar que age retorna 8 y favoriteColor retorna "azul"  
**Caso 4:** Verificar que el objeto tiene las 4 propiedades requeridas  
**Caso 5:** Verificar que los tipos de datos son correctos  

---

#### 💻 Código base

```js
// Test system setup 🧪✨
const testResults = [];
const recordTest = (testName, condition) => {
    const emoji = condition ? "✅" : "❌";
    testResults.push(`${emoji} ${testName}`);
};

// Create your first character object here 🛠️💫
const character = {
    // ✨ Your magical code here ✨
};

// Automated test function 🤖
const testCharacterObject = () => {
    // Test 1: Happy path - name is "Mijael" 👦
    recordTest("o2.1.1 name is Mijael", character.name === "Mijael");
    
    // Test 2: Happy path - age is 8 and favoriteColor is "azul" 🎨
    recordTest("o2.1.2 age and color correct", 
        character.age === 8 && character.favoriteColor === "azul");
    
    // Test 3: Happy path - isHappy is true initially 😊
    recordTest("o2.1.3 isHappy is true", character.isHappy === true);
    
    // Test 4: Object has all required properties 📋
    const requiredProps = ['name', 'age', 'favoriteColor', 'isHappy'];
    const hasAllProps = requiredProps.every(prop => character.hasOwnProperty(prop));
    recordTest("o2.1.4 has all required properties", hasAllProps);
    
    // Test 5: Properties have correct data types ⚡
    recordTest("o2.1.5 correct data types", 
        typeof character.name === "string" && 
        typeof character.age === "number" && 
        typeof character.favoriteColor === "string" && 
        typeof character.isHappy === "boolean");
};

// Run tests 🏃‍♂️💨
testCharacterObject();

// Show results 📊
console.log('=== 🧪 Resultados de las Pruebas ===');
testResults.forEach(result => console.log(result));

// Show character info 👤✨
console.log('\n=== 👤 Información del Personaje ===');
console.log(`Nombre: ${character.name} 🌟`);
console.log(`Edad: ${character.age} 🎂`);
console.log(`Color favorito: ${character.favoriteColor} 🎨`);
console.log(`¿Está feliz?: ${character.isHappy} 😊`);

// Demo: Modify property and add new one 🔄
character.isHappy = false;
character.hobby = "programar";
console.log(`\n🔄 Después de modificar:`);
console.log(`¿Está feliz?: ${character.isHappy} 😢`);
console.log(`Nuevo hobby: ${character.hobby} 💻`);
```

---

#### 💡 Tips

📦 Los objetos se crean con llaves `{}`  
🎯 Usa dot notation para acceder: `objeto.propiedad`  
⚡ Puedes agregar propiedades después: `objeto.nuevaPropiedad = valor`  
🔍 `Object.keys()` te muestra todas las propiedades  

---

#### 🌟 Motivación

¡Tu primer paso hacia la programación orientada a objetos! Los objetos son la base de todo en JavaScript. ¡Mijael estaría orgulloso de ver su versión digital! 👦✨

---

### 📝 o2.2 Lista de Aventureros

Maneja tu primer array de personajes y aprende operaciones básicas 🗡️

**🧠 Fundamentos:** arrays, push, pop, length, bracket notation, basic iteration

---

#### 🎯 Problema 

Tienes que gestionar una lista de aventureros (nombres) y realizar operaciones básicas como agregar, quitar y contar miembros del equipo.

---

#### 📝 Descripción

* Crear array `adventurers` con nombres iniciales: ["Fernanda", "Mijael", "Fe"]
* Agregar nuevos aventureros con `push()`
* Quitar el último aventurero con `pop()`  
* Acceder a aventureros por índice
* Contar total de miembros con `length`

---

#### 💻 Código base

```js
// Test system setup 🧪⚡
const testResults = [];
const recordTest = (testName, condition) => {
    const emoji = condition ? "✅" : "❌";
    testResults.push(`${emoji} ${testName}`);
};

// Create your adventurers array here 🛠️⚔️
const adventurers = [
    // ✨ Add initial adventurers here 🌟
];

// Automated test function 🤖🧪
const testAdventurersArray = () => {
    // Test 1: Happy path - initial array setup 🚀
    recordTest("o2.2.1 initial array has correct values", 
        adventurers.length === 3 && adventurers[0] === "Fernanda" && adventurers[2] === "Fe");
    
    // Test 2: Happy path - add and remove operations ➕➖
    adventurers.push("Elliot");
    const removed = adventurers.pop();
    recordTest("o2.2.2 push and pop operations work", 
        removed === "Elliot" && adventurers.length === 3);
    
    // Test 3: Happy path - array access and modification 🔍📝
    adventurers.push("Doky", "Amorosa");
    recordTest("o2.2.3 array access and multiple additions", 
        adventurers[1] === "Mijael" && adventurers.includes("Amorosa"));
    
    // Test 4: Input validation - array handles different operations 🛡️
    const lengthBeforeEmpty = adventurers.length;
    adventurers.push(); // Push nothing
    recordTest("o2.2.4 handles edge cases properly", 
        adventurers.length === lengthBeforeEmpty && adventurers[0] !== undefined);
    
    // Test 5: Data type validation - is proper array 📊
    recordTest("o2.2.5 maintains array data type", 
        Array.isArray(adventurers) && typeof adventurers.length === "number");
};

// Run tests 🏃‍♂️💨
testAdventurersArray();

// Show results 📊✨
console.log('=== 🧪 Resultados de las Pruebas ===');
testResults.forEach(result => console.log(result));

// Show team info 👥🗡️
console.log('\n=== 👥 Lista de Aventureros ===');
adventurers.forEach((adventurer, index) => {
    console.log(`${index + 1}. ${adventurer} ⚔️✨`);
});

console.log(`\n📊 Total de aventureros: ${adventurers.length} 🌟`);
```

---

#### 💡 Tips

📝 Los arrays se crean con corchetes `[]`  
➕ `push()` agrega al final, `pop()` quita del final  
🔢 Los índices empiezan en 0  
📏 `array.length` te da el número total de elementos  
🔄 Usa `forEach` para recorrer todos los elementos  

---

#### 🌟 Motivación

¡Ahora puedes manejar listas de datos! Los arrays son fundamentales para gestionar múltiples elementos. ¡Perfecto para formar el equipo épico de Fernanda y amigos! 🎉⚔️

---

### ⚡ o2.3 La Máquina de Funciones Épicas

Crea funciones útiles para resolver problemas del día a día como un verdadero programador 🚀

**🧠 Fundamentos:** arrow functions, parameters, return values, function composition

---

#### 🎯 Problema 

El reino digital necesita funciones útiles para tareas cotidianas: saludar a visitantes, calcular presupuestos, verificar permisos y resolver problemas matemáticos. ¡Sé el héroe que cree estas herramientas mágicas!

---

#### 📝 Descripción

* Crear función `greet(name)` que retorne: "¡Hola, [name]! Bienvenido al reino digital 👋"
* Crear función `calculateCircleArea(radius)` que calcule el área de un círculo
* Crear función `isEven(number)` que verifique si un número es par (retorna boolean)
* Crear función `findMax(a, b, c)` que encuentre el mayor de tres números
* Crear función `celsiusToFahrenheit(celsius)` que convierta temperatura (F = C * 9/5 + 32)

---

#### 💻 Código base

```js
// Test system setup 🧪⚡
const testResults = [];
const recordTest = (testName, condition) => {
    const emoji = condition ? "✅" : "❌";
    testResults.push(`${emoji} ${testName}`);
};

// Create your magical functions here 🛠️✨

const greet = (name) => {
    // 🌟 Your greeting magic here 👋
};

const calculateCircleArea = (radius) => {
    // 📐 Your mathematical magic here - use Math.PI and ** for power ⚡
};

const isEven = (number) => {
    // 🔢 Your number checking magic here ✨
};

const findMax = (a, b, c) => {
    // 🏆 Your maximum finding magic here 🎯
};

const celsiusToFahrenheit = (celsius) => {
    // 🌡️ Your temperature conversion magic here 🔥
};

// Automated test function 🤖🧪
const testFunctionsAutomated = () => {
    // Test 1: Happy path - greeting function works correctly 👋
    recordTest("o2.3.1 greet function works correctly", 
        greet("Doky") === "¡Hola, Doky! Bienvenido al reino digital 👋");
    
    // Test 2: Happy path - mathematical functions work 📐
    const area = calculateCircleArea(5);
    recordTest("o2.3.2 math functions work correctly", 
        Math.abs(area - 78.54) < 0.01 && findMax(10, 25, 15) === 25);
    
    // Test 3: Happy path - boolean and conversion functions 🔢🌡️
    recordTest("o2.3.3 boolean and conversion functions", 
        isEven(4) === true && isEven(7) === false && celsiusToFahrenheit(100) === 212);
    
    // Test 4: Input validation - functions handle invalid inputs 🛡️
    recordTest("o2.3.4 input validation works", 
        isEven("not a number") === false && 
        calculateCircleArea(-5) >= 0 && 
        typeof greet() === "string");
    
    // Test 5: Return type validation - functions return correct types ⚡
    recordTest("o2.3.5 return type validation", 
        typeof greet("test") === "string" && 
        typeof calculateCircleArea(3) === "number" && 
        typeof isEven(6) === "boolean");
};

// Run automated tests 🏃‍♂️💨
testFunctionsAutomated();

// Show results 📊✨
console.log('=== 🧪 Resultados de las Pruebas Automatizadas ===');
testResults.forEach(result => console.log(result));

// Practical demonstration 🎯✨
console.log('\n=== 🎯 Demostración Práctica ===');
console.log(greet("Amorosa") + " 💖");
console.log(`Área de círculo radio 3: ${calculateCircleArea(3).toFixed(2)} unidades² 📐✨`);
console.log(`¿12 es par? ${isEven(12)} 🔢`);
console.log(`Mayor entre 8, 15, 12: ${findMax(8, 15, 12)} 🏆`);
console.log(`25°C = ${celsiusToFahrenheit(25)}°F 🌡️`);
```

---

#### 💡 Tips

➡️ Sintaxis: `const nombre = (parámetros) => { código }`  
🎯 Si es una línea: `const suma = (a, b) => a + b`  
📤 Usa `return` para devolver valores  
🧠 `Math.PI` te da el valor de π, `**` es potencia  
🔍 Siempre valida entradas para evitar errores  

---

#### 🌟 Motivación

¡Chévere! Ahora dominas las funciones en JavaScript. ¡Doky y Amorosa van a alucinar con estas funciones tan bacanes! 💫⚡

---

### 🏰 o2.4 El Gran Libro de Aventureros

Combina objetos, arrays y funciones para gestionar tu propia academia de héroes 🎓

**🧠 Fundamentos:** objects + arrays integration, data management, search functions, iteration

---

#### 🎯 Problema 

La Academia de Héroes Digitales necesita un sistema para registrar estudiantes, buscarlos rápidamente, calcular estadísticas y generar reportes. ¡Crea el sistema que revolucione la educación mágica!

---

#### 📝 Descripción

* `enrollStudent = (name: string, age: number, magicLevel: number, speciality: string): void` - Agregar estudiante al array
* `findStudentByName = (name: string): object | null` - Retornar el objeto estudiante o null si no existe  
* `getAcademyStats = (): object` - Retornar objeto con: `{totalStudents, averageAge, averageMagicLevel}`
* `getTopStudent = (): object` - Retornar el estudiante con mayor magicLevel
* `generateReport = (): void` - Mostrar información formateada de todos los estudiantes con `alert()`

---

#### 💻 Código base

```js
// Test system setup 🧪✨
const testResults = [];
const recordTest = (testName, condition) => {
    const emoji = condition ? "✅" : "❌";
    testResults.push(`${emoji} ${testName}`);
};

// Academy students registry 🏰📚
const students = [
    {
        name: "Fernanda",
        age: 25,
        magicLevel: 85,
        speciality: "Programación Encantada"
    },
    {
        name: "Mijael", 
        age: 8,
        magicLevel: 95,
        speciality: "Lógica Mística"
    }
];

// Create your academy functions here 🛠️🎓

const enrollStudent = (name, age, magicLevel, speciality) => {
    // 🌟 Your student enrollment magic here ✨
    // Validate inputs: name must be non-empty string, age > 0, magicLevel 0-100, speciality non-empty
};

const findStudentByName = (name) => {
    // 🔍 Your student search magic here 🎯
};

const getAcademyStats = () => {
    // 📊 Your statistics calculation magic here ⚡
};

const getTopStudent = () => {
    // 🏆 Your top student finding magic here 👑
};

const generateReport = () => {
    // 📝 Your epic report generation magic here using alert() 🚀
    // Format: "🏰 Academia Report 🎓\n👤 Name: X\n📊 Stats: age Y, magic Z\n🌟 Specialty: W\n\n..."
};

// Automated test function 🤖🧪
const testAcademySystemAutomated = () => {
    const initialCount = students.length;
    
    // Test 1: Happy path - enroll student works correctly ✨
    enrollStudent("Fe", 22, 88, "Magia de Datos");
    recordTest("o2.4.1 enrollment works correctly", 
        students.length === initialCount + 1 && 
        students[students.length - 1]?.name === "Fe");
    
    // Test 2: Happy path - search functionality works 🔍
    const foundStudent = findStudentByName("Mijael");
    recordTest("o2.4.2 search functionality works", 
        foundStudent !== null && foundStudent?.age === 8 && 
        foundStudent?.magicLevel === 95);
    
    // Test 3: Happy path - statistics and top student calculation 📊🏆
    const stats = getAcademyStats();
    const topStudent = getTopStudent();
    recordTest("o2.4.3 stats and top student work", 
        stats?.totalStudents === 3 && topStudent?.name === "Mijael");
    
    // Test 4: Input validation - handles invalid searches and enrollment 🛡️
    const notFound = findStudentByName("Inexistente");
    const beforeInvalid = students.length;
    enrollStudent("", -1, 150, 123); // Invalid data
    recordTest("o2.4.4 input validation works", 
        notFound === null && students.length === beforeInvalid);
    
    // Test 5: Return type validation - functions return correct types ⚡
    recordTest("o2.4.5 return types are correct", 
        typeof stats === "object" && stats?.hasOwnProperty("totalStudents") && 
        typeof topStudent === "object" && topStudent?.hasOwnProperty("magicLevel"));
};

// Run automated tests 🏃‍♂️💨
testAcademySystemAutomated();

// Show test results
console.log('=== 🧪 Resultados de Tests Automatizados ===');
testResults.forEach(result => console.log(result));

// Practical system demonstration 🏰⚡
alert('🏰 ¡Sistema de Academia Activado! ✨\n\n🎯 Vamos a probar todas las funciones mágicas...');

// Add more students for demonstration 🌟
enrollStudent("Elliot", 30, 82, "Arquitectura Mágica");
enrollStudent("Doky", 5, 100, "Prodigio Digital");

// Show statistics 📊
const stats = getAcademyStats();
alert(`📊 Estadísticas de la Academia 🏰\n\n` +
      `👥 Total estudiantes: ${stats?.totalStudents || 0} 🌟\n` +
      `📈 Edad promedio: ${stats?.averageAge?.toFixed(1) || 0} años 🎂\n` +
      `⚡ Nivel mágico promedio: ${stats?.averageMagicLevel?.toFixed(1) || 0} ✨`);

// Show top student 🏆
const topStudent = getTopStudent();
alert(`👑 Estudiante Más Poderoso 🏆\n\n` +
      `🌟 ${topStudent?.name || 'N/A'}\n` +
      `⚡ Nivel Mágico: ${topStudent?.magicLevel || 0}\n` +
      `🎯 Especialidad: ${topStudent?.speciality || 'N/A'}`);

// Generate complete report 📝
alert('📝 Generando Reporte Completo... ✨');
generateReport();

alert('🎉 ¡Academia de Héroes completamente funcional! 🏰✨');
```

---

#### 💡 Tips

📝 Para inscribir: crear objeto `{name, age, magicLevel, speciality}` y usar `push()` 🌟
🔍 Para buscar: usar `find()` método o loop tradicional 🎯
📊 Para promedios: sumar valores y dividir entre cantidad total ⚡
🏆 Para máximo: usar `Math.max()` con map o comparar en loop 👑
📄 Para reporte: usar `forEach()` y `alert()` con formato épico ✨

---

#### 🌟 Motivación

¡Ahora manejas sistemas reales! Esta es la base de aplicaciones del mundo real: datos estructurados, búsquedas, estadísticas. ¡La Academia de Héroes Digitales está en buenas manos! 🎓✨

---

### 🎮 o2.5 El Reino de los Héroes Programadores 🐛

> Crea tu épico sistema de RPG donde la programación es magia y los bugs son dragones 🐉

**🧠 Fundamentos:** complete system integration, game mechanics, data processing, application flow

---

#### 🎯 Problema

El Reino Digital está bajo amenaza de los Bugs Malignos 🐛👹. Necesitas crear un sistema completo de RPG donde los programadores son héroes con diferentes especialidades, pueden formar equipos épicos, entrenar habilidades y enfrentar desafíos de código.

---

#### ⚡ Funcionalidades Épicas

> **🌟 Como héroe del reino, quiero crear nuevos programadores**
```typescript
createHero(name: string, heroClass: string): Hero | null
```
- Crear héroe con stats de su clase + `{level: 1, experience: 0, victories: 0}`
- Retorna `null` si `name` es falsy o `heroClass` no existe en `heroClasses`
- Usa spread operator para copiar propiedades de la clase

> **🏰 Como maestro de la liga, quiero reclutar héroes válidos**
```typescript
recruitHero(hero: Hero): void
```
- Agregar héroe válido al array `heroesLeague`
- Ignora si `hero` es falsy o ya existe un héroe con el mismo nombre
- Solo acepta objetos válidos con propiedades requeridas

> **💪 Como entrenador, quiero mejorar las habilidades de mis héroes**
```typescript
trainHero(heroName: string): boolean
```
- Busca héroe por nombre en `heroesLeague`
- Aumenta stats aleatoriamente (1-5 puntos) en: health, coding, creativity, debugging
- Suma `experience += 10` y recalcula nivel: `Math.floor(experience / 50) + 1`
- Retorna `false` si el héroe no existe o parámetros inválidos

> **⚔️ Como comandante, quiero que mis héroes luchen contra bugs**
```typescript
fightBug(heroName: string, bugDifficulty: number): BattleResult
```
- Valida parámetros: `heroName` debe ser string, `bugDifficulty > 0`
- Lógica épica: Héroe gana si `(coding + debugging) / 2 > bugDifficulty * 10`
- Si gana: `victories++`, `experience += bugDifficulty * 5`, recalcula nivel
- Retorna: `{hero, heroPower, bugDifficulty, bugPower, victory, experienceGained?, message, reason?}`

> **📊 Como administrador, quiero ver estadísticas de la liga**
```typescript
getLeagueStats(): LeagueStats
```
- Usa `reduce()` para calcular totales y promedios
- Retorna `{totalHeroes, averageLevel, totalVictories, topHero}`
- `averageLevel` debe manejar división por cero correctamente

> **🥇 Como fanático, quiero ver el ranking de héroes**
```typescript
getHeroRanking(): Hero[]
```
- Ordena por victorias (descendente), luego por nivel (descendente)
- Usa spread operator para no mutar el array original: `[...heroesLeague]`
- Retorna máximo 3 elementos con `.slice(0, 3)`

> **📜 Como cronista, quiero generar reportes épicos**
```typescript
generateEpicReport(): void
```
- Muestra múltiples `alert()` con formato épico y emojis abundantes
- Incluye: estadísticas generales, hall de la fama, lista completa de héroes
- Maneja caso cuando no hay héroes o no hay victorias registradas

> **🎮 Como jugador, quiero vivir una aventura completa**
```typescript
runEpicDemo(): void
```
- Secuencia épica: crear 8 héroes legendarios → entrenar aleatoriamente → batallas finales → reporte
- Usa múltiples `alert()` para narrativa inmersiva
- Calcula estadísticas finales y determina el estado del reino

---

#### 🏗️ Tipos de Datos

```typescript
interface Hero {
  name: string;
  class: string;
  level: number;
  experience: number;
  victories: number;
  health: number;
  coding: number;
  creativity: number;
  debugging: number;
  specialty: string;
}

interface BattleResult {
  hero: string;
  heroPower: number;
  bugDifficulty: number;
  bugPower: number;
  victory: boolean;
  experienceGained?: number;
  message: string;
  reason?: string;
}

interface LeagueStats {
  totalHeroes: number;
  averageLevel: number;
  totalVictories: number;
  topHero: Hero | null;
}
```

---

#### 🧪 Tests Automatizados

**✅ Test 1: Creación de héroes funciona correctamente**
- Crear héroe "Fernanda" clase "frontend"
- Verificar: `name === "Fernanda"`, `coding === 90`, `level === 1`, `experience === 0`

**✅ Test 2: Reclutamiento y entrenamiento funcionan**
- Reclutar Fernanda, crear "Mijael" backend y reclutarlo
- Entrenar a Mijael: verificar `heroesLeague.length === 2`, `experience === 10`, retorno `true`

**✅ Test 3: Sistema de batalla y estadísticas**
- Fernanda vs Bug nivel 5, obtener estadísticas
- Verificar resultado con propiedad "victory" y stats con `totalHeroes === 2`

**✅ Test 4: Validación de entrada robusta**
- Héroe con nombre vacío/clase inválida → `null`
- Entrenar héroe inexistente → `false`
- Batalla inválida (héroe inexistente, dificultad < 1) → `victory: false`

**✅ Test 5: Tipos de retorno correctos**
- `getLeagueStats()` retorna objeto con propiedades correctas
- `getHeroRanking()` retorna array con máximo 3 elementos

---

#### 💻 Código Base Completo

```javascript
// Test system 🧪⚡
const testResults = [];
const recordTest = (testName, condition) => {
  const emoji = condition ? "✅" : "❌";
  testResults.push(`${emoji} ${testName}`);
};

// Hero class configuration 🏰⚔️
const heroClasses = {
  frontend: { 
    health: 120, coding: 90, creativity: 95, debugging: 70,
    specialty: "Interfaces Mágicas 🎨" 
  },
  backend: { 
    health: 120, coding: 95, creativity: 70, debugging: 90,
    specialty: "Lógica del Servidor 🔧" 
  },
  fullstack: { 
    health: 110, coding: 85, creativity: 85, debugging: 85,
    specialty: "Maestro Universal ⚡" 
  },
  devops: { 
    health: 115, coding: 80, creativity: 75, debugging: 100,
    specialty: "Automatización Épica 🚀" 
  }
};

// Heroes league 👥🏆
const heroesLeague = [];

// ✨ Create your epic functions here ✨

const createHero = (name, heroClass) => {
  // 🌟 Validation and hero creation magic ⚡
  // Return null for invalid inputs, use spread operator
};

const recruitHero = (hero) => {
  // 🏰 Recruitment validation magic 👥
  // Check for valid hero and no duplicates by name
};

const trainHero = (heroName) => {
  // 💪 Training magic with random improvements ⚡
  // Random stats increase (1-5), +10 exp, level calculation
};

const fightBug = (heroName, bugDifficulty) => {
  // ⚔️ Epic battle magic with full validation 🐛
  // Power calculation, victory logic, experience rewards
};

const getLeagueStats = () => {
  // 📊 Statistics calculation magic 🏆
  // Use reduce for totals, handle division by zero
};

const getHeroRanking = () => {
  // 🥇 Ranking magic with proper sorting 👑
  // Sort by victories then level, return top 3
};

const generateEpicReport = () => {
  // 📜 Epic multi-alert report magic 🌟
  // Multiple alerts with epic formatting
};

const runEpicDemo = () => {
  // 🎮 Complete epic adventure sequence ✨
  // 8 heroes creation, training, battles, final report
};

// Automatic tests 🤖🧪
const testRPGSystem = () => {
  // Test 1: Hero creation works correctly 🌟
  const fernanda = createHero("Fernanda", "frontend");
  recordTest("o2.5.1 hero creation works correctly",
    fernanda?.name === "Fernanda" && fernanda?.coding === 90 &&
    fernanda?.level === 1 && fernanda?.experience === 0);

  // Test 2: Recruitment and training work 🏰💪
  recruitHero(fernanda);
  const mijael = createHero("Mijael", "backend");
  recruitHero(mijael);
  const trainSuccess = trainHero("Mijael");
  recordTest("o2.5.2 recruitment and training work",
    heroesLeague.length === 2 && mijael?.experience === 10 && trainSuccess === true);

  // Test 3: Battle and statistics systems work ⚔️📊
  const battleResult = fightBug("Fernanda", 5);
  const stats = getLeagueStats();
  recordTest("o2.5.3 battle and stats systems work",
    battleResult?.hasOwnProperty("victory") &&
    stats?.totalHeroes === 2 && typeof stats?.averageLevel === "number");

  // Test 4: Input validation works 🛡️
  const invalidHero = createHero("", "invalidClass");
  const invalidTrain = trainHero("NonExistent");
  const invalidBattle = fightBug("NonExistent", -1);
  recordTest("o2.5.4 input validation works",
    invalidHero === null && invalidTrain === false && invalidBattle?.victory === false);

  // Test 5: Return types are correct ⚡
  const ranking = getHeroRanking();
  recordTest("o2.5.5 return types are correct",
    typeof stats === "object" && Array.isArray(ranking) && ranking.length <= 3);
};

// Run automatic tests 🤖🧪
testRPGSystem();

// Show results 📊✨
console.log('=== 🧪 Resultados de Tests del Reino ===');
testResults.forEach(result => console.log(result));

// Show how to start the epic adventure 🚀
console.log('\n🎮 Para iniciar la aventura épica, ejecuta: runEpicDemo() 🚀, pero comenta testRPGSystem()');
// runEpicDemo();
```

---

#### 💡 Tips Técnicos

🚀 **Spread operator:** `{...heroClasses[heroClass], name, class: heroClass, level: 1, experience: 0, victories: 0}`  
🎲 **Aleatorio 1-5:** `Math.floor(Math.random() * 5) + 1`  
⚔️ **Poder de batalla:** `heroPower = (coding + debugging) / 2`, `victory = heroPower > bugDifficulty * 10`  
📊 **Reduce pro:** `totalVictories = heroes.reduce((sum, hero) => sum + hero.victories, 0)`  
🏆 **Sort + slice:** `[...heroesLeague].sort((a,b) => b.victories - a.victories || b.level - a.level).slice(0,3)`  
🔍 **Optional chaining:** `hero?.name` para validaciones seguras  
📱 **Alert épico:** Template literals con `\n\n` y emojis abundantes  
⚡ **Validación robusta:** Verificar tipos con `typeof` y valores falsy

---

#### 🌟 Motivación Épica

¡Felicidades, Héroe Programador Nivel 2! 🎓✨ Has dominado la integración completa de sistemas complejos usando JavaScript moderno. Tu Reino Digital es una obra maestra de arquitectura de código.

🏰 **Sistema completo:** Objetos, arrays, funciones trabajando en perfecta armonía  
⚔️ **Validación robusta:** Código defensivo que maneja todos los casos edge  
🌟 **UX inmersiva:** Experiencia de usuario épica con narrativa envolvente  
📊 **Gestión de datos:** Estadísticas, rankings y reportes como un sistema real  

Tu código es elegante, funcional y épico. ¡Los Bugs Malignos tiemblan ante tu poder! 🚀👑🎮

---

## 🚀🎯 Siguientes Pasos

¡Increíble! Has dominado objetos, arrays y funciones como un verdadero héroe programador 🧙‍♂️⚡ Ahora estás listo para los conceptos que te convertirán en un React developer profesional:

### 🎨🌟 Nivel 3: JavaScript Moderno & DOM
- 🖱️ **DOM Manipulation** - querySelector, addEventListener, innerHTML dinámico 🎭✨
- ⏰ **JavaScript Asíncrono** - fetch API, async/await, manejo de errores 🔄💫
- 🌐 **Trabajo con APIs** - GET, POST, JSON, estados de carga 📡🚀
- ✨ **ES6+ Moderno** - destructuring avanzado, spread operator, modules 📚🎯

### 🔄⚡ Nivel 4: Gestión de Estado & Persistencia
- 💾 **Local Storage** - guardar/cargar datos, persistencia entre sesiones 🗄️💎
- 🔧 **Módulos ES6** - import/export, organización de código 📦⚙️
- 🎯 **Error Handling** - try/catch, validación robusta, UX errors 🛡️🎨
- 📊 **Data Flow** - patrones de flujo de datos, estado centralizado 🌊🔄

### ⚛️🎪 Nivel 5: React Foundations
- 🎨 **React Básico** - componentes funcionales, JSX, props 🧩✨
- 🔄 **React Hooks** - useState, useEffect, custom hooks 🪝⚡
- 🎯 **Event Handling** - onClick, forms, controlled components 🖱️📝
- 🏗️ **Component Architecture** - reutilización, composición, patterns 🏰🎯

### 🚀💫 Nivel 6: React Avanzado & Ecosistema
- 🎨 **Styling Moderno** - CSS Modules, Styled Components, Tailwind 💅✨
- 🔄 **State Management** - Context API, Zustand, gestión compleja 📊🌊
- 🌐 **React Router** - navegación, rutas, SPA moderno 🗺️🎯
- ⚡ **Performance** - React.memo, optimizaciones, best practices 🏃‍♂️💨

---

🎊✨ **¡Felicitaciones, Maestro de JavaScript!** 🏆💻 Has construido bases súper sólidas para convertirte en un React developer de élite. Tu sistema de Academia de Héroes Digitales demuestra que dominas la lógica compleja y la arquitectura de aplicaciones. ¡Fernanda 👧, Mijael 👦, Fe 🌟, Elliot 🤓, Doky 🐕, Amorosa 💖 y toda la pandilla están súper orgullosos de tu evolución épica! 💪🚀🎯🌟