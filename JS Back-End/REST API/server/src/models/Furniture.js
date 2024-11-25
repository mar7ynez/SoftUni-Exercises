import mongoose from "mongoose";

const furnitureSchema = new mongoose.Schema({
    make: {
        type: String,
        required: [true, 'Make is required!']
    },
    model: {
        type: String,
        requried: [true, 'Model is required!']
    },
    year: {
        type: Number,
        required: true,
        min: [1950, 'Year cannot be lower than 1950!'],
        max: [2050, 'Year cannot be lower than 1950!'],
    },
    description: {
        type: String,
        requried: [true, 'Description is required!'],
        minLength: [10, 'Description must be more than 10 symbols!']
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be a positive number!']
    },
    imageUrl: {
        type: String,
        required: true,
        match: [/^https?:/g, 'Image URL does not match the requirement!']
    },
    material: {
        type: String
    },
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

export const Furniture = mongoose.model('Furniture', furnitureSchema);