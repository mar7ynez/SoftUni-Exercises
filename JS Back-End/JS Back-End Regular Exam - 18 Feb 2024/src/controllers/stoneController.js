import { Router } from "express";
import * as stoneService from "../services/stoneService.js";
import { isAuth, isOwner, ownerGuard } from "../middlewares/authMiddleware.js";
import { getErrorMsg } from "../utils/getErrorMessage.js";

const stoneController = Router();

stoneController.get('/create', isAuth, (req, res) => {
    res.render('stone/create');
});

stoneController.post('/create', isAuth, async (req, res) => {
    const stoneData = {
        ...req.body,
        owner: req.user._id
    }

    try {
        await stoneService.create(stoneData);

        res.redirect('/');
    }
    catch (error) {
        res.render('stone/create', { stone: stoneData, error: getErrorMsg(error) });
    }
});

stoneController.get('/:stoneId/details', isOwner, async (req, res) => {
    const stoneId = req.params.stoneId;

    try {
        const stone = await stoneService.getOne(stoneId).lean();
        const stoneLikes = await stoneService.hasLiked(stoneId, req.user?._id);
        const liked = Boolean(stoneLikes.length);

        res.render('stone/details', { stone, isOwner: req.user?.isOwner, liked });
    }
    catch (error) {
        next(error);
    }
});

stoneController.get('/:stoneId/edit', isAuth, ownerGuard, async (req, res) => {
    try {
        const stone = await stoneService.getOne(req.params.stoneId).lean();

        res.render('stone/edit', { stone });
    }
    catch (error) {
        next(error);
    }
});

stoneController.post('/:stoneId/edit', isAuth, ownerGuard, async (req, res) => {
    try {
        await stoneService.edit(req.params.stoneId, req.body);

        res.redirect(`/stones/${req.params.stoneId}/details`);
    }
    catch (error) {
        next(error);
    }
});

stoneController.get('/:stoneId/like', isAuth, async (req, res) => {
    const stoneId = req.params.stoneId;

    try {
        await stoneService.like(stoneId, req.user._id);

        res.redirect(`/stones/${stoneId}/details`);
    }
    catch (error) {
        next(error);
    }
});

stoneController.get('/:stoneId/delete', ownerGuard, async (req, res) => {
    try {
        await stoneService.remove(req.params.stoneId);

        res.redirect('/');
    }
    catch (error) {
        next(error);
    }
});

export { stoneController };