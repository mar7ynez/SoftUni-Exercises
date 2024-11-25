const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email address is required!'],
        unique: [true, 'Email already exist!'],
        match: [/@\w+.\w+$/, 'Invalid Email!'],
        minLenght: [10, 'Email should be atleast 10 characters long!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        match:[/^\w+$/, 'Invalid Password!'],
        minLenght: [6, 'Password should be atleast 6 characters long!']
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;