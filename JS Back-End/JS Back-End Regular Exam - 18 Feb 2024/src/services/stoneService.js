import { Stone } from "../model/Stone.js";

export const create = (stoneData) => Stone.create(stoneData);
export const getLastThreeRecords = () => Stone.find().sort({ _id: -1 }).limit(3);

export const getAll = (search) => {
    let query = Stone.find();

    if (search.name) {
        query.find({ name: { $regex: search.name, $options: 'i' } });
    }

    return query;
};

export const getOne = (stoneId) => Stone.findById(stoneId);
export const edit = (stoneId, updatedData) => Stone.findByIdAndUpdate(stoneId, updatedData);
export const like = (stoneId, userId) => Stone.findByIdAndUpdate(stoneId, { $addToSet: { likes: [userId] } });
export const remove = (stoneId) => Stone.findByIdAndDelete(stoneId);

export const hasLiked = (stoneId, userId) => Stone.find({ _id: stoneId, likes: { $in: [userId] } });