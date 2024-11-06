import * as jwt from '../lib/jwt.js';

export const generateToken = (userData) => {
    const payload = {
        _id: userData._id,
        email: userData.email,
    }

    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' });
}