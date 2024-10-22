import { Router } from "express";
import * as authService from "../services/authService.js";
import { getErrorMsg } from "../utils/getErrorMessage.js";
import { isLogged } from "../middlewares/authMiddleware.js";

const authController = Router();

authController.get('/login', isLogged, (req, res) => {
    res.render('auth/login');
});

authController.post('/login', async (req, res) => {
    try {
        const token = await authService.login(req.body);

        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
    }
    catch (error) {
        res.render('auth/login', { error: getErrorMsg(error) });
    }
});

authController.get('/register', isLogged, (req, res) => {
    res.render('auth/register');
});

authController.post('/register', async (req, res) => {
    try {
        await authService.register(req.body);

        res.redirect('/');
    }
    catch (error) {
        res.render('auth/register', { error: getErrorMsg(error) });
    }
});

authController.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

export { authController };