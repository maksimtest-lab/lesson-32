const name = sessionStorage.getItem('name');
const age = sessionStorage.getItem('age');

const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');

nameInput.value = name || '';
ageInput.value = age || '';

nameInput.addEventListener('input', (event) => {
    sessionStorage.setItem('name', event.target.value);
});

ageInput.addEventListener('input', (event) => {
    sessionStorage.setItem('age', event.target.value);
});