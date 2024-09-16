const mongoose = require('mongoose');

const castSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 8,
        max: 100,
    },
    born: {
        type: String,
        required: true,
    },
    nameInMovie: {
        type: String,
        required: false
    },
    castImage: {
        type: String,
        required: true,
        validate: {
            validator(value) {
                return /^https?:\/\//.test(value);
            },
            message: (props) => `${props.value} is invalid url!`
        }
    },
    movie: [{
        type: mongoose.Types.ObjectId,
        ref: 'Movie'
    }]
});

const Cast = mongoose.model('Cast', castSchema);

module.exports = Cast;