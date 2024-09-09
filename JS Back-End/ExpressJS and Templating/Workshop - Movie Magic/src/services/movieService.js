const fs = require('fs').promises;
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'moviesData.json');

const getAll = () => {
    return fs.readFile(dataPath, { encoding: 'utf-8' })
        .then(data => JSON.parse(data));
}

const getOne = (movieId) => {
    return getAll()
        .then(movies => movies.find(movie => movie._id == movieId));
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

module.exports = {
    getAll,
    getOne,
    addMovie
}