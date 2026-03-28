// ═══════════════════════════════════════════════════════════════
// 🔧 LEVEL 2: MAGIC TRANSFORMATIONS AND LOGIC - SOLUTIONS
// ═══════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════
// 🧪 CHALLENGE 1: Potions Type Conversion
// Folder: o1-potions-type-conversion
// ═══════════════════════════════════════════════════════════════
function challenge01() {
  const invisibilityDuration = '30';
  const strengthLevel = 8;
  const speedActive = 1;
  const durationNumber = Number(invisibilityDuration);
  const levelString = String(strengthLevel);
  const isActive = Boolean(speedActive);
  const message = `Pociones listas! Invisibilidad: ${durationNumber} min, Fuerza: ${levelString}, Velocidad: ${isActive}`;
  console.log(message);
  console.log('Tipos:', typeof durationNumber, typeof levelString, typeof isActive);
}

// ═══════════════════════════════════════════════════════════════
// ⚡ CHALLENGE 2: Lightning Unary Plus
// Folder: o2-lightning-unary-plus
// ═══════════════════════════════════════════════════════════════
function challenge02() {
  const age = '42';
  const pi = '3.14';
  const width = '100px';
  const height = '50.5px';
  const ageNumber = +age;
  const piNumber = +pi;
  const widthNumber = parseInt(width);
  const heightNumber = parseFloat(height);
  console.log('Edad:', ageNumber);
  console.log('Pi:', piNumber);
  console.log('Ancho:', widthNumber);
  console.log('Alto:', heightNumber);
}

// ═══════════════════════════════════════════════════════════════
// 🎲 CHALLENGE 3: Casino Math Operators
// Folder: o3-casino-math-operators
// ═══════════════════════════════════════════════════════════════
function challenge03() {
  let feNumber = 8;
  let amorosaNumber = 7;
  let victories = 0;
  const feRemainder = feNumber % 2;
  const amorosaRemainder = amorosaNumber % 2;
  const feSquared = feNumber ** 2;
  const amorosaSquared = amorosaNumber ** 2;
  victories++;
  console.log(`Fe: ${feNumber} % 2 = ${feRemainder} (${feRemainder === 0 ? 'par' : 'impar'})`);
  console.log(`Amorosa: ${amorosaNumber} % 2 = ${amorosaRemainder} (${amorosaRemainder === 0 ? 'par' : 'impar'})`);
  console.log(`Fe al cuadrado: ${feSquared}`);
  console.log(`Amorosa al cuadrado: ${amorosaSquared}`);
  console.log(`Victorias: ${victories}`);
}

// ═══════════════════════════════════════════════════════════════
// 🐷 CHALLENGE 4: Truth Pig Truthy Falsy
// Folder: o4-truth-pig-truthy-falsy
// ═══════════════════════════════════════════════════════════════
function challenge04() {
  let value1 = 8;
  let value2 = 0;
  let value3 = 'Fe';
  let value4 = '';
  const result1 = Boolean(value1) ? `${value1} es truthy 🟢` : `${value1} es falsy 🔴`;
  const result2 = Boolean(value2) ? `${value2} es truthy 🟢` : `${value2} es falsy 🔴`;
  const result3 = Boolean(value3) ? `${value3} es truthy 🟢` : `${value3} es falsy 🔴`;
  const result4 = Boolean(value4) ? `(vacío) es truthy 🟢` : `(vacío) es falsy 🔴`;
  console.log(result1);
  console.log(result2);
  console.log(result3);
  console.log(result4);
}

// ═══════════════════════════════════════════════════════════════
// 🔗 CHALLENGE 5: Plus Curse Concatenation
// Folder: o5-plus-curse-concatenation
// ═══════════════════════════════════════════════════════════════
function challenge05() {
  let number1 = 5;
  let number2 = 3;
  const string1 = '5';
  const string2 = '3';
  const test1 = number1 + number2;
  const test2 = string1 + string2;
  const test3 = string1 + number2;
  const test4 = number1 + number2 + '2';
  const test5 = '2' + number1 + number2;
  console.log(`${number1} + ${number2} =`, test1, '- Tipo:', typeof test1);
  console.log(`'${string1}' + '${string2}' =`, test2, '- Tipo:', typeof test2);
  console.log(`'${string1}' + ${number2} =`, test3, '- Tipo:', typeof test3);
  console.log(`${number1} + ${number2} + '2' =`, test4, '- Tipo:', typeof test4);
  console.log(`'2' + ${number1} + ${number2} =`, test5, '- Tipo:', typeof test5);
}

