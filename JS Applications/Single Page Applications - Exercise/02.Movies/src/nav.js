import { getUserData } from './utils.js';

const guestNavigation = document.querySelectorAll('.nav-item.guest');
const userNavigation = document.querySelectorAll('.nav-item.user');
const navigationLogo = document.querySelector('.navbar-brand.text-light');

function updateNav() {
    const userData = getUserData();

    if (userData) {
        userNavigation.forEach(userNav => userNav.style.display = 'block');
        guestNavigation.forEach(guestNav => guestNav.style.display = 'none');
    } else {
        userNavigation.forEach(userNav => userNav.style.display = 'none');
        guestNavigation.forEach(guestNav => guestNav.style.display = 'block');
    }
}

export { updateNav };