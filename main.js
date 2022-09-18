console.log("ejecutando script");
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu)
mobileMenuIcon.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu() {
    console.log('click desktop');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    console.log('click mobile');
    mobileMenu.classList.toggle('inactive');
}