// ═══════════════════════════════════════════════════════════════
// ⚖️ CHALLENGE 6: Equality Tribunal Comparisons
// Folder: o6-equality-tribunal-comparisons
// ═══════════════════════════════════════════════════════════════
function challenge06() {
  let number1 = 8;
  const string1 = '8';
  let zero = 0;
  const boolFalse = false;
  const emptyString = '';
  console.log(`${number1} === '${string1}':`, number1 === string1, '(estricto)');
  console.log(`${number1} == '${string1}':`, number1 == string1, '(suelto)');
  console.log(`${zero} === ${boolFalse}:`, zero === boolFalse, '(estricto)');
  console.log(`${zero} == ${boolFalse}:`, zero == boolFalse, '(suelto)');
  console.log(`'${emptyString}' === ${boolFalse}:`, emptyString === boolFalse, '(estricto)');
  console.log(`'${emptyString}' == ${boolFalse}:`, emptyString == boolFalse, '(suelto)');
  console.log('\n⚡ Veredicto de Chocolate: ¡SIEMPRE usa === ! 🐕');
}

// ═══════════════════════════════════════════════════════════════
// 🎓 CHALLENGE 7: Hogwarts If Else
// Folder: o7-hogwarts-if-else
// ⚠️ Browser only
// ═══════════════════════════════════════════════════════════════
function challenge07() {
  alert('🎩 Bienvenida al Sombrero Seleccionador, Amorosa 💖');
  const brave = prompt('¿Eres valiente? (sí/no)').toLowerCase();
  const clever = prompt('¿Eres astuto/a? (sí/no)').toLowerCase();
  const loyal = prompt('¿Eres leal? (sí/no)').toLowerCase();
  let house;
  if (brave === 'sí' && clever === 'no') {
    house = 'Gryffindor 🦁';
  } else if (clever === 'sí' && loyal === 'no') {
    house = 'Slytherin 🐍';
  } else if (clever === 'sí' && loyal === 'sí') {
    house = 'Ravenclaw 🦅';
  } else {
    house = 'Hufflepuff 🦡';
  }
  alert(`🎉 ¡${house}! Bienvenida a tu casa mágica ✨`);
}

// ═══════════════════════════════════════════════════════════════
// 🐾 CHALLENGE 8: Pet Personality If Else
// Folder: o8-pet-personality-if-else
// ⚠️ Browser only
// ═══════════════════════════════════════════════════════════════
function challenge08() {
  alert('🔮 Test de Personalidad de Mascotas para Mijael 👦');
  const food = prompt('¿Comida favorita? (pizza/sushi/galletas)').toLowerCase();
  const activity = prompt('¿Actividad favorita? (correr/leer/dormir)').toLowerCase();
  const place = prompt('¿Lugar favorito? (parque/casa/cama)').toLowerCase();
  let pet;
  if (food === 'pizza' && activity === 'correr') {
    pet = 'Perro 🐕';
  } else if (food === 'sushi' && activity === 'leer') {
    pet = 'Gato 🐱';
  } else if (activity === 'dormir') {
    pet = 'Hamster 🐹';
  } else {
    pet = 'Dragón 🐲';
  }
  alert(`¡Tu mascota ideal es: ${pet}! 🎉`);
}

// ═══════════════════════════════════════════════════════════════
// 🎚️ CHALLENGE 9: Mission Selector Switch
// Folder: o9-mission-selector-switch
// ⚠️ Browser only
// ═══════════════════════════════════════════════════════════════
function challenge09() {
  const day = +prompt('Ingresa un día (1-7) para Chocolate el perro 🐕:');
  let mission;
  switch (day) {
    case 1:
      mission = 'Lunes: Entrenar con espadas ⚔️';
      break;
    case 2:
      mission = 'Martes: Proteger el reino 🛡️';
      break;
    case 3:
      mission = 'Miércoles: Explorar mazmorras 🗝️';
      break;
    case 4:
      mission = 'Jueves: Cazar dragones 🐲';
      break;
    case 5:
      mission = 'Viernes: Descanso en la taberna 🍺';
      break;
    case 6:
      mission = 'Sábado: Paseo por el bosque 🌲';
      break;
    case 7:
      mission = 'Domingo: Fiesta en el castillo 🎉';
      break;
    default:
      mission = '❌ Día no válido';
      break;
  }
  alert(mission);
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
