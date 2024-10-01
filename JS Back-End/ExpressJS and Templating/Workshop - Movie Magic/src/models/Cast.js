const mongoose = require('mongoose');

const castSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        match: [/^[\w\s]+$/, 'Name does not match the requirements!'],
        minLength: [5, 'Cast name should be atleast 5 characters long!']
    },
    age: {
        type: Number,
        required: [true, 'Age is required!'],
        min: [1, 'Age does not match the requirements!'],
        max: [120, 'Age does not match the requirements!'],
    },
    born: {
        type: String,
        required: [true, 'Born is required!'],
        match: [/^[\w\s]+$/, 'Born does not match the requirements!'],
    },
    castImage: {
        type: String,
        required: [true, 'Cast image is required!'],
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