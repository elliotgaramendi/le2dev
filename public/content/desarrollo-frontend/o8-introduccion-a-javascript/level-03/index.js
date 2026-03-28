// ═══════════════════════════════════════════════════════════════
// 🔁 LEVEL 3: LOOPS AND MAGIC REPETITION - SOLUTIONS
// ═══════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════
// 🔢 CHALLENGE 1: Counter For Loop
// Folder: o1-counter-for-loop
// ═══════════════════════════════════════════════════════════════
function challenge01() {
  let start = 1;
  let end = 10;
  let sum = 0;
  let evens = 0;
  let odds = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
    if (i % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }
  console.log('Suma:', sum);
  console.log('Pares:', evens);
  console.log('Impares:', odds);
}

// ═══════════════════════════════════════════════════════════════
// 🔁 CHALLENGE 2: Multiplication For Nested
// Folder: o2-multiplication-for-nested
// ═══════════════════════════════════════════════════════════════
function challenge02() {
  let table = 8;
  let upTo = 5;
  let results = [];
  let totalSum = 0;
  for (let i = 1; i <= upTo; i++) {
    const result = table * i;
    results.push(result);
    totalSum += result;
  }
  console.log('Resultados:', results);
  console.log('Suma total:', totalSum);
}

// ═══════════════════════════════════════════════════════════════
// 🌀 CHALLENGE 3: Treasure Hunt While
// Folder: o3-treasure-hunt-while
// ═══════════════════════════════════════════════════════════════
function challenge03() {
  let treasure = 7;
  let limit = 20;
  let found = false;
  let attempts = 0;
  let current = 1;
  let message = '';
  while (current <= limit && !found) {
    attempts++;
    if (current === treasure) {
      found = true;
      message = '¡Tesoro encontrado!';
    }
    current++;
  }
  if (!found) {
    message = 'Tesoro no encontrado';
  }
  console.log('Encontrado:', found);
  console.log('Intentos:', attempts);
  console.log('Mensaje:', message);
}

// ═══════════════════════════════════════════════════════════════
// 🎯 CHALLENGE 4: Guess Number Break
// Folder: o4-guess-number-break
// ═══════════════════════════════════════════════════════════════
function challenge04() {
  let secret = 42;
  let guess = 42;
  let maxAttempts = 7;
  let attempts = 0;
  let won = false;
  let hint = '';
  while (attempts < maxAttempts) {
    attempts++;
    if (guess === secret) {
      won = true;
      hint = '¡Correcto!';
      break;
    } else if (guess < secret) {
      hint = 'El número es mayor';
    } else {
      hint = 'El número es menor';
    }
    break;
  }
  console.log('Ganó:', won);
  console.log('Intentos:', attempts);
  console.log('Pista:', hint);
}

// ═══════════════════════════════════════════════════════════════
// ⏭️ CHALLENGE 5: Prime Numbers Continue
// Folder: o5-prime-numbers-continue
// ═══════════════════════════════════════════════════════════════
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function challenge05() {
  let count = 5;
  let primes = [];
  let checked = 0;
  let current = 2;
  while (primes.length < count) {
    checked++;
    if (!isPrime(current)) {
      current++;
      continue;
    }
    primes.push(current);
    current++;
  }
  console.log('Primos:', primes);
  console.log('Números verificados:', checked);
}

// ═══════════════════════════════════════════════════════════════
// 🌟 CHALLENGE 6: Star Pyramid Nested
// Folder: o6-star-pyramid-nested
// ═══════════════════════════════════════════════════════════════
function challenge06() {
  let height = 4;
  let pyramid = [];
  let totalStars = 0;
  for (let i = 1; i <= height; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '*';
    }
    pyramid.push(row);
    totalStars += i;
  }
  console.log('Pirámide:');
  pyramid.forEach(row => console.log(row));
  console.log('Total estrellas:', totalStars);
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
