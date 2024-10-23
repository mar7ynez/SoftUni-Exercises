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
    try {
        const stone = await stoneService.getStoneById(req.params.stoneId);

        if (req.user?._id == stone.owner) {
            req.user.isOwner = true;
        }

        next();
    }
    catch (error) {
        next(error);
    }
}

export const ownerGuard = async (req, res, next) => {
    try {
        const stone = await stoneService.getStoneById(req.params.stoneId);

        if (stone.owner != req.user?._id) {
            const error = new Error('Something went wrong!');
            error.status = 404;

            throw error;
        }

        req.stoneData = stone

        next();

    } catch (error) {
        next(error);
    }
}

export const isLogged = (req, res, next) => {
    if (req.user) {
        return res.redirect('/404');
    }

    next();
}