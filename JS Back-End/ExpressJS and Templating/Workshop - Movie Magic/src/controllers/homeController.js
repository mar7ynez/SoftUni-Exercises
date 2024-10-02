const router = require('express').Router();
const moviesService = require('../services/movieService');
const getErrorMsg = require('../utils/errorUtils');

router.get('/', (req, res) => {
    moviesService.getAll().lean()
        .then(movies => {
            if (!movies.length) {
                throw new Error('No movies found!');
            }

            res.render('home/home', { movies })
        })
        .catch(error => {
            res.render('home/home', { error: getErrorMsg(error) });
        });
});

router.get('/about', (req, res) => {
    res.render('home/about');
});

router.get('/search', (req, res) => {
    const { title, genre, year } = req.query;

    moviesService.search(req.query).lean()
        .then(movies => {
            res.render('home/search', { movies, title, genre, year });
        })
        .catch(error => {
            res.render('home/search', { error: getErrorMsg(error), title, genre, year });
        });
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;