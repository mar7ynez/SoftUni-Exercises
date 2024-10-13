import express from "express";
import * as userService from "../services/userService.js";

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const newUser = await userService.register(req.body);

        res.json(newUser);
    }
    catch (error) {
        console.log('Handle register error here!\n', error);
    }
});

router.post('/login', async (req, res) => {
    try {
        console.log(req.body)
        const user = await userService.login(req.body);

        res.json(user);
    }
    catch (error) {
        console.log('Handle login error here!\n', error);
    }
});

router.get('/logout', (req, res) => {
    res.json({ ok: true });
});

export { router };