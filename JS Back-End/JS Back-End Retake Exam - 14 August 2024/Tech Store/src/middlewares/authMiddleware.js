import * as jwt from "../lib/jwt.js";
import "dotenv/config";

export const auth = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (!token) {
        return next();
    }

    try {
        const decodedToken = await jwt.verify(token, process.env.SECRET_KEY)

        req.user = decodedToken;
        res.locals.isAuthenticated = true

        next();
    }
    catch (error) {
        res.clearCookie('auth');
        res.redirect('/user/login');
    }
}

export const isAuth = () => {
    if (!req.user) {
        return res.redirect('/user/login');
    }

    next();
}