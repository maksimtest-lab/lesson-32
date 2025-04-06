localStorage.setItem('username', 'Mike');
localStorage.setItem('age', '25');
localStorage.setItem('userinfo', JSON.stringify({isAdmin: false, hasPermissions: true, name: 'Mike', id: 25}));

const username = localStorage.getItem('username');
const age = localStorage.getItem('age');
const userinfo = JSON.parse(localStorage.getItem('userinfo'));

console.log(username, age, userinfo);

localStorage.removeItem('username');
localStorage.removeItem('email');

const length = localStorage.length;

window.addEventListener('storage', (event) => {
    console.log(22222);
    console.log(event);
})

localStorage.setItem('age', '26');

console.log(length);

localStorage.clear();
