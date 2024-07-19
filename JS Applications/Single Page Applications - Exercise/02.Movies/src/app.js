import { updateNav } from './nav.js';
import { router } from './router.js';

const navigation = document.querySelector('nav');

updateNav();

navigation.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.nodeName === 'A' && e.target.getAttribute('id') !== 'welcome-msg') {
        const url = new URL(e.target);
        router(url.pathname);
    }
})