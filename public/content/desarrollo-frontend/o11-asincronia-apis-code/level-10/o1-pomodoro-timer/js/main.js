let timeLeft = 1500;
let intervalId = null;
let isRunning = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const updateDisplay = () => {
  display.textContent = formatTime(timeLeft);
};

const startTimer = () => {
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
    startBtn.textContent = '▶️ Iniciar';
    startBtn.style.opacity = 0.75;
    return;
  };

  isRunning = true;
  startBtn.style.opacity = 1;
  startBtn.textContent = '⏸️ Pausar';

  intervalId = setInterval(() => {
    timeLeft--;
    updateDisplay();

    if (timeLeft === 0) {
      alert('¡Tiempo terminado!');
      resetTimer();
      clearInterval(intervalId);
    }
  }, 1000);
};

const resetTimer = () => {
  isRunning = false;
  clearInterval(intervalId);
  startBtn.textContent = '▶️ Iniciar';
  timeLeft = 1500;
  updateDisplay();
};

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();

// tests (run after timer starts)
const runTests = () => {
  console.log('=== Tests ===');
  console.log(timeLeft === 1500);
  console.log(timeLeft === 1499);
  console.log(display.textContent === '25:00');
  console.log(typeof intervalId === 'number');
  console.log(typeof isRunning === 'boolean');
};

// uncomment to run tests
// runTests();
