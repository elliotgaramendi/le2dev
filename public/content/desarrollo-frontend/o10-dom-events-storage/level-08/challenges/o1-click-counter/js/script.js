let count = 0;

const counterDisplay = document.getElementById('counterDisplay');
const btn = document.querySelector('#clickBtn');

console.log(counterDisplay);
console.log(btn);

btn.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = `Clicks: ${count}`;
});

console.log(count === 0);
// simulate 5 clicks for testing
// console.log(count === 5);
// console.log(counterDisplay.textContent === 'Clicks: 5');
console.log(typeof btn === 'object');
console.log(btn instanceof HTMLElement === true);
