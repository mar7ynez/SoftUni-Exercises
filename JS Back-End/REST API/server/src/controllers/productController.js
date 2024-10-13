import express from "express";
import * as productService from "../services/productService.js";
import { isOwner, isAuth } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const ownerId = req.query.where?.split("\"").at(1);

        const products = await productService.getAll(ownerId);

        res.json(products);
    }
    catch (error) {
        console.log('Handle get products ERROR!\n', error);
    }
});

router.post('/', isAuth, async (req, res) => {
    const productData = {
        ...req.body,
        _ownerId: req.user._id
    }

    try {
        const newProduct = await productService.create(productData);

        res.json(newProduct);
    }
    catch (error) {
        console.log('Handle create error!\n', error);
    }
});

router.get('/:productId', async (req, res) => {
    try {
        const product = await productService.getOne(req.params.productId);

        res.json(product);
    }
    catch (error) {
        console.log(error);
    }
});

router.put('/:productId', isAuth, isOwner, async (req, res) => {
    try {
        const updatedData = await productService.update(req.params.productId, req.body);

        res.json(updatedData);
    }
    catch (error) {
        console.log('Handle edit Error!\n', error);
    }
});

router.delete('/:productId', isAuth, isOwner, async (req, res) => {
    try {
        await productService.remove(req.params.productId);

        res.json({ ok: true });
    }
    catch (error) {
        console.log('Handle delete Error!\n', error);
    }
});

export { router };