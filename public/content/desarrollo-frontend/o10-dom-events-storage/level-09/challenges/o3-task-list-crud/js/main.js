let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

const renderTasks = () => {
  taskList.innerHTML = '';
  tasks.forEach(task => {
    taskList.innerHTML += `
      <li class="tasks__item">
        <span class="tasks__text">${task}</span>
        <button class="tasks__delete" onclick="deleteTask(${tasks.indexOf(task)})">❌</button>
      </li>
    `;
  });
};

const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const deleteTask = index => {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
};

taskForm.addEventListener('submit', e => {
  e.preventDefault();
  const newTask = taskForm['task'].value;
  tasks.push(newTask);

  taskForm.reset();
  saveTasks();
  renderTasks();
});

renderTasks();

const runTests = () => {
  console.log('=== Tests ===');
  console.log(tasks.includes('Estudiar JS'));
  console.log(tasks.length === 2);
  console.log(tasks.length === 1);
  console.log(typeof localStorage.getItem('tasks') === 'string');
  console.log(typeof tasks === 'object');
};

// runTests();
