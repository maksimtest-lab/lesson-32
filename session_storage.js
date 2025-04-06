sessionStorage.setItem('username', 'Mike');
sessionStorage.setItem('age', '25');
sessionStorage.setItem('userinfo', JSON.stringify({isAdmin: false, hasPermissions: true, name: 'Mike', id: 25}));

const username = sessionStorage.getItem('username');
const age = sessionStorage.getItem('age');
const userinfo = JSON.parse(sessionStorage.getItem('userinfo'));

console.log(username, age, userinfo);

sessionStorage.removeItem('username');
sessionStorage.removeItem('email');

const length = sessionStorage.length;

window.addEventListener('storage', (event) => {
    console.log(22222);
    console.log(event);
})

sessionStorage.setItem('age', '26');

console.log(length);

sessionStorage.clear();
