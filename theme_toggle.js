const button = document.getElementById('btn');

function setTheme (theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
}

function toggleTheme () {
    const currentTheme = localStorage.getItem('theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

function getTheme () {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.className = currentTheme;
    }
}


getTheme();

button.addEventListener('click', toggleTheme);