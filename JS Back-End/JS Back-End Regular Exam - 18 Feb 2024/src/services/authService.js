import { User } from '../model/User.js';
import bcrypt from 'bcrypt';
import * as jwt from '../lib/jwt.js';
import 'dotenv/config';

export const register = async (newUser) => {
    const existingUser = await User.findOne({ email: newUser.email });

    if (existingUser) {
        throw new Error('User already exists!');
    }

    if (newUser.password !== newUser.rePass) {
        throw new Error('Password missmatch!');
    }

    newUser.password = await bcrypt.hash(newUser.password, 12);

    return User.create({ email: newUser.email, password: newUser.password });
}

export const login = async (loginData) => {
    const existingUser = await User.findOne({ email: loginData.email });

    if (!existingUser) {
        throw new Error('Invalid email or password!');
    }

    const isPassValid = await bcrypt.compare(loginData.password, existingUser.password);

    if (!isPassValid) {
        throw new Error('Invalid email or password!');
    }

    const payload = {
        _id: existingUser._id,
        email: existingUser.email,
    }

    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' });
}