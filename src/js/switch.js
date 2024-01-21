let checkbox = document.querySelector("#switch");
let body = document.querySelector('body');
let headerBars = document.querySelector('.header__bars');
let headerLinks = document.querySelectorAll('.header__link');

let localStorageTheme = localStorage.getItem("theme");

const setThemeColor = () => {
    localStorageTheme === "dark" ? setDarkMode() : setLightMode();
}

const checkModeSeting = () => {
        window.matchMedia('(prefers-color-scheme: dark').addEventListener('change', () => {
        checkThemeChange();
    })
}

const checkThemeChange = () => {
    if (localStorageTheme == null && window.matchMedia('(prefers-color-scheme: dark').matches) {
        setDarkMode();
    } else if (localStorageTheme && window.matchMedia('(prefers-color-scheme: dark').matches) {
        setDarkMode();
    } else {
        setLightMode();
    }
}

const setDarkMode = () => {
    body.classList = 'dark';
    localStorage.setItem("theme", "dark")
    checkbox.checked = true;

    if (headerBars !== undefined) {
        headerBars.classList.remove('light');
        headerBars.classList.add('dark');
    }

    if (headerLinks !== undefined && headerLinks.length > 0) {
        headerLinks.forEach(link => {
            link.classList.remove('light');
            link.classList.add('dark');
        });
    }
}

const setLightMode = () => {
    body.classList = 'light';
    localStorage.setItem("theme", "light")
    checkbox.checked = false;

    if (headerBars !== undefined) {
        headerBars.classList.remove('dark');
        headerBars.classList.add('light');
    }

    if (headerLinks !== undefined && headerLinks.length > 0) {
        headerLinks.forEach(link => {
            link.classList.remove('dark');
            link.classList.add('light');
        });
    }
}

checkModeSeting();
checkThemeChange();
setThemeColor();

checkbox.addEventListener('click', () => checkbox.checked ? setDarkMode() : setLightMode())
