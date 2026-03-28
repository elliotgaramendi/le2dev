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
    await new Promise(resolve => setTimeout(resolve, 2000));
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

// create async fetchUsers function that simulates API
// use setTimeout wrapped in Promise
// await the promise
// use try/catch for error handling
// show loading state
// render users to DOM

// tests (run after users load)
const runTests = () => {
  console.log('=== Tests ===');
  console.log(users.length === 3);
  console.log(users[0].name === 'Fernanda');
  console.log(isLoading === true);
  console.log(isLoading === false);
  console.log(typeof fetchUsers === 'function');
};

// uncomment to run tests
// runTests();
