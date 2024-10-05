import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    hardDisk: {
        type: String,
        required: true
    },
    screenSize: {
        type: String,
        required: true
    },
    ram: {
        type: String,
        required: true
    },
    os: {
        type: String,
        required: true
    },
    cpu: {
        type: String,
        required: true
    },
    gpu: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    preferList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

export const Device = mongoose.model('Device', deviceSchema);