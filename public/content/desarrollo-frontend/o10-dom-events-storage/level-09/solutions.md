# 🔑 Solucionario - Nivel 9: LocalStorage

## 📝 Reto 1: Notas Inmortales

**js/main.js:**
```javascript
const noteText = document.getElementById('noteText');

const loadNote = () => {
  const savedNote = localStorage.getItem('note');
  if (savedNote) {
    noteText.value = savedNote;
  }
};

const saveNote = () => {
  localStorage.setItem('note', noteText.value);
};

loadNote();

noteText.addEventListener('input', saveNote);

const runTests = () => {
  console.log('=== Tests ===');
  console.log(noteText.value.includes('Hola'));
  console.log(localStorage.getItem('note') === 'Hola');
  console.log(noteText instanceof HTMLTextAreaElement === true);
  console.log(typeof localStorage.getItem('note') === 'string');
  console.log(noteText.value === '');
};
```

---

## 🎨 Reto 2: Paleta de Colores

**js/main.js:**
```javascript
const colorPrimary = document.getElementById('colorPrimary');
const colorSecondary = document.getElementById('colorSecondary');
const colorAccent = document.getElementById('colorAccent');
const saveBtn = document.getElementById('saveBtn');

const defaultPalette = {
  primary: '#e74c3c',
  secondary: '#3498db',
  accent: '#2ecc71'
};

const savePalette = () => {
  const paletteJSON = JSON.stringify(defaultPalette);
  localStorage.setItem('palette', paletteJSON);
  applyColors();
};

const loadPalette = () => {
  const saved = localStorage.getItem('palette');
  if (saved) {
    const palette = JSON.parse(saved);
    return palette;
  }
  return defaultPalette;
};

const applyColors = () => {
  const palette = loadPalette();
  colorPrimary.querySelector('.palette__box').style.backgroundColor = palette.primary;
  colorSecondary.querySelector('.palette__box').style.backgroundColor = palette.secondary;
  colorAccent.querySelector('.palette__box').style.backgroundColor = palette.accent;
};

applyColors();

saveBtn.addEventListener('click', savePalette);

const runTests = () => {
  console.log('=== Tests ===');
  const saved = localStorage.getItem('palette');
  const palette = JSON.parse(saved);
  
  console.log(saved.includes('primary'));
  console.log(palette.primary === '#e74c3c');
  console.log(typeof saved === 'string');
  console.log(typeof palette === 'object');
  console.log(saved.includes('primary') === true);
};
```

---

## 📋 Reto 3: Lista de Tareas

**js/main.js:**
```javascript
let tasks = [];

const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

const loadTasks = () => {
  const saved = localStorage.getItem('tasks');
  if (saved) {
    tasks = JSON.parse(saved);
  }
};

const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const renderTasks = () => {
  taskList.innerHTML = '';
  
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'tasks__item';
    
    const span = document.createElement('span');
    span.className = 'tasks__text';
    span.textContent = task;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'tasks__delete';
    deleteBtn.textContent = '🗑️ Eliminar';
    deleteBtn.addEventListener('click', () => deleteTask(index));
    
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
};

const addTask = (taskText) => {
  tasks.push(taskText);
  saveTasks();
  renderTasks();
};

const deleteTask = (index) => {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
};

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  
  if (taskText) {
    addTask(taskText);
    taskInput.value = '';
  }
});

loadTasks();
renderTasks();

const runTests = () => {
  console.log('=== Tests ===');
  console.log(tasks.includes('Estudiar JS'));
  console.log(tasks.length === 2);
  console.log(tasks.length === 1);
  console.log(typeof localStorage.getItem('tasks') === 'string');
  console.log(typeof tasks === 'object');
};
```
