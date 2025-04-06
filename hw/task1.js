// Управление темой
const button = document.getElementById('btn');

function setTheme(theme) {
    document.body.className = theme;
    sessionStorage.setItem('theme', theme);
}

function toggleTheme() {
    const currentTheme = sessionStorage.getItem('theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

function getTheme() {
    const currentTheme = sessionStorage.getItem('theme');
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
    sessionStorage.setItem('lang', lang);
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
    const currentLang = sessionStorage.getItem('lang');
    const newLang = currentLang === 'en' ? 'ru' : 'en';
    setLang(newLang);
}

function initLang() {
    const currentLang = sessionStorage.getItem('lang') || defaultLang;
    setLang(currentLang);
}

initLang();

buttonLang.addEventListener('click', toggleLang);