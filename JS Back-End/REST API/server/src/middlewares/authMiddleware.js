import * as jwt from "../lib/jwt.js";
import "dotenv/config";
import * as productService from "../services/productService.js";

export const auth = async (req, res, next) => {
    const token = req.headers['x-authorization'];

    if (!token) {
        return next();
    }

    try {
        const decodedToken = await jwt.verify(token, process.env.SECRET_KEY);

        req.user = decodedToken;

        next();
    }
    catch (error) {
        console.log(error);
    }
}

export const isOwner = async (req, res, next) => {
    try {
        const product = await productService.getOne(req.params.productId);

        if (!product) {
            return res.json({ error: 'Product not found!' });
        }

        if (product._ownerId != req.user._id) {
            return res.json({ error: 'You cannot do this, you are not the owner!' });
        }

        next();
    }
    catch (error) {
        console.log('Handle owner check Error!\n', error);
    }
}

export const isAuth = (req, res, next) => {
    if (!req.user) {
        return res.json({ error: 'User is not authenticated!' });
    }

    next();
};