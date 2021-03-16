const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('.overlay');

btnHamburger.addEventListener('click', function (){
    if (btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    } else {
        btnHamburger.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
    }
});
