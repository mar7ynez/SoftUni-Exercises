import { User } from "../models/User.js";
import bcrypt from 'bcrypt';
import { generateToken } from "../utils/generateToken.js";
import 'dotenv/config';

export const register = async (newUser) => {
    const alreadyUser = await User.find({ $or: [{ email: newUser.email }, { username: newUser.username }] });;

    if (alreadyUser.length) {
        throw new Error('User already exists!');
    }

    if (newUser.password !== newUser.rePass) {
        throw new Error('Password missmatch!');
    }

    newUser.password = await bcrypt.hash(newUser.password, 12);

    await User.create(newUser);

    const token = generateToken(alreadyUser);

    return token;
}

export const login = async (loginData) => {
    const alreadyUser = await User.findOne({ username: loginData.username });

    if (!alreadyUser) {
        throw new Error('Invalid email or password!');
    }

    const isPassValid = await bcrypt.compare(loginData.password, alreadyUser.password);

    if (!isPassValid) {
        throw new Error('Invalid email or password!');
    }

    const token = generateToken(alreadyUser);

    return token;
}