const fs = require('fs').promises;
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'moviesData.json');

const getAll = () => {
    return fs.readFile(dataPath, { encoding: 'utf-8' })
        .then(data => JSON.parse(data))
        .catch(error => console.error(`Error getting movies: ${error.message}`))
}

const getOne = (movieId) => {
    return getAll()
        .then(movies => movies.find(movie => movie._id == movieId))
        .catch(error => console.error(`Error getting movie: ${error.message}`))
}

const addMovie = (newMovie) => {
    getAll()
        .then(movies => {
            newMovie._id = movies.slice().pop()._id + 1;

            movies.push(newMovie);

            return movies;
        })
        .then(updatedData => {
            fs.writeFile(dataPath, JSON.stringify(updatedData, null, 2));
        })
}

const search = (query) => {
    return getAll()
        .then(movies => {
            let filteredMovies = movies;

            if (query.title) {
                filteredMovies = filteredMovies.filter(movie => movie.title.toLowerCase().includes(query.title.toLowerCase()));
            }

            if (query.genre) {
                filteredMovies = filteredMovies.filter(movie => movie.genre.toLowerCase().includes(query.genre.toLowerCase()));
            }

            if (query.year) {
                filteredMovies = filteredMovies.filter(movie => movie.year.toLowerCase().includes(query.year.toLowerCase()));
            }

            return filteredMovies;
        })
}

module.exports = {
    getAll,
    getOne,
    addMovie,
    search
}