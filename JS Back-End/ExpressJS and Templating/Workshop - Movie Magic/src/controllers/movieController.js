const router = require('express').Router();
const movieServices = require('../services/movieService');
const castServices = require('../services/castService');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/create', isAuth, (req, res) => {
    res.render('movie/create');
});

router.post('/create', (req, res) => {
    const newMovie = {
        ...req.body,
        _ownerId: req.user._id
    };


    movieServices.addMovie(newMovie)
        .then(() => {
            res.redirect('/');
        })
        .catch(error => {
            alert(`Cannot create movie: ${error.message}`);
        });
});

router.get('/details/:movieId', (req, res) => {
    movieServices.getOne(req.params.movieId).lean()
        .then(movie => {
            const isOwner = req.user?._id == movie._ownerId;

            movie.rating = new Array(Number(movie.rating)).fill(1);

            res.render('movie/details', { ...movie, isOwner });
        })
        .catch(error => console.log(`Cannot get the moive: ${error.message}`));
});

router.get('/:movieId/attach', isAuth, (req, res) => {
    Promise.all([
        movieServices.getOne(req.params.movieId).lean(),
        castServices.getAll().lean()
    ])
        .then(([movie, casts]) => {
            res.render('movie/attach', { ...movie, casts })
        })
        .catch(error => console.log(`Cannot get movie or casts: ${error.message}`));
});

router.post('/:movieId/attach', (req, res) => {
    movieServices.attach(req.params.movieId, req.body.cast)
        .then(() => {
            res.redirect(`/movie/${req.params.movieId}/attach`)
        })
});

router.get('/:movieId/edit', isAuth, (req, res) => {
    movieServices.getOne(req.params.movieId).lean()
        .then(movie => {
            res.render('movie/edit', movie);
        })
        .catch(error => console.log(`Cannot get the moive: ${error.message}`));
});

router.post('/:movieId/edit', (req, res) => {
    movieServices.edit(req.params.movieId, req.body)
        .then(() => {
            res.redirect(`/movie/details/${req.params.movieId}`);
        })
        .catch(error => console.log('Error editing the movie\n', error));
});

router.get('/:movieId/delete', (req, res) => {
    movieServices.del(req.params.movieId)
        .then(() => {
            res.redirect('/');
        })
        .catch(error => console.log('Error deleting the movie\n', error));
});

module.exports = router;