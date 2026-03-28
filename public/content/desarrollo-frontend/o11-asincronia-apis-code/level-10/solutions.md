# 🔑 Solucionario - Nivel 10: JavaScript Asíncrono

## ⏲️ Reto 1: Temporizador Pomodoro

**js/main.js:**
```javascript
let timeLeft = 1500;
let intervalId = null;
let isRunning = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

const updateDisplay = () => {
  display.textContent = formatTime(timeLeft);
};

const startTimer = () => {
  if (isRunning) return;
  
  isRunning = true;
  startBtn.textContent = '⏸️ Pausar';
  
  intervalId = setInterval(() => {
    timeLeft--;
    updateDisplay();
    
    if (timeLeft === 0) {
      clearInterval(intervalId);
      isRunning = false;
      alert('¡Tiempo terminado! 🎉');
      resetTimer();
    }
  }, 1000);
};

const resetTimer = () => {
  clearInterval(intervalId);
  isRunning = false;
  timeLeft = 1500;
  updateDisplay();
  startBtn.textContent = '▶️ Iniciar';
};

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();

// Para ejecutar tests: iniciar timer, esperar 1 segundo, descomentar
// setTimeout(() => {
//   console.log('=== Tests ===');
//   console.log(timeLeft === 1499); // después de 1 segundo
//   console.log(display.textContent === '24:59');
//   console.log(typeof intervalId === 'number');
//   console.log(typeof isRunning === 'boolean');
//   console.log(isRunning === true);
// }, 1100);
```

---

## 🎲 Reto 2: Juego de Reacción

**js/main.js:**
```javascript
let startTime = 0;
let reactionTime = 0;

const startBtn = document.getElementById('startBtn');
const clickBtn = document.getElementById('clickBtn');
const instructions = document.getElementById('instructions');
const result = document.getElementById('result');

const waitRandomTime = () => {
  const delay = Math.floor(Math.random() * 3000) + 2000; // 2-5 segundos
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

// Para ejecutar tests: completar un juego, luego descomentar
// setTimeout(() => {
//   console.log('=== Tests ===');
//   console.log(typeof startTime === 'number');
//   console.log(startTime > 0);
//   console.log(reactionTime > 0);
//   console.log('resolved' === 'resolved');
//   console.log(typeof Promise.resolve() === 'object');
// }, 100);
```

---

## 🌐 Reto 3: Simulador de API

**js/main.js:**
```javascript
let users = [];
let isLoading = false;

const loadBtn = document.getElementById('loadBtn');
const loading = document.getElementById('loading');
const userList = document.getElementById('userList');

const mockUsers = [
  { id: 1, name: 'Fernanda', email: 'fernanda@magic.com' },
  { id: 2, name: 'Elliot', email: 'elliot@thunder.com' },
  { id: 3, name: 'Doky', email: 'doky@hero.com' }
];

const fetchUsers = async () => {
  isLoading = true;
  loadBtn.style.display = 'none';
  loading.style.display = 'flex';
  userList.innerHTML = '';
  
  try {
    // Simular delay de API (2 segundos)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simular respuesta de API
    users = mockUsers;
    
    renderUsers();
  } catch (error) {
    console.error('Error al cargar usuarios:', error);
    userList.innerHTML = '<p style="color: red;">Error al cargar datos</p>';
  } finally {
    isLoading = false;
    loading.style.display = 'none';
    loadBtn.style.display = 'block';
    loadBtn.textContent = '🔄 Recargar Usuarios';
  }
};

const renderUsers = () => {
  users.forEach(user => {
    const li = document.createElement('li');
    li.className = 'users__item';
    
    const name = document.createElement('p');
    name.className = 'users__name';
    name.textContent = user.name;
    
    const email = document.createElement('p');
    email.className = 'users__email';
    email.textContent = user.email;
    
    li.appendChild(name);
    li.appendChild(email);
    userList.appendChild(li);
  });
};

loadBtn.addEventListener('click', fetchUsers);

// Para ejecutar tests: hacer click en cargar, esperar 3 segundos, descomentar
// setTimeout(() => {
//   console.log('=== Tests ===');
//   console.log(users.length === 3);
//   console.log(users[0].name === 'Fernanda');
//   console.log(isLoading === false); // después de cargar
//   console.log(typeof fetchUsers === 'function');
//   console.log(userList.children.length === 3);
// }, 3000);
```
