import { Furniture } from "../models/Furniture.js";

export const getAll = (ownerId) => {
    let query = Furniture.find();

    if (ownerId) {
        query = query.findOne({ _ownerId: ownerId });
    }

    return Furniture.find(query);
};
export const create = (productData) => Furniture.create(productData);
export const getOne = (productId) => Furniture.findById(productId);
export const update = (productId, updatedData) => Furniture.findByIdAndUpdate(productId, updatedData);
export const remove = (productId) => Furniture.findByIdAndDelete(productId);