// Управление темой
const button = document.getElementById('btn');

function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

function getTheme() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.className = currentTheme;
    }
}

getTheme();

button.addEventListener('click', toggleTheme);

// Управление языком
const buttonLang = document.getElementById('btn_lang');
const defaultLang = 'ru';

function setLang(lang) {
    localStorage.setItem('lang', lang);
    const elements = document.querySelectorAll('[data-lang]');

    elements.forEach((element) => {
        const element_lang = element.dataset.lang;
        if (element_lang === lang) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}

function toggleLang() {
    const currentLang = localStorage.getItem('lang');
    const newLang = currentLang === 'en' ? 'ru' : 'en';
    setLang(newLang);
}

function initLang() {
    const currentLang = localStorage.getItem('lang') || defaultLang;
    setLang(currentLang);
}

initLang();

buttonLang.addEventListener('click', toggleLang);