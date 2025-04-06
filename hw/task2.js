const name = localStorage.getItem('name');
const age = localStorage.getItem('age');
const email = localStorage.getItem('email');

const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const emailInput = document.getElementById('email');

nameInput.value = name || '';
ageInput.value = age || '';
emailInput.value = email || '';

nameInput.addEventListener('input', (event) => {
    localStorage.setItem('name', event.target.value);
});

ageInput.addEventListener('input', (event) => {
    localStorage.setItem('age', event.target.value);
});

emailInput.addEventListener('input', (event) => {
    localStorage.setItem('email', event.target.value);
});