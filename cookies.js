document.cookie = 'counter=1;max-age=3600;';
document.cookie = 'token=123';

// Удалить
// document.cookie = 'counter=1;max-age=0;';
document.cookie = `counter=1;expires=${new Date(0)};`;

function setCookie(name, value, days) {
    let expires = '';

    if (days) {
        let date = new Date();
        date.setTime(date.getDate() + days);
        expires = `expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value};expires=${expires};`;
}

function getCookie(name) {
    let cookies = document.cookie.split(';');
    for (let index = 0; index < cookies.length; index++) {
        let cookie = cookies[index].trim();

        if (cookie.startsWith(`${name}=`) {
            return cookie.substring(name.length + 1);
        }
    }

    return null;
}

function deleteCookie(name) {
    document.cookie = `${name}=;expires=${new Date(0)};`;
}

setCookie('name', 'Ivan', 2);
console.log(getCookie('name'));
deleteCookie('name');