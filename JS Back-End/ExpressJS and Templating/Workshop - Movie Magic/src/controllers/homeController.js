const router = require('express').Router();
const moviesService = require('../services/movieService');

router.get('/', (req, res) => {
    moviesService.getAll().lean()
        .then(movies => {
            res.render('home', { movies })
        });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/search', (req, res) => {
    const { title, genre, year } = req.query;

    moviesService.search(req.query).lean()
        .then(movies => {
            res.render('search', { movies, title, genre, year });
        })
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;