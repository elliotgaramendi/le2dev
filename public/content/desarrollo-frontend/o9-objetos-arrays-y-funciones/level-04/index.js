// 🔑 SOLUCIONARIO - NIVEL 4: ARRAYS
// Descomenta el reto que quieras ejecutar

// ====================================
// 🎨 RETO 1: LA PALETA MÁGICA
// ====================================
function reto1() {
  console.log('=== 🎨 RETO 1: LA PALETA MÁGICA ===\n');

  const colors = ['azul', 'morado', 'verde']; // edit this line 🎨

  // your code here 💻
  colors[1] = 'blanco';
  colors.push('negro');
  colors.pop();
  colors.pop();

  console.log(colors.length === 2);
  console.log(colors[0] === 'azul');
  console.log(colors[colors.length - 1] === 'blanco');
  console.log(colors[1] === 'blanco');
  console.log(typeof colors === 'object');

  console.log('\n✅ Arrays básicos: crear, modificar, push, pop\n');
}

// ====================================
// 🚂 RETO 2: EL TREN EXPRESO
// ====================================
function reto2() {
  console.log('=== 🚂 RETO 2: EL TREN EXPRESO ===\n');

  const train = ['Vagón1', 'Vagón2', 'Vagón3']; // edit this line 🚂

  // your code here 💻
  train.unshift('Locomotora');
  train.shift();
  train.unshift('VIP');

  console.log(train.length === 4);
  console.log(train[0] === 'VIP');
  console.log(train.includes('VIP') === true);
  console.log(train.includes('Fantasma') === false);
  console.log(Array.isArray(train) === true);

  console.log('\n✅ shift, unshift, includes\n');
}

// ====================================
// 🔍 RETO 3: BÚSQUEDA Y CORTE
// ====================================
function reto3() {
  console.log('=== 🔍 RETO 3: BÚSQUEDA Y CORTE ===\n');

  const suspects = [10, 25, 30, 25, 45, 30, 60]; // edit this line 🔍

  const position25 = suspects.indexOf(25); // your code here 💻
  const position100 = suspects.indexOf(100); // your code here 💻
  const middleNumbers = suspects.slice(2, 5); // your code here 💻
  const lastThree = suspects.slice(-3); // your code here 💻

  console.log(position25 === 1);
  console.log(position100 === -1);
  console.log(middleNumbers.length === 3);
  console.log(lastThree[0] === 45);
  console.log(typeof position25 === 'number');

  console.log('\n✅ indexOf, slice\n');
}

// ====================================
// 🔄 RETO 4: ITERACIÓN VS TRANSFORMACIÓN
// ====================================
function reto4() {
  console.log('=== 🔄 RETO 4: ITERACIÓN VS TRANSFORMACIÓN ===\n');

  const flourKilos = [5, 10, 15, 20]; // edit this line 🍞

  let totalKilos = 0;
  flourKilos.forEach(kilos => {
    totalKilos = totalKilos + kilos;
  });

  const doubledKilos = flourKilos.map(kilos => kilos * 2); // your code here 💻

  console.log(totalKilos === 50);
  console.log(doubledKilos[0] === 10);
  console.log(doubledKilos.length === 4);
  console.log(flourKilos[0] === 5);
  console.log(typeof totalKilos === 'number');

  console.log('\n✅ forEach (itera), map (transforma)\n');
}

// ====================================
// 🎯 RETO 5: TODOS VS UNO
// ====================================
function reto5() {
  console.log('=== 🎯 RETO 5: TODOS VS UNO ===\n');

  const guardians = [45, 78, 92, 60, 88, 55, 95]; // edit this line 🛡️

  const eliteGuardians = guardians.filter(power => power > 70); // your code here 💻
  const firstLegendary = guardians.find(power => power > 90); // your code here 💻

  console.log(eliteGuardians.length === 4);
  console.log(firstLegendary === 92);
  console.log(Array.isArray(eliteGuardians) === true);
  console.log(guardians.length === 7);
  console.log(typeof firstLegendary === 'number');

  console.log('\n✅ filter (todos), find (primero)\n');
}

// ====================================
// 🌟 RETO 6: COPIAR Y COMBINAR
// ====================================
function reto6() {
  console.log('=== 🌟 RETO 6: COPIAR Y COMBINAR ===\n');

  const mijaelClan = ['espada', 'escudo']; // edit this line ⚔️
  const chocolateClan = ['arco', 'flecha']; // edit this line 🏹

  const backupClan = [...mijaelClan]; // your code here 💻
  const unitedClan = [...mijaelClan, ...chocolateClan]; // your code here 💻
  const clanWithAxe = ['hacha', ...mijaelClan]; // your code here 💻

  console.log(backupClan.length === 2);
  console.log(unitedClan.length === 4);
  console.log(clanWithAxe[0] === 'hacha');
  console.log(mijaelClan.length === 2);
  console.log(Array.isArray(unitedClan) === true);

  console.log('\n✅ spread operator (...)\n');
}

// ====================================
// 🎁 RETO 7: EXTRACCIÓN ELEGANTE
// ====================================
function reto7() {
  console.log('=== 🎁 RETO 7: EXTRACCIÓN ELEGANTE ===\n');

  const treasures = ['diamante', 'rubí', 'esmeralda', 'zafiro', 'perla']; // edit this line 💎

  const [first, second, ...restJewels] = treasures; // your code here 💻

  let a = 5;
  let b = 10;
  [a, b] = [b, a]; // your code here 💻

  console.log(first === 'diamante');
  console.log(restJewels.length === 4);
  console.log(a === 10 && b === 5);
  console.log(typeof first === 'string');
  console.log(Array.isArray(restJewels) === true);

  console.log('\n✅ destructuring [a, b] = array\n');
}

// ====================================
// 🎮 MENÚ DE EJECUCIÓN
// ====================================

console.log(`
╔═══════════════════════════════════════════════════════════╗
║     🎮 SOLUCIONARIO NIVEL 4: ARRAYS                      ║
║     Descomenta el reto que quieras ejecutar              ║
╚═══════════════════════════════════════════════════════════╝
`);

// DESCOMENTA EL RETO QUE QUIERAS EJECUTAR:

// reto1();  // 🎨 La Paleta Mágica
// reto2();  // 🚂 El Tren Expreso
// reto3();  // 🔍 Búsqueda y Corte
// reto4();  // 🔄 Iteración vs Transformación
// reto5();  // 🎯 Todos vs Uno
// reto6();  // 🌟 Copiar y Combinar
// reto7();  // 🎁 Extracción Elegante

// PARA EJECUTAR TODOS:
/*
reto1();
reto2();
reto3();
reto4();
reto5();
reto6();
reto7();
*/

console.log('💡 Descomenta las funciones arriba para ejecutar cada reto');
console.log('📚 Soluciones simples y directas para aprender los fundamentos\n');
