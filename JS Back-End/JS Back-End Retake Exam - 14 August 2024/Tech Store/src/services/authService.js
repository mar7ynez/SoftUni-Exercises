import { User } from '../models/User.js';
import bcrypt from 'bcrypt';
import * as jwt from "../lib/jwt.js";
import 'dotenv/config';

const getUser = (filterQuery) => User.findOne(filterQuery);

const register = async (userData) => {
    const user = await getUser({ email: userData.email });

    if (user) {
        throw new Error('User with this email already exists!');
    }

    if (userData.password !== userData.rePass) {
        throw new Error('Password do not match!')
    }

    const hash = await bcrypt.hash(userData.password, 12);
    userData.password = hash;

    return User.create(userData);
}

const login = async (userData) => {
    const user = await getUser({ email: userData.email });

    if (!user) {
        throw new Error('Invalid email or password!');
    }

    const isPasswordValid = await bcrypt.compare(userData.password, user.password);

    if (!isPasswordValid) {
        throw new Error('Invalid email or password!');
    }

    const payload = {
        _id: user._id,
        name: user.name,
    }

    return await jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' });
}

export {
    register,
    login
}