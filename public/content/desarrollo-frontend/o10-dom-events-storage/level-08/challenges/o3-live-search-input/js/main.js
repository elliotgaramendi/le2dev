const heroes = ['Elliot', 'Fernanda', 'Fe', 'Mijael', 'Doky', 'Amorosa', 'Chocolate'];

const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('resultsList')

const renderHeroes = (heroesArray) => {
  resultsList.innerHTML = '';

  heroesArray.forEach(hero => {
    resultsList.innerHTML += `<li class="results__item">${hero}</li>`;
  });
};

searchInput.addEventListener('input', (event) => {
  const searchTerm = event.target.value.toLowerCase();

  const filteredHeroes = heroes.filter(hero =>
    hero.toLowerCase().includes(searchTerm)
  );

  renderHeroes(filteredHeroes);
  test();
});

renderHeroes(heroes);

const test = () => {
  console.log(resultsList.children.length === 2);
  console.log(heroes.length === 7);
  console.log(resultsList.children.length === 1);
  console.log(searchInput instanceof HTMLInputElement === true);
  console.log(typeof heroes === 'object');
};
