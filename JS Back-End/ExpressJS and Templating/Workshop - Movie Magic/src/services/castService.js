const Cast = require('../models/Cast');

const getAll = () => Cast.find();
const create = (castData) => Cast.create(castData);

module.exports = {
    getAll,
    create
}
