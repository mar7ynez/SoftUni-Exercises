const router = require('express').Router();
const movieServices = require('../services/movieService');
const castServices = require('../services/castService');
const { isAuth } = require('../middlewares/authMiddleware');
const getErrorMsg = require('../utils/errorUtils');

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
            res.render('movie/create', { error: getErrorMsg(error), ...req.body });
        });
});

router.get('/details/:movieId', (req, res) => {
    movieServices.getOne(req.params.movieId).lean()
        .then(movie => {
            if (!movie) {
                throw new Error('Cannot get the movie!');
            }

            const isOwner = req.user?._id == movie._ownerId;

            movie.rating = new Array(Number(movie.rating)).fill(1);

            res.render('movie/details', { ...movie, isOwner });
        })
        .catch(error => {
            res.render('home/home', { error: getErrorMsg(error) });
        });
});

router.get('/:movieId/attach', isAuth, (req, res) => {
    Promise.all([
        movieServices.getOne(req.params.movieId).lean(),
        castServices.getAll().lean()
    ])
        .then(([movie, casts]) => {
            if (!movie || !casts) {
                throw new Error('Error getting movie or casts!');
            }

            res.render('movie/attach', { ...movie, casts });
        })
        .catch(error => {
            res.render('movie/attach', { error: getErrorMsg(error) });
        });
});

router.post('/:movieId/attach', (req, res) => {
    movieServices.attach(req.params.moviesId, req.body.cast)
        .then(() => {
            res.redirect(`/movie/${req.params.movieId}/attach`);
        })
        .catch(error => {
            res.render('movie/attach', { error: getErrorMsg(error) });
        });
});

router.get('/:movieId/edit', isAuth, (req, res) => {
    movieServices.getOne(req.params.movieId).lean()
        .then(movie => {
            if (!movie) {
                throw new Error('Error getting the movie!');
            }

            res.render('movie/edit', movie);
        })
        .catch(error => {
            res.render('movie/details', { error: getErrorMsg(error) });
        });
});

router.post('/:movieId/edit', (req, res) => {
    movieServices.edit(req.params.movieId, req.body)
        .then((movie) => {
            if (!movie) {
                throw new Error('Error editing the movie!');
            }

            res.redirect(`/movie/details/${req.params.movieId}`);
        })
        .catch(error => {
            res.render('movie/details', { error: getErrorMsg(error) });
        });
});

router.get('/:movieId/delete', (req, res) => {
    movieServices.del(req.params.movsieId)
        .then((movie) => {
            if (!movie) {
                throw new Error('Error deleting the movie!');
            }

            res.redirect('/');
        })
        .catch(error => {
            res.render('movie/details', { error: getErrorMsg(error) });
        });
});

module.exports = router;