const Breed = require('../models/Breed');

const getAll = () => Breed.find();
const create = (breedData) => Breed.create(breedData);

module.exports = {
    create,
    getAll
}