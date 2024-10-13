import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import * as jwt from "../lib/jwt.js";
import 'dotenv/config';


const generateToken = async (user) => {
    const { email, _id } = user;

    console.log(user);

    return await jwt.sign({ email, _id }, process.env.SECRET_KEY, { expiresIn: '2h' });
}

export const register = async (userData) => {
    const { email, password, rePass } = userData;

    const user = await User.findOne({ email });

    if (user) {
        throw new Error('User already exists!');
    }

    if (password !== rePass) {
        throw new Error('Password missmatch!');
    }

    const hashPass = await bcrypt.hash(userData.password, 12);

    const newUser = await User.create({ email, password: hashPass });

    const token = await generateToken(newUser);

    return {
        email: newUser.email,
        accessToken: token,
        _id: newUser._id
    }
}

export const login = async (userData) => {
    const { email, password } = userData;

    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Invalid user or password!');
    }

    const isPassValid = await bcrypt.compare(password, user.password);

    if (!isPassValid) {
        throw new Error('Invalid user or password!');
    }

    const token = await generateToken(user);

    return {
        email: user.email,
        accessToken: token,
        _id: user._id
    }
}