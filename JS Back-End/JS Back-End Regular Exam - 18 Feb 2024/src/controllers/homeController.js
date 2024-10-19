import { Router } from "express";
import * as stoneService from '../services/stoneService.js';

const homeController = Router();

homeController.get('/', async (req, res) => {
    try {
        const lastThreeDocs = await stoneService.getLastThreeRecords().lean();

        res.render('home', { stones: lastThreeDocs });
    }
    catch (error) {
        console.log('Error getting last 3 records!\n', error);
    }
});

homeController.get('/dashboard', async (req, res) => {
    try {
        const stones = await stoneService.getAll({}).lean();

        res.render('home/dashboard', { stones });
    }
    catch (error) {
        console.log('Error getting stones!\n', error);
    }
});

homeController.get('/search', async (req, res) => {
    console.log(req.query);

    const stones = await stoneService.getAll(req.query).lean();

    console.log(stones)

    res.render('home/search', { stones });
});

export { homeController };