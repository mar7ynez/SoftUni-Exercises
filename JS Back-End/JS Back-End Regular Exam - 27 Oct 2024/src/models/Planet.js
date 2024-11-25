import mongoose from "mongoose";

const planetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is requried!'],
        minLength: [2, 'Planet name should be atleast 2 chars long!'],
    },
    age: {
        type: Number,
        required: [true, 'Age is requried!'],
        min: [0, 'Age should be a positive number!']
    },
    solarSystem: {
        type: String,
        required: [true, 'Solar system is required!'],
        minLength: [2, 'Solar system name should be atleast 2 chars long!'],
    },
    type: {
        type: String,
        enum: ['Inner', 'Outer', 'Dwarf'],
        required: [true, 'Type option is required!'],
    },
    moons: {
        type: Number,
        required: [true, 'Moon is required!'],
        min: [0, 'Moons should be a positive number!']
    },
    size: {
        type: Number,
        required: [true, 'Size is required!'],
        min: [0, 'Size should be a positive number!']
    },
    rings: {
        type: String,
        enum: ['Yes', 'No'],
        required: [true, 'Ring option is required!'],
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [10, 'Description should be between 10 and 100 chars!'],
        maxLength: [100, 'Description should be between 10 and 100 chars!']
    },
    imageUrl: {
        type: String,
        required: [true, 'Image URL is required!'],
        match: [/^https?:/g, 'Image URL does not match the requirement!']
    },
    likedList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
    }
});

export const Planet = mongoose.model('Planet', planetSchema);