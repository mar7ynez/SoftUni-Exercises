import express from "express";
import * as productService from "../services/productService.js";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const products = await productService.getAll().lean();
        res.render('home/home', { products });
    }
    catch (error) {
        res.render('home/home', { error: getErrorMsg(error) });
    }
});

router.get('/about', (req, res) => {
    res.render('home/about');
});

export { router };