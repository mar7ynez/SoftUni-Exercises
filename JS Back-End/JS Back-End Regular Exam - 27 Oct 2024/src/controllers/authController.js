import { Router } from 'express';
import * as authService from '../services/authServices.js';
import { getErrorMsg } from '../utils/getErrorMsg.js';
import { isAuth, isLogged } from '../middlewares/authMiddlewares.js';

const authController = Router();

authController.get('/register', isLogged, (req, res) => {
    res.render('auth/register', { title: 'Register' });
});

authController.post('/register', async (req, res) => {
    try {
        const token = await authService.register(req.body);

        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
    }
    catch (error) {
        res.render('auth/register', { userData: req.body, error: getErrorMsg(error) });

    }
});

authController.get('/login', isLogged, (req, res) => {
    res.render('auth/login', { title: 'Login' });
});

authController.post('/login', async (req, res) => {
    try {
        const token = await authService.login(req.body);

        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
    }
    catch (error) {
        res.render('auth/login', { userData: req.body, error: getErrorMsg(error) });
    }
});

authController.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

export { authController };