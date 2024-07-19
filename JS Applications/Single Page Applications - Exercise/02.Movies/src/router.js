import { renderHome } from './pages/home.js';
import { renderLogin } from './pages/login.js';
import { renderRegister } from './pages/register.js';

const routes = {
    '/': renderHome,
    '/login': renderLogin,
    '/register': renderRegister,
    '/logout': renderHome,
}

function router(path) {
    hideContent();

    const viewRenderer = routes[path];
    viewRenderer();
}

function hideContent() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.style.display = 'none');
}

export { router };