import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is requried!'],
        minLength: [2, 'Username should be between 2 and 20 chars!'],
        maxLength: [20, 'Username should be between 2 and 20 chars!']
    },
    email: {
        type: String,
        required: [true, 'Email is requried!'],
        minLength: [10, 'Email should be atleast 10 chars long!'],
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: [4, 'Password should be atleast 4 chars long!'],
    }
});

export const User = mongoose.model('User', userSchema);