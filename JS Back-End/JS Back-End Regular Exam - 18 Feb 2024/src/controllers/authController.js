import { Router } from "express";
import * as authService from "../services/authService.js";

const authController = Router();

authController.get('/login', (req, res) => {
    res.render('auth/login');
});

authController.post('/login', async (req, res) => {
    try {
        const token = await authService.login(req.body);

        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
    }
    catch (error) {
        console.log('Login error!\n', error.message);
    }
});

authController.get('/register', (req, res) => {
    res.render('auth/register');
});

authController.post('/register', async (req, res) => {
    try {
        await authService.register(req.body);

        res.redirect('/');
    }
    catch (error) {
        console.log('Error registering new user!\n', error);
    }
});

authController.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

export { authController };