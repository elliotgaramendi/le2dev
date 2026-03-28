const runTests = () => {
  console.log('=== Tests ===');
  console.log(noteText.value.includes('Hola'));
  console.log(localStorage.getItem('note') === 'Hola');
  console.log(noteText instanceof HTMLTextAreaElement === true);
  console.log(typeof localStorage.getItem('note') === 'string');
  console.log(noteText.value === '');
};

const noteText = document.getElementById('noteText');

noteText.value = localStorage.getItem('note') || '';

noteText.addEventListener('input', () => {
  localStorage.setItem('note', noteText.value);
});

// runTests();
