document.cookie = 'counter=1;max-age=3600;';
document.cookie = 'token=123';

// Удалить
// document.cookie = 'counter=1;max-age=0;';
document.cookie = `counter=1;expires=${new Date(0)};`;