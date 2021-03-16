const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('.overlay');
const mblMenu = document.querySelector('.menu__mobile');

btnHamburger.addEventListener('click', function (){
    if (btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        mblMenu.classList.remove('fade-in', 'fade-in-delay');
        mblMenu.classList.add('fade-out');
        mblMenu.style.zIndex = "-1";
    } else {
        btnHamburger.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
        mblMenu.style.zIndex = "2";
        mblMenu.classList.remove('fade-out');
        mblMenu.classList.add('fade-in', 'fade-in-delay');
    }
});
