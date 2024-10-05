import { Device } from "../models/Device.js";

export const create = (product) => Device.create(product);
export const getAll = () => Device.find().populate('owner');
export const getOne = (productId) => Device.findById(productId).populate('owner').populate('preferList');

export const preferDevice = (productId, userId) => {
    return Device.findByIdAndUpdate(productId, { $addToSet: { preferList: userId } }).populate('preferList');
}