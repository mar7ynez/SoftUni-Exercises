import { Planet } from '../models/Planet.js';

export const create = (planetData) => Planet.create(planetData);
export const getAll = () => Planet.find();
export const getOne = (planetId) => Planet.findById(planetId);
export const like = (stoneId, userId) => Planet.findByIdAndUpdate(stoneId, { $addToSet: { likedList: [userId] } });
export const hasLiked = (planetId, userId) => Planet.find({ _id: planetId, likedList: { $in: [userId] } });
export const remove = (planetId) => Planet.findByIdAndDelete(planetId);
// export const edit = (planetId, updatedData) => Planet.findByIdAndUpdate(planetId, updatedData)

export const edit = async (planetId, updatedData) => {
    const planet = await Planet.findById(planetId);

    if (!planet) {
        throw new Error("Planet not found");
    }

    Object.assign(planet, updatedData);

    return planet.save();
};

export const search = (name, solarSystem) => {
    if (name) {
        return Planet.find({ name: new RegExp(name, 'i') });
    }

    if (solarSystem) {
        return Planet.find({ solarSystem: new RegExp(solarSystem, 'i') });
    }

    return Planet.find();
}