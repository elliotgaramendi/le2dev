// 🔑 SOLUCIONARIO - NIVEL 5: OBJECTS
// Descomenta el reto que quieras ejecutar

// ====================================
// 👤 RETO 1: FICHA DE HÉROE
// ====================================
function reto1() {
  console.log('=== 👤 RETO 1: FICHA DE HÉROE ===\n');

  const hero = {
    name: 'Elliot',
    power: 'rayo',
    level: 92
  };

  // your code here 💻
  hero.level = 95;
  hero.active = true;

  console.log(hero.name);
  console.log(hero.power);
  console.log(hero.level);
  console.log(hero.active);
  console.log(typeof hero);

  console.log('\n✅ Objects básicos: crear, acceder, modificar\n');
}

// ====================================
// 🔑 RETO 2: ACCESO DINÁMICO
// ====================================
function reto2() {
  console.log('=== 🔑 RETO 2: ACCESO DINÁMICO ===\n');

  const chest = {
    oro: 100,
    plata: 50,
    bronce: 25
  };

  const metal = 'plata';

  // your code here 💻
  chest['bronce'] = 30;
  chest['diamante'] = 200;

  console.log(chest['oro']);
  console.log(chest[metal]);
  console.log(chest['bronce']);
  console.log(chest['diamante']);
  console.log(Object.keys(chest).length);

  console.log('\n✅ Bracket notation para acceso dinámico\n');
}

// ====================================
// 🏰 RETO 3: REINO ANIDADO
// ====================================
function reto3() {
  console.log('=== 🏰 RETO 3: REINO ANIDADO ===\n');

  const kingdom = {
    name: 'Arendelle',
    king: {
      name: 'Fe',
      age: 35
    },
    population: 5000
  };

  // your code here 💻
  kingdom.king.age = 36;
  kingdom.king.power = 'fuego';

  console.log(kingdom.name);
  console.log(kingdom.king.name);
  console.log(kingdom.king.age);
  console.log(kingdom.king.power);
  console.log(kingdom.population);

  console.log('\n✅ Objects anidados (nested)\n');
}

// ====================================
// 📋 RETO 4: LISTA DE HÉROES
// ====================================
function reto4() {
  console.log('=== 📋 RETO 4: LISTA DE HÉROES ===\n');

  const heroes = [
    { name: 'Elliot', level: 92 },
    { name: 'Fernanda', level: 88 }
  ];

  // your code here 💻
  heroes.push({ name: 'Mijael', level: 85 });

  console.log(heroes.length);
  console.log(heroes[0].name);
  console.log(heroes[0].level);
  console.log(heroes[2].name);
  console.log(Array.isArray(heroes));

  console.log('\n✅ Array de objects\n');
}

// ====================================
// 🔄 RETO 5: COPIAR Y COMBINAR
// ====================================
function reto5() {
  console.log('=== 🔄 RETO 5: COPIAR Y COMBINAR ===\n');

  const recipe1 = { name: 'Pizza', time: 30 };
  const recipe2 = { temp: 200, servings: 4 };

  const fullRecipe = { ...recipe1, ...recipe2 };
  const recipeCopy = { ...recipe1 };

  const { name: recipeName, time: cookTime } = recipe1;

  console.log(fullRecipe.name);
  console.log(fullRecipe.temp);
  console.log(Object.keys(fullRecipe).length);
  console.log(recipeName);
  console.log(recipe1.name);

  console.log('\n✅ Spread y destructuring\n');
}

// ====================================
// 💾 RETO 6: GUARDAR Y RECUPERAR
// ====================================
function reto6() {
  console.log('=== 💾 RETO 6: GUARDAR Y RECUPERAR ===\n');

  const hero = {
    name: 'Elliot',
    power: 'rayo',
    level: 92
  };

  const heroJSON = JSON.stringify(hero);
  const recoveredHero = JSON.parse(heroJSON);

  console.log(typeof heroJSON);
  console.log(heroJSON.includes('Elliot'));
  console.log(typeof recoveredHero);
  console.log(recoveredHero.name);
  console.log(recoveredHero.level);

  console.log('\n✅ JSON: stringify y parse\n');
}

// ====================================
// 🎮 MENÚ DE EJECUCIÓN
// ====================================

console.log(`
╔═══════════════════════════════════════════════════════════╗
║     🎮 SOLUCIONARIO NIVEL 5: OBJECTS                     ║
║     Descomenta el reto que quieras ejecutar              ║
╚═══════════════════════════════════════════════════════════╝
`);

// DESCOMENTA EL RETO QUE QUIERAS EJECUTAR:

// reto1();  // 👤 Ficha de Héroe
// reto2();  // 🔑 Acceso Dinámico
// reto3();  // 🏰 Reino Anidado
// reto4();  // 📋 Lista de Héroes
// reto5();  // 🔄 Copiar y Combinar
// reto6();  // 💾 Guardar y Recuperar

// PARA EJECUTAR TODOS:
/*
reto1();
reto2();
reto3();
reto4();
reto5();
reto6();
*/

console.log('💡 Descomenta las funciones arriba para ejecutar cada reto');
console.log('📚 Soluciones simples y directas para dominar objects\n');
