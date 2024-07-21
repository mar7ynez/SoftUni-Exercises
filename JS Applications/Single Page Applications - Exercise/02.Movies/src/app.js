import { updateNav } from './nav.js';
import { getMovieById } from './pages/details.js';
import { router } from './router.js';
import { getUserData } from './utils.js';

updateNav();

const navigation = document.querySelector('nav');

navigation.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.nodeName === 'A' && e.target.getAttribute('id') !== 'welcome-msg') {
        const url = new URL(e.target);
        router(url.pathname);
    }
})

const addMovieButtonSection = document.querySelector('#add-movie-button');

addMovieButtonSection.addEventListener('click', (e) => {
    e.preventDefault();

    const url = new URL(e.target);
    router(url.pathname);
})

const moviesList = document.querySelector('#movies-list');

moviesList.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.nodeName !== 'BUTTON') {
        return;
    }

    const userData = getUserData();

    if (!userData) {
        return;
    }

    const movieId = e.target.parentNode.dataset.id;
    getMovieById(movieId);

    const url = new URL(e.target.parentNode);
    router(url.pathname);
})
