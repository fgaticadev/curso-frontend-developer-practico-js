console.log("ejecutando script");
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleAsideCarrito);

function toggleDesktopMenu() {
    console.log('click desktop');
    const idAsideClosed = aside.classList.contains('inactive');
    if (!idAsideClosed) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    console.log('click mobile');
    const idAsideClosed = aside.classList.contains('inactive');
    if (!idAsideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toogleAsideCarrito() {
    console.log('click carrito');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}
