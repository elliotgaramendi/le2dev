// 🔑 SOLUCIONARIO - NIVEL 6: FUNCIONES
// Descomenta el reto que quieras ejecutar

// ====================================
// 🎯 RETO 1: CALCULADORA MÁGICA
// ====================================
function reto1() {
  console.log('=== 🎯 RETO 1: CALCULADORA MÁGICA ===\n');

  // your code here 💻
  function sum(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    return a / b;
  }

  console.log(sum(10, 5) === 15);
  console.log(subtract(10, 5) === 5);
  console.log(multiply(10, 5) === 50);
  console.log(divide(10, 5) === 2);
  console.log(typeof sum === 'function');

  console.log('\n✅ Funciones básicas: function, parámetros, return\n');
}

// ====================================
// 🏹 RETO 2: TRANSFORMADOR DE PODER
// ====================================
function reto2() {
  console.log('=== 🏹 RETO 2: TRANSFORMADOR DE PODER ===\n');

  // your code here 💻
  const double = (x) => x * 2;
  const square = (x) => x * x;
  const greet = (name) => 'Hola ' + name;
  const isAdult = (age) => age >= 18;

  console.log(double(7) === 14);
  console.log(square(5) === 25);
  console.log(greet('Elliot') === 'Hola Elliot');
  console.log(isAdult(20) === true);
  console.log(typeof double === 'function');

  console.log('\n✅ Arrow functions: sintaxis moderna\n');
}

// ====================================
// 🎁 RETO 3: LABORATORIO DE PARÁMETROS
// ====================================
function reto3() {
  console.log('=== 🎁 RETO 3: LABORATORIO DE PARÁMETROS ===\n');

  // your code here 💻
  const createPotion = (name, power = 50) => {
    return { name, power };
  };

  const createHero = (name, level = 1, active = true) => {
    return { name, level, active };
  };

  console.log(createPotion('Fuego').power === 50);
  console.log(createPotion('Hielo', 80).power === 80);
  console.log(createHero('Doky').level === 1);
  console.log(createHero('Doky', 10).active === true);
  console.log(typeof createPotion === 'function');

  console.log('\n✅ Default parameters: valores por defecto\n');
}

// ====================================
// 📦 RETO 4: ACUMULADOR INFINITO
// ====================================
function reto4() {
  console.log('=== 📦 RETO 4: ACUMULADOR INFINITO ===\n');

  // your code here 💻
  const sumAll = (...nums) => {
    let total = 0;
    nums.forEach(num => {
      total += num;
    });
    return total;
  };

  const multiplyAll = (...nums) => {
    let result = 1;
    nums.forEach(num => {
      result *= num;
    });
    return result;
  };

  const getMax = (...nums) => {
    return Math.max(...nums);
  };

  console.log(sumAll(1, 2, 3) === 6);
  console.log(sumAll(5, 10, 15, 20) === 50);
  console.log(multiplyAll(2, 3, 4) === 24);
  console.log(getMax(10, 5, 20, 15) === 20);
  console.log(typeof sumAll === 'function');

  console.log('\n✅ Rest parameters: ...nums infinitos argumentos\n');
}

// ====================================
// 🔄 RETO 5: PROCESADOR DE ARRAYS
// ====================================
function reto5() {
  console.log('=== 🔄 RETO 5: PROCESADOR DE ARRAYS ===\n');

  // your code here 💻
  const filterEven = (numbers) => {
    return numbers.filter(num => num % 2 === 0);
  };

  const doubleValues = (numbers) => {
    return numbers.map(num => num * 2);
  };

  const getNames = (heroes) => {
    return heroes.map(hero => hero.name);
  };

  const numbers = [1, 2, 3, 4, 5, 6];
  const values = [5, 10, 15];
  const heroes = [{ name: 'Fe' }, { name: 'Doky' }];

  console.log(filterEven(numbers).length === 3);
  console.log(doubleValues(values).length === 3);
  console.log(doubleValues(values)[0] === 10);
  console.log(getNames(heroes)[1] === 'Doky');
  console.log(typeof filterEven === 'function');

  console.log('\n✅ Funciones + Arrays: filter, map con callbacks\n');
}

// ====================================
// 🎮 MENÚ DE EJECUCIÓN
// ====================================

console.log(`
╔═══════════════════════════════════════════════════════════╗
║     🎮 SOLUCIONARIO NIVEL 6: FUNCIONES                   ║
║     Descomenta el reto que quieras ejecutar              ║
╚═══════════════════════════════════════════════════════════╝
`);

// DESCOMENTA EL RETO QUE QUIERAS EJECUTAR:

// reto1();  // 🎯 Calculadora Mágica
// reto2();  // 🏹 Transformador de Poder
// reto3();  // 🎁 Laboratorio de Parámetros
// reto4();  // 📦 Acumulador Infinito
// reto5();  // 🔄 Procesador de Arrays

// PARA EJECUTAR TODOS:
/*
reto1();
reto2();
reto3();
reto4();
reto5();
*/

console.log('💡 Descomenta las funciones arriba para ejecutar cada reto');
console.log('📚 Soluciones simples para dominar funciones\n');
