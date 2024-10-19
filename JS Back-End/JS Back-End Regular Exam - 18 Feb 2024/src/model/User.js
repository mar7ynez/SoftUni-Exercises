import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is requried!'],
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
    }
});

export const User = mongoose.model('User', userSchema);