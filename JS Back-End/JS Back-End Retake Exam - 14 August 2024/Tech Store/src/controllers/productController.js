import express from "express";
import * as productService from "../services/productService.js";
import mongoose from "mongoose";

const router = express.Router();

router.get('/create', (req, res) => {
    res.render('product/create');
});

router.post('/create', async (req, res) => {
    const product = {
        ...req.body,
        owner: req.user._id
    };

    try {
        await productService.create(product);

        res.redirect('/');
    }
    catch (error) {
        console.log('Create Error\n', error);
    }
});

router.get('/catalog', async (req, res) => {
    try {
        const products = await productService.getAll().lean();

        console.log(products)

        res.render('product/catalog', { products });
    }
    catch (error) {
        console.log('Error getting device catalog');
    }
});


router.get('/:productId/details', async (req, res) => {
    try {
        const product = await productService.getOne(req.params.productId).lean();
        const isOwner = req.user?._id == product.owner._id;
        const userId = new mongoose.Types.ObjectId(req.user?._id);
        const hasPrefered = product.preferList.some(preferedUser => preferedUser._id.equals(userId));

        res.render('product/details', { product, isOwner, hasPrefered });
    }
    catch (error) {
        console.log('Error getting DEVICE!')
    }
});

router.get('/:productId/prefer', async (req, res) => {
    const productId = req.params.productId;
    try {
        const product = await productService.getOne(productId)

        const userAlreadyPrefered = product.preferList.some(preferedUser => preferedUser._id.equals(req.user._id));

        if (userAlreadyPrefered) {
            throw new Error('You already prefered this device');
        }

        await productService.preferDevice(productId, req.user._id);

        res.redirect(`/products/${productId}/details`)
    }
    catch (error) {
        console.log(error.message)
    }
});

export { router };