import { Router } from "express";
import * as authService from "../services/authService.js";
import { getErrorMsg } from "../utils/getErrorMessage.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const authController = Router();

authController.get('/login', isAuth, (req, res) => {
    res.render('auth/login');
});

authController.post('/login', isAuth, async (req, res) => {
    try {
        const token = await authService.login(req.body);

        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
    }
    catch (error) {
        res.render('auth/login', { error: getErrorMsg(error) });
    }
});

authController.get('/register', isAuth, (req, res) => {
    res.render('auth/register');
});

authController.post('/register', isAuth, async (req, res) => {
    try {
        await authService.register(req.body);

        res.redirect('/');
    }
    catch (error) {
        console.log('Error registering new user!\n', error);
    }
});

authController.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

export { authController };