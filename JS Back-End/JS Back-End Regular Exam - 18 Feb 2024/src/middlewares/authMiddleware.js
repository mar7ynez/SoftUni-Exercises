import * as jwt from '../lib/jwt.js';
import 'dotenv/config';
import * as stoneService from '../services/stoneService.js';

export const auth = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (!token) {
        return next();
    }

    try {
        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

        req.user = decodedToken;
        res.locals.isAuthenticated = true;

        next();
    }
    catch (error) {
        res.clearCookie('auth');
        res.redirect('/user/login');
    }
}

export const isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/user/login');
    }

    next();
}

export const isOwner = async (req, res, next) => {
    const stone = await stoneService.getOne(req.params.stoneId);

    if (!stone) {
        throw new Error('Error getting stone data!');
    }

    if (stone.owner == req.user?._id) {
        req.user.isOwner = true;
    }

    next();
}