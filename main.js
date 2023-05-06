const nameBtn = document.getElementById('name-btn');
const nameForm = document.querySelector('form');
const welcomePage = document.querySelector('.welcome');

nameBtn.addEventListener('click', () => {
  window.location.href = 'name.html';
});

nameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  welcomePage.querySelector('h1').textContent = `Welcome, ${name}!`;
  welcomePage.style.display = 'block';
  window.location.href = '#welcome';
});
