const heroForm = document.getElementById('heroForm');
const message = document.getElementById('message');

heroForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = heroForm['nameInput'].value;
  message.textContent = `¡Bienvenido ${name} a la Academia! ⚡`;
  heroForm.reset();

  test();
});

const test = () => {
  console.log(message.textContent.includes('Bienvenido Elliot'));
  console.log(heroForm.tagName === 'FORM');
  console.log(nameInput.value === '');
  console.log(nameInput instanceof HTMLInputElement === true);
  console.log(typeof message.textContent === 'string');
}
