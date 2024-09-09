const router = require('express').Router();

const moviesService = require('../services/movieService');

router.get('/', (req, res) => {
    moviesService.getAll()
        .then(movies => res.render('home', { movies }));
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/search', (req, res) => {
    res.render('search');
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;