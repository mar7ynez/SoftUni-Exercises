const router = require('express').Router();
const movieServices = require('../services/movieService');
const castServices = require('../services/castService');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    const newMovie = req.body;

    movieServices.addMovie(newMovie)
        .then(() => {
            res.redirect('/');
        })
        .catch(error => {
            alert(`Cannot create movie: ${error.message}`);
        });
});

router.get('/movie/details/:movieId', (req, res) => {
    movieServices.getOne(req.params.movieId).lean()
        .then(movie => {
            movie.rating = new Array(Number(movie.rating)).fill(1);

            res.render('details', { ...movie });
        })
        .catch(error => console.log(`Cannot get the moive: ${error.message}`));
});

router.get('/movie/:movieId/attach', (req, res) => {
    Promise.all([
        movieServices.getOne(req.params.movieId).lean(),
        castServices.getAll().lean()
    ])
        .then(([movie, casts]) => {
            res.render('movie/attach', { ...movie, casts })
        })
        .catch(error => console.log(`Cannot get movie or casts: ${error.message}`));
});

router.post('/movie/:movieId/attach', (req, res) => {
    movieServices.attach(req.params.movieId, req.body.cast)
        .then(() => {
            res.redirect(`/movie/${req.params.movieId}/attach`)
        })
});

module.exports = router;