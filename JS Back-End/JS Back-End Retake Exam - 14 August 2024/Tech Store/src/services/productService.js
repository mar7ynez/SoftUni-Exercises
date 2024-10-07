import { Device } from "../models/Device.js";

export const create = (product) => Device.create(product);
export const getAll = () => Device.find().populate('owner');
export const getOne = (productId) => Device.findById(productId).populate('owner').populate('preferList');
export const deleteProduct = (productId) => Device.findByIdAndDelete(productId);
export const edit = (productId, editedData) => Device.findByIdAndUpdate(productId, editedData);

export const preferDevice = (productId, userId) => {
    return Device.findByIdAndUpdate(productId, { $addToSet: { preferList: userId } }).populate('preferList');
}

export const hasPrefered = async (userId, productId) => {
    const product = await Device.find({ _id: productId, preferList: { $in: [userId] } });

    if (product.length) {
        return true;
    }

    return false;
}

export const getOwnProducts = (userId) => Device.find({ owner: userId }).populate('owner');
export const getPreferredProducts = (userId) => Device.find({ preferList: { $in: [userId] } });