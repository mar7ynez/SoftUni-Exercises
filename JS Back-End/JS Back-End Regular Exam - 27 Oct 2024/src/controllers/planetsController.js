import { Router } from "express";
import * as planetServices from '../services/planetsServices.js';
import { isAuth, isOwner, ownerGuard } from "../middlewares/authMiddlewares.js";
import { getErrorMsg } from "../utils/getErrorMsg.js";

const planetsController = Router();

planetsController.get('/create', isAuth, (req, res) => {
    res.render('planets/create', { title: 'Create' });
});

planetsController.post('/create', isAuth, async (req, res) => {
    const planetData = {
        ...req.body,
        owner: req.user._id
    }

    try {
        await planetServices.create(planetData);
        res.redirect('/catalog');
    } catch (error) {
        res.render('planets/create', { planetData, error: getErrorMsg(error) });
    }
});

planetsController.get('/:planetId/details', isOwner, async (req, res, next) => {
    try {
        const planet = await planetServices.getOne(req.params.planetId).lean();
        const liked = await planetServices.hasLiked(req.params.planetId, req.user?._id);

        const isLiked = Boolean(liked.length);

        res.render('planets/details', { planet, isOwner: req.user?.isOwner, isLiked, title: 'Details' });
    } catch (error) {
        next(error);
    }
});

planetsController.get('/:planetId/like', isAuth, isOwner, async (req, res, next) => {
    const planetId = req.params.planetId;

    try {
        if (req.user.isOwner) {
            throw new Error('You cannot reach this page!');
        }

        await planetServices.like(planetId, req.user._id);

        res.redirect(`/planets/${planetId}/details`);
    } catch (error) {
        next(error);
    }
});

planetsController.get('/:planetId/delete', ownerGuard, async (req, res, next) => {
    try {
        await planetServices.remove(req.params.planetId);

        res.redirect('/catalog');
    } catch (error) {
        next(error);
    }
});

planetsController.get('/:planetId/edit', ownerGuard, async (req, res, next) => {
    try {
        const planet = await planetServices.getOne(req.params.planetId).lean();
        res.render('planets/edit', { planet, title: 'Edit' });
    } catch (error) {
        next(error);
    }
});

planetsController.post('/:planetId/edit', ownerGuard, async (req, res, next) => {
    const planetId = req.params.planetId;

    try {
        await planetServices.edit(planetId, req.body);
        res.redirect(`/planets/${planetId}/details`);
    } catch (error) {
        res.render('planets/edit', { planet: req.body, error: getErrorMsg(error) });
    }
});

export { planetsController };