const hamburger = document.querySelector(".hamburger");
const sideBar = document.querySelector(".mobile-navbar");
const logo = document.querySelector(".logo");

let menuOpen = false;
let slide = false;

hamburger.addEventListener('click', () => {
    if (!menuOpen) {
        hamburger.classList.add('animate');
        sideBar.classList.add('animate-nav');
        logo.style.color = '#E44C65';
        logo.style.transition = 'all 1s ease';
        menuOpen = true;
    }else{
        hamburger.classList.remove('animate');
        sideBar.classList.remove('animate-nav');
        menuOpen = false;
        logo.style.color = '';
    }

})