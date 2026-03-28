// ═══════════════════════════════════════════════════════════════
// 🌱 LEVEL 1: FIRST STEPS IN JAVASCRIPT - SOLUTIONS
// ═══════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════
// 💬 CHALLENGE 1: Console Basics
// Folder: o1-console-basics
// ═══════════════════════════════════════════════════════════════
function challenge01() {
  console.log('¡Hola! Estoy aprendiendo JavaScript 🚀');
  console.warn('Ten cuidado con los errores ⚠️');
  console.error('¡Ups! Esto es un error ❌');
}

// ═══════════════════════════════════════════════════════════════
// 📦 CHALLENGE 2: First Variable
// Folder: o2-first-variable
// ═══════════════════════════════════════════════════════════════
function challenge02() {
  const name = 'Mijael';
  console.log(name);
  console.log('Mi nombre es', name);
}

// ═══════════════════════════════════════════════════════════════
// 🎨 CHALLENGE 3: Data Types
// Folder: o3-data-types
// ═══════════════════════════════════════════════════════════════
function challenge03() {
  const favoriteLanguage = 'JavaScript';
  const favoriteNumber = 8;
  const isLearning = true;
  let girlfriend;
  const isMarried = null;
  console.log('Lenguaje favorito:', favoriteLanguage);
  console.log('Número favorito:', favoriteNumber);
  console.log('¿Estoy aprendiendo?', isLearning);
  console.log('Novia:', girlfriend);
  console.log('¿Casado?', isMarried);
}

// ═══════════════════════════════════════════════════════════════
// 🔍 CHALLENGE 4: Type Detective
// Folder: o4-type-detective
// ═══════════════════════════════════════════════════════════════
function challenge04() {
  const favoriteLanguage = 'JavaScript';
  const favoriteNumber = 8;
  const isLearning = true;
  let girlfriend;
  const isMarried = null;
  console.log('Tipo de favoriteLanguage:', typeof favoriteLanguage);
  console.log('Tipo de favoriteNumber:', typeof favoriteNumber);
  console.log('Tipo de isLearning:', typeof isLearning);
  console.log('Tipo de girlfriend:', typeof girlfriend);
  console.log('Tipo de isMarried:', typeof isMarried);
}

// ═══════════════════════════════════════════════════════════════
// ➕ CHALLENGE 5: Math Operators
// Folder: o5-math-operators
// ═══════════════════════════════════════════════════════════════
function challenge05() {
  const number1 = 8;
  const number2 = 5;
  const sum = number1 + number2;
  const difference = number1 - number2;
  const product = number1 * number2;
  const quotient = number1 / number2;
  console.log(`Suma: ${sum}`);
  console.log(`Resta: ${difference}`);
  console.log(`Producto: ${product}`);
  console.log(`Cociente: ${quotient}`);
}

// ═══════════════════════════════════════════════════════════════
// ✨ CHALLENGE 6: Template Strings
// Folder: o6-template-strings
// ═══════════════════════════════════════════════════════════════
function challenge06() {
  const name = 'Fernanda';
  const age = 15;
  const favoriteAnimal = 'Doky';
  const presentation = `¡Hola! Soy ${name}, tengo ${age} años y mi mascota favorita es ${favoriteAnimal} 🐕`;
  console.log(presentation);
}

// ═══════════════════════════════════════════════════════════════
// 🔔 CHALLENGE 7: First Alert
// Folder: o7-first-alert
// ⚠️ Browser only
// ═══════════════════════════════════════════════════════════════
function challenge07() {
  alert('¡Bienvenido a JavaScript! 🎉');
}

// ═══════════════════════════════════════════════════════════════
// ⌨️ CHALLENGE 8: Capture Input
// Folder: o8-capture-input
// ⚠️ Browser only
// ═══════════════════════════════════════════════════════════════
function challenge08() {
  const name = prompt('¿Cuál es tu nombre?');
  console.log(`¡Bienvenido, ${name}! 👋`);
}

// ═══════════════════════════════════════════════════════════════
// 👋 CHALLENGE 9: Custom Greeting
// Folder: o9-custom-greeting
// ⚠️ Browser only
// ═══════════════════════════════════════════════════════════════
function challenge09() {
  const name = prompt('¿Cuál es tu nombre?');
  const greeting = `¡Hola, ${name}! Bienvenido a tu primer programa interactivo 🎉`;
  alert(greeting);
}

// ═══════════════════════════════════════════════════════════════
// 👤 CHALLENGE 10: Mini Profile
// Folder: o10-mini-profile
// ⚠️ Browser only
// ═══════════════════════════════════════════════════════════════
function challenge10() {
  const name = prompt('¿Cuál es tu nombre?');
  const lastName = prompt('¿Cuál es tu apellido?');
  const email = prompt('¿Cuál es tu correo?');
  const profile = `
    ¡Hola!
    Bienvenido ${name} ${lastName}, tu correo es ${email} ✨
  `;
  alert(profile);
}

// ═══════════════════════════════════════════════════════════════
// 🎯 RUN CHALLENGES (Uncomment to test)
// ═══════════════════════════════════════════════════════════════

// challenge01();
// challenge02();
// challenge03();
// challenge04();
// challenge05();
// challenge06();
// challenge07(); // Browser only
// challenge08(); // Browser only
// challenge09(); // Browser only
// challenge10(); // Browser only
