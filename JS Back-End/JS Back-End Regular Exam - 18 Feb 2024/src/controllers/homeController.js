import { Router } from "express";
import * as stoneService from '../services/stoneService.js';

const homeController = Router();

homeController.get('/', async (req, res) => {
    try {
        const lastThreeDocs = await stoneService.getLastThreeRecords().lean();

        res.render('home', { stones: lastThreeDocs });
    }
    catch (error) {
        next(error);
    }
});

homeController.get('/dashboard', async (req, res) => {
    try {
        const stones = await stoneService.getAll({}).lean();

        res.render('home/dashboard', { stones });
    }
    catch (error) {
        next(error);
    }
});

homeController.get('/search', async (req, res) => {

    try {
        const stones = await stoneService.getAll(req.query).lean();

        res.render('home/search', { stones });
    }
    catch (error) {
        next(error);
    }
});

export { homeController };