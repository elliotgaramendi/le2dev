# 🔑 Solucionario - Nivel 8: Eventos

## 🖱️ Reto 1: Botón Contador

**js/main.js:**
```javascript
let count = 0;

const btn = document.getElementById('clickBtn');
const counterDisplay = document.getElementById('counterDisplay');

btn.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = `Clicks: ${count}`;
});

console.log(count === 3);
console.log(counterDisplay.textContent === 'Clicks: 3');
console.log(count === 8);
console.log(btn instanceof HTMLElement === true);
console.log(typeof count === 'number');
```

---

## 📝 Reto 2: Formulario Mágico

**js/main.js:**
```javascript
const heroForm = document.getElementById('heroForm');
const nameInput = document.getElementById('nameInput');
const message = document.getElementById('message');

heroForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = nameInput.value;
  message.textContent = `¡Bienvenido ${name} a la Academia! ⚡`;
  
  heroForm.reset();
});

console.log(message.textContent.includes('Bienvenido Elliot'));
console.log(heroForm.tagName === 'FORM');
console.log(nameInput.value === '');
console.log(nameInput instanceof HTMLInputElement === true);
console.log(typeof message.textContent === 'string');
```

---

## ⌨️ Reto 3: Buscador en Vivo

**js/main.js:**
```javascript
const heroes = ['Elliot', 'Fernanda', 'Fe', 'Mijael', 'Doky', 'Amorosa', 'Chocolate'];

const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('resultsList');

function displayHeroes(heroesArray) {
  resultsList.innerHTML = '';
  
  heroesArray.forEach(hero => {
    const li = document.createElement('li');
    li.classList.add('results__item');
    li.textContent = hero;
    resultsList.appendChild(li);
  });
}

displayHeroes(heroes);

searchInput.addEventListener('input', (event) => {
  const searchTerm = event.target.value.toLowerCase();
  
  const filteredHeroes = heroes.filter(hero => 
    hero.toLowerCase().includes(searchTerm)
  );
  
  displayHeroes(filteredHeroes);
});

console.log(resultsList.children.length === 2);
console.log(heroes.length === 7);
console.log(resultsList.children.length === 1);
console.log(searchInput instanceof HTMLInputElement === true);
console.log(typeof heroes === 'object');
```
