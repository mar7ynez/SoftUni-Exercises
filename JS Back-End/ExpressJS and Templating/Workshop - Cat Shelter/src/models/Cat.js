const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        match: /^https?:\/\//
    },
    breed: {
        type: String,
        required: true,
        lowercase: true
    },
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;