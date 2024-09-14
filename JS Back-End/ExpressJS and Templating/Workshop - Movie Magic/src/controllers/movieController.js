const router = require('express').Router();
const movieServices = require('../services/movieService');

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
            alert(`Cannot create movie: ${error.message}`)
        });
})

router.get('/movie/details/:movieId', (req, res) => {
    movieServices.getOne(req.params.movieId)
        .then(movie => {
            movie.rating = new Array(Number(movie.rating)).fill(1);

            res.render('details', movie);
        })
});

module.exports = router;