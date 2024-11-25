const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minLength: [5, 'Title should be atleast 5 characters long!'],
        match: [/^[\w\s]+$/, 'Title does not match the requirements!']
    },
    genre: {
        type: String,
        required: [true, 'Genre is required!'],
        lowercase: true,
        match: [/^[\w\s]+$/, 'Genre does not match the requirements!']
    },
    director: {
        type: String,
        required: [true, 'Director is required!'],
        match: [/^[\w\s]+$/, 'Director does not match the requirements!']
    },
    year: {
        type: Number,
        required: [true, 'Year is required!'],
        min: [1900, 'The year should be between 1900 and 2024!'],
        max: [2024, 'The year should be between 1900 and 2024!'],
    },
    rating: {
        type: Number,
        required: [true, 'Rating is required!'],
        min: [1, 'The rating should be 1 or bigger!'],
        max: [5, 'The rating should be 5 or lower!']
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        maxLength: [1500, 'Description max length is 1500 characters!'],
        minLength: [20, 'Description should be atleast 20 characters long!']
    },
    imageUrl: {
        type: String,
        required: [true, 'Image url is required!'],
        match: [/^https?:\/\//, 'URL does not match!']
    },
    casts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Cast'
    }],
    _ownerId: mongoose.Types.ObjectId,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;