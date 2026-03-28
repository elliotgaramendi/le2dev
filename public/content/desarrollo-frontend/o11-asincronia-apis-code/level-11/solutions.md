# 🔑 Solucionario - Nivel 11: Fetch API

## 🐕 Reto 1: Galería de Perritos

**js/main.js:**
```javascript
const API_URL = 'https://dog.ceo/api/breeds/image/random';

let imageUrl = '';
let response = null;

const loading = document.getElementById('loading');
const dogImage = document.getElementById('dogImage');
const error = document.getElementById('error');
const newDogBtn = document.getElementById('newDogBtn');

const fetchDog = async () => {
  try {
    // Show loading
    loading.style.display = 'flex';
    dogImage.style.display = 'none';
    error.style.display = 'none';
    
    // Fetch data
    response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    imageUrl = data.message;
    
    // Render image
    dogImage.src = imageUrl;
    dogImage.style.display = 'block';
    loading.style.display = 'none';
    
  } catch (err) {
    loading.style.display = 'none';
    error.textContent = `Error: ${err.message}`;
    error.style.display = 'block';
    console.error('Error fetching dog:', err);
  }
};

newDogBtn.addEventListener('click', fetchDog);

// Load first dog on page load
fetchDog();

// 🧪 EJECUTAR TESTS: 
// 1. Hacer click en "Nuevo Perrito"
// 2. Esperar 2 segundos a que cargue la imagen
// 3. Pegar esto en la consola:
/*
console.log('=== Tests ===');
console.log('Test 1:', typeof fetch === 'function');
console.log('Test 2:', response && response.status === 200);
console.log('Test 3:', imageUrl.includes('https://'));
console.log('Test 4:', typeof imageUrl === 'string');
console.log('Test 5:', dogImage.src.includes('https://'));
*/
```

---

## 🌤️ Reto 2: App del Clima

**js/main.js:**
```javascript
const API_KEY = '3045dd712a53400ea1c202335241506';
const API_URL = 'https://api.weatherapi.com/v1/current.json';

let weatherData = null;
let history = [];

const searchForm = document.getElementById('searchForm');
const cityInput = document.getElementById('cityInput');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const weatherCard = document.getElementById('weatherCard');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const historySection = document.getElementById('history');
const historyList = document.getElementById('historyList');

const loadHistory = () => {
  const saved = localStorage.getItem('weatherHistory');
  if (saved) {
    history = JSON.parse(saved);
    renderHistory();
  }
};

const saveHistory = (city) => {
  history = [city, ...history.filter(c => c !== city)].slice(0, 3);
  localStorage.setItem('weatherHistory', JSON.stringify(history));
  renderHistory();
};

const renderHistory = () => {
  if (history.length === 0) {
    historySection.style.display = 'none';
    return;
  }
  
  historySection.style.display = 'block';
  historyList.innerHTML = '';
  
  history.forEach(city => {
    const li = document.createElement('li');
    li.className = 'history__item';
    li.textContent = city;
    li.addEventListener('click', () => {
      cityInput.value = city;
      fetchWeather(city);
    });
    historyList.appendChild(li);
  });
};

const fetchWeather = async (city) => {
  try {
    // Show loading
    loading.style.display = 'flex';
    weatherCard.style.display = 'none';
    error.style.display = 'none';
    
    // Fetch data
    const url = `${API_URL}?key=${API_KEY}&q=${city}&lang=es`;
    const response = await fetch(url);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Ciudad no encontrada. Verifica el nombre.');
      } else if (response.status === 500) {
        throw new Error('Error del servidor. Intenta más tarde.');
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    }
    
    const data = await response.json();
    weatherData = {
      temp: data.current.temp_c,
      description: data.current.condition.text,
      humidity: data.current.humidity,
      wind: data.current.wind_kph
    };
    
    // Render weather card
    cityName.textContent = data.location.name;
    temperature.textContent = `${weatherData.temp}°C`;
    description.textContent = weatherData.description;
    humidity.textContent = `${weatherData.humidity}%`;
    wind.textContent = `${weatherData.wind} km/h`;
    
    loading.style.display = 'none';
    weatherCard.style.display = 'block';
    
    // Save to history
    saveHistory(data.location.name);
    
  } catch (err) {
    loading.style.display = 'none';
    error.textContent = err.message;
    error.style.display = 'block';
    console.error('Error fetching weather:', err);
  }
};

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  }
});

loadHistory();

// 🧪 EJECUTAR TESTS: 
// 1. Buscar ciudad "Lima" (o cualquier ciudad válida)
// 2. Esperar 2-3 segundos a que cargue
// 3. Pegar esto en la consola:
/*
console.log('=== Tests ===');
console.log('Test 1:', typeof fetch === 'function');
console.log('Test 2:', weatherData && weatherData.temp !== undefined);
console.log('Test 3:', Array.isArray(history));
console.log('Test 4:', history.length <= 3);
console.log('Test 5:', cityName.textContent.length > 0);
*/

// Para test de error 404: buscar "XYZ123" y verificar mensaje
```
