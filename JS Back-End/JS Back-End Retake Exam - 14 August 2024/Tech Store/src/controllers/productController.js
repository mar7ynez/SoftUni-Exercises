import express from "express";
import * as productService from "../services/productService.js";
import mongoose from "mongoose";
import { getErrorMsg } from "../utils/errorUtils.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get('/create', isAuth, (req, res) => {
    res.render('product/create');
});

router.post('/create', isAuth, async (req, res) => {
    const product = {
        ...req.body,
        owner: req.user._id
    };

    try {
        await productService.create(product);

        res.redirect('/');
    }
    catch (error) {
        res.render('product/create', { error: getErrorMsg(error) });
    }
});

router.get('/catalog', async (req, res) => {
    try {
        const products = await productService.getAll().lean();

        res.render('product/catalog', { products });
    }
    catch (error) {
        res.render('product/catalog', { error: getErrorMsg(error) });
    }
});


router.get('/:productId/details', async (req, res) => {
    try {
        const product = await productService.getOne(req.params.productId).lean();
        const isOwner = req.user?._id == product.owner._id;
        const userId = new mongoose.Types.ObjectId(req.user?._id);

        const hasPrefered = await productService.hasPrefered(userId, req.params.productId);

        res.render('product/details', { product, isOwner, hasPrefered });
    }
    catch (error) {
        res.render('product/details', { error: getErrorMsg(error) });
    }
});

router.get('/:productId/prefer', async (req, res) => {
    const productId = req.params.productId;
    try {
        const userId = new mongoose.Types.ObjectId(req.user?._id);

        const userAlreadyPrefered = await productService.hasPrefered(userId, req.params.productId);

        if (userAlreadyPrefered) {
            throw new Error('You already prefered this device');
        }

        await productService.preferDevice(productId, req.user._id);

        res.redirect(`/products/${productId}/details`)
    }
    catch (error) {
        res.render('404', { error: getErrorMsg(error) });
    }
});

router.get('/:productId/delete', isAuth, async (req, res) => {
    try {
        const product = await productService.getOne(req.params.productId).lean();
        const isOwner = req.user?._id == product.owner._id;

        if (!isOwner) {
            throw new Error('You cannot reach this page, you are not the owner of the product!');
        }

        await productService.deleteProduct(req.params.productId);

        res.redirect('/');
    }
    catch (error) {
        res.render('home/home', { error: getErrorMsg(error) });
    }
});

router.get('/:productId/edit', isAuth, async (req, res) => {
    try {
        const product = await productService.getOne(req.params.productId).lean();
        const isOwner = req.user?._id == product.owner._id;

        if (!isOwner) {
            throw new Error('You cannot reach this page, you are not the owner of the product!');
        }

        res.render('product/edit', { product });
    }
    catch (error) {
        res.render('404', { error: getErrorMsg(error) });
    }
});

router.post('/:productId/edit', async (req, res) => {
    try {
        const productId = req.params.productId;

        Object.values(req.body).forEach(field => {
            if (!field) {
                throw new Error('All fields are required!');
            }
        });

        await productService.edit(productId, req.body);

        res.redirect(`/products/${productId}/details`);
    }
    catch (error) {
        const product = await productService.getOne(req.params.productId).lean();

        res.render('product/edit', { product, error: getErrorMsg(error) });
    }
});

export { router };