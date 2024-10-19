import mongoose from "mongoose";

const stoneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
    },
    category: {
        type: String,
        required: [true, 'Category is required!'],
    },
    color: {
        type: String,
        required: [true, 'Color is required!'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Image URL is required!'],
    },
    location: {
        type: String,
        required: [true, 'Location is required!'],
    },
    formula: {
        type: String,
        required: [true, 'Formula is required!'],
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

export const Stone = mongoose.model('Stone', stoneSchema);