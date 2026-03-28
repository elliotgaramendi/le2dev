const API_URL = 'https://dog.ceo/api/breeds/image/random';

let imageUrl = '';
let response = null;

const loading = document.getElementById('loading');
const dogImage = document.getElementById('dogImage');
const error = document.getElementById('error');
const newDogBtn = document.getElementById('newDogBtn');

const fetchDog = async () => {
  try {
    loading.style.display = 'flex';
    dogImage.style.display = 'none';

    response = await fetch(API_URL);
    const data = await response.json();

    imageUrl = data.message;

    dogImage.src = imageUrl;
    dogImage.style.display = 'block';
  } catch (e) {
    error.style.display = 'block';
    error.textContent = `Error: ${e.message}`;
  } finally {
    loading.style.display = 'none';
    test();
  }
};

newDogBtn.addEventListener('click', fetchDog);

fetchDog();

const test = () => {
  console.log('=== Tests ===');
  console.log('Test 1:', typeof fetchDog === 'function');
  console.log('Test 2:', response && response.status === 200);
  console.log('Test 3:', imageUrl.includes('https'));
  console.log('Test 4:', typeof imageUrl === 'string');
  console.log('Test 5:', dogImage.src.includes('https://'));
};
