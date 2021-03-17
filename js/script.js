const navContainer = document.querySelector('.navContainer');
const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('.overlay');
const mblMenu = document.querySelector('.menu__mobile');

window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        if (btnHamburger.classList.contains('open')) {
            navContainer.classList.remove('scroll');
        } else {
            navContainer.classList.add('scroll');
        }
    } else {
        navContainer.classList.remove('scroll');
    }
});

btnHamburger.addEventListener('click', function (){
    if (btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        mblMenu.classList.remove('fade-in', 'fade-in-delay');
        mblMenu.classList.add('fade-out');
        mblMenu.style.zIndex = "-1";
        if (window.scrollY > 200) {
            navContainer.classList.add('scroll');
        }
    } else {
        btnHamburger.classList.add('open');
        navContainer.classList.remove('scroll');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
        mblMenu.style.zIndex = "1";
        mblMenu.classList.remove('fade-out');
        mblMenu.classList.add('fade-in', 'fade-in-delay');
    }
});
