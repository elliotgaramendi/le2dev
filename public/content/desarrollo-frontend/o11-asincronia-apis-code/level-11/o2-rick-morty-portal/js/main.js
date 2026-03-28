const API_URL = 'https://rickandmortyapi.com/api/character/';

let characters = [];
let response = null;

const loading = document.getElementById('loading');
const characterList = document.getElementById('characterList');

const fetchCharacters = async () => {
  try {
    loading.style.display = 'flex';
    characterList.style.display = 'none';

    const response = await fetch(API_URL);
    const data = await response.json();
    characters = data.results;

    renderCharacters();
    characterList.style.display = 'grid';
  } catch (error) {
    console.error(error);
  } finally {
    loading.style.display = 'none';
  }
};

const renderCharacters = () => {
  characterList.innerHTML = '';

  characters.forEach(character => {
    const { name, status, species, image } = character;

    characterList.innerHTML += `
      <div class="character">
        <img class="character__image" src="${image}" alt="${name}">
        <div class="character__info">
          <h3 class="character__name">${name}</h3>
          <p class="character__detail">${species}</p>
          <p class="character__status character__status--${status}">${status}</p>
        </div>
      </div>
    `;
  });
};

fetchCharacters();

// your code here 💻
// select elements 🎯
// create searchCharacters async function 🔍
// construct URL with query param: ?name=value 🔧
// show loading, hide others ⏳
// fetch character data 📡
// parse with .json() 📋
// handle 404 error (no results) 🚫
// render character cards in DOM 🎴
// create runTests function ✅
// call runTests in finally block 🎯

// 🧪 Tests function (add this at the end)
const runTests = () => {
  const testResults = document.getElementById('testResults');
  testResults.style.display = 'block';

  const tests = [
    { name: 'searchCharacters es función', result: typeof searchCharacters === 'function' },
    { name: 'characters tiene datos', result: characters.length > 0 },
    { name: 'Primer personaje tiene name', result: characters[0] && characters[0].name !== undefined },
    { name: 'Response status es 200', result: response && response.status === 200 },
    { name: 'Cards renderizadas', result: characterList.children.length > 0 }
  ];

  let html = '<p class="tests__title">🧪 Resultados de Tests:</p>';
  tests.forEach(test => {
    const status = test.result ? '✅' : '❌';
    const className = test.result ? 'tests__item--pass' : 'tests__item--fail';
    html += `<div class="tests__item ${className}">${status} ${test.name}: ${test.result}</div>`;
  });

  testResults.innerHTML = html;
};
