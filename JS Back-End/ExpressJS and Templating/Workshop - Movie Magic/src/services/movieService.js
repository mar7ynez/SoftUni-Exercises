const Movie = require('../models/Movie');

const getAll = () => Movie.find();

const getOne = (movieId) => {
    return Movie.findById(movieId).populate('casts');
}

const addMovie = (newMovie) => Movie.create(newMovie);

const attach = (movieId, castId) => {
    return getOne(movieId)
        .then(movie => {
            if (!movie) {
                throw new Error('Error getting casts!');
            }

            movie.casts.push(castId);
            movie.save();

            return movie;
        })
        .catch(error => {
            throw error;
        });
}

const search = (query) => {
    const searchQuery = {};

    if (query.title) {
        searchQuery.title = new RegExp(query.title, 'i');
    }

    if (query.genre) {
        searchQuery.genre = query.genre.toLowerCase();
    }

    if (query.year) {
        searchQuery.year = query.year;
    }

    return Movie.find(searchQuery);
}

const edit = (movieId, updatedMovieData) => Movie.findByIdAndUpdate(movieId, updatedMovieData);

const del = (movieId) => Movie.findByIdAndDelete(movieId);

module.exports = {
    getAll,
    getOne,
    addMovie,
    search,
    attach,
    edit,
    del
}