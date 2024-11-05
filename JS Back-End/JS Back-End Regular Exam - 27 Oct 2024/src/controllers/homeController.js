import { Router } from "express";
import * as planetServices from '../services/planetsServices.js';

const homeController = Router();

homeController.get('/', (req, res) => {
    res.render('home/home', { title: 'Home' });
});

homeController.get('/catalog', async (req, res, next) => {
    try {
        const planets = await planetServices.getAll().lean();

        res.render('home/catalog', { planets, title: 'Catalog' });
    } catch (error) {
        console.log(error);

        next(error);
    }
});

homeController.get('/search', async (req, res, next) => {
    try {
        const { name, solarSystem } = req.query;

        const planets = await planetServices.search(name, solarSystem).lean();

        res.render('home/search', { planets, title: 'Search'});
    }
    catch (error) {
        next(error);
    }
});

export { homeController };