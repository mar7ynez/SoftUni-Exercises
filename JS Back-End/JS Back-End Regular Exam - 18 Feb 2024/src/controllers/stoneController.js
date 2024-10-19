import { Router } from "express";
import * as stoneService from "../services/stoneService.js";
import { isOwner } from "../middlewares/authMiddleware.js";

const stoneController = Router();

stoneController.get('/create', (req, res) => {
    res.render('stone/create');
});

stoneController.post('/create', async (req, res) => {
    const stoneData = {
        ...req.body,
        owner: req.user._id
    }

    try {
        await stoneService.create(stoneData);

        res.redirect('/');
    }
    catch (error) {
        console.log('Error creating new post!\n', error.message);
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
        console.log('Error getting stone data!\n', error);
    }
});

stoneController.get('/:stoneId/edit', async (req, res) => {
    try {
        const stone = await stoneService.getOne(req.params.stoneId).lean();

        res.render('stone/edit', { stone });
    }
    catch (error) {
        console.log('Error getting stone data!\n', error);
    }
});

stoneController.post('/:stoneId/edit', async (req, res) => {
    try {
        const updatedStoneData = await stoneService.edit(req.params.stoneId, req.body);

        res.redirect(`/stones/${req.params.stoneId}/details`);
    }
    catch (error) {
        console.log('Error updating stone data!\n', error);
    }
});

stoneController.get('/:stoneId/like', async (req, res) => {
    const stoneId = req.params.stoneId;

    try {
        await stoneService.like(stoneId, req.user._id);

        res.redirect(`/stones/${stoneId}/details`);
    }
    catch (error) {
        console.log('Cannot like this item!\n', error);
    }
});

stoneController.get('/:stoneId/delete', async (req, res) => {
    try {
        await stoneService.remove(req.params.stoneId);

        res.redirect('/');
    }
    catch (error) {
        console.log('Error deleting listed gem!\n', error);
    }
});

export { stoneController };