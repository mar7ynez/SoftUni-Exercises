import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'The name should be between 2 and 20 characters!'],
        maxLength: [20, 'The name should be between 2 and 20 characters!']
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        minLength: [10, 'The email should be atleast 10 characters!'],
    },
    password: {
        type: String,
        required: [true, 'Password is required!']
    }
});

export const User = mongoose.model('User', userSchema);