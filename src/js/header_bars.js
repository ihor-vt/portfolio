document.addEventListener('DOMContentLoaded', function () {
    let headerBars = document.getElementById('header__bars');
    let barsMenu = document.getElementById('bars__menu');
    let closeBarsMenu = document.getElementById('close_bars_menu');

    headerBars.addEventListener('click', function () {
        barsMenu.classList.add('display_bars');
    });

    barsMenu.addEventListener('click', function (event) {
        barsMenu.classList.remove('display_bars');
    });

    closeBarsMenu.addEventListener('click', function (event) {
        barsMenu.classList.remove('display_bars');
    });
});
