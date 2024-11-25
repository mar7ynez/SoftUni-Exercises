const Cat = require('../models/Cat');

const getAll = () => Cat.find();
const create = (catData) => Cat.create(catData);
const getOne = (catId) => Cat.findById(catId);
const deleteOne = (catId) => Cat.findByIdAndDelete(catId);
const update = (catId, editedCat) => Cat.findByIdAndUpdate(catId, editedCat);
const search = (query) => {
    if (!query) {
        return Cat.find();
    }

    return Cat.find({ $or: [{ name: new RegExp(query, 'i') }, { breed: new RegExp(query, 'i') }] });
}

module.exports = {
    getAll,
    create,
    getOne,
    deleteOne,
    update,
    search
};