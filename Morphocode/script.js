const iconMenu = document.querySelector('.menu__icon')
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        menuBody.classList.toggle('_active');
        iconMenu.classList.toggle('_active');
    });
}


