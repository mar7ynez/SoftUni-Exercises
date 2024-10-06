import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: [true, 'Brand is required!']
    },
    model: {
        type: String,
        required: [true, 'Model is required!']
    },
    hardDisk: {
        type: String,
        required: [true, 'Hard Disk is required!']
    },
    screenSize: {
        type: String,
        required: [true, 'Screen size is required!']
    },
    ram: {
        type: String,
        required: [true, 'Ram is required!']
    },
    os: {
        type: String,
        required: [true, 'Operating system is required!']
    },
    cpu: {
        type: String,
        required: [true, 'CPU is required!']
    },
    gpu: {
        type: String,
        required: [true, 'GPU is required!']
    },
    price: {
        type: Number,
        required: [true, 'Pricec is required!']
    },
    color: {
        type: String,
        required: [true, 'Color is required!']
    },
    weight: {
        type: String,
        required: [true, 'Weight is required!']
    },
    imageUrl: {
        type: String,
        required: [true, 'Image URL is required!']
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