const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    genre: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    director: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        min: 1950,
        max: 2030,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    description: {
        type: String,
        required: true,
        maxLength: 1500,
    },
    imageUrl: {
        type: String,
        required: true,
        match: /^https?:\/\//
    },
    casts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Cast'
    }]
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;