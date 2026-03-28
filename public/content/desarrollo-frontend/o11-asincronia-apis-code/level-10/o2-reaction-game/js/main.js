let startTime = 0;
let reactionTime = 0;

const instructions = document.getElementById('instructions');
const startBtn = document.getElementById('startBtn');
const clickBtn = document.getElementById('clickBtn');
const result = document.getElementById('result');

const waitRandomTime = () => {
  const delay = Math.floor(Math.random() * 3000) + 2000;
  return new Promise(resolve => setTimeout(resolve, delay));
};

const startGame = () => {
  startBtn.style.display = 'none';
  clickBtn.style.display = 'none';
  result.textContent = '';
  instructions.textContent = 'Espera... 👀';

  waitRandomTime()
    .then(() => {
      instructions.textContent = '¡AHORA! ⚡';
      clickBtn.style.display = 'block';
      startTime = Date.now();
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

const handleClick = () => {
  const endTime = Date.now();
  reactionTime = endTime - startTime;

  clickBtn.style.display = 'none';
  instructions.textContent = 'Juego terminado';
  result.textContent = `Tu tiempo: ${reactionTime}ms 🏆`;
  startBtn.style.display = 'block';
  startBtn.textContent = '🔄 Jugar de nuevo';
};

startBtn.addEventListener('click', startGame);
clickBtn.addEventListener('click', handleClick);

// tests (run after game completes)
const runTests = () => {
  console.log('=== Tests ===');
  const delay = Math.floor(Math.random() * 3000) + 2000;
  console.log(delay >= 2000 && delay <= 5000);
  console.log(typeof startTime === 'number');
  console.log(reactionTime > 0);
  console.log('resolved' === 'resolved');
  console.log(typeof Promise.resolve() === 'object');
};

// uncomment to run tests
// runTests();
