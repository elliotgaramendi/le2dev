const colorPrimary = document.getElementById('colorPrimary');
const colorSecondary = document.getElementById('colorSecondary');
const colorAccent = document.getElementById('colorAccent');
const saveBtn = document.getElementById('saveBtn');

const colorPalette = {
  primary: '#e74c3c',
  secondary: '#3498db',
  accent: '#2ecc71'
};

saveBtn.addEventListener('click', () => {
  localStorage.setItem('palette', JSON.stringify(colorPalette));
  renderPalette();
  runTests();
});

const renderPalette = () => {
  const pallete = JSON.parse(localStorage.getItem('palette') || '{}');

  colorPrimary.querySelector('.palette__box').style.backgroundColor = pallete.primary;
  colorSecondary.querySelector('.palette__box').style.backgroundColor = pallete.secondary;
  colorAccent.querySelector('.palette__box').style.backgroundColor = pallete.accent;
};

renderPalette();

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
