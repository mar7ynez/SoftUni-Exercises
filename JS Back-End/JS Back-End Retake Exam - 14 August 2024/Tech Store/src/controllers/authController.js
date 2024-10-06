import express from "express";
import * as authService from "../services/authService.js"
import { getErrorMsg } from "../utils/errorUtils.js";

const router = express.Router();

router.get('/register', (req, res) => {
    try {
        if (req.user) {
            throw new Error('You cannot reach this page while logged in!')
        }

        res.render('auth/register');
    }
    catch (error) {
        res.render('404', { error: getErrorMsg(error) });
    }
});

router.post('/register', async (req, res) => {
    const userData = req.body;

    try {
        await authService.register(userData)

        res.redirect('/');
    }
    catch (error) {
        res.render('auth/register', { error: getErrorMsg(error) });
    }
});

router.get('/login', (req, res) => {
    try {
        if (req.user) {
            throw new Error('You cannot reach this page while logged in!')
        }

        res.render('auth/login');
    }
    catch (error) {
        res.render('404', { error: getErrorMsg(error) });
    }
});

router.post('/login', async (req, res) => {
    const userData = req.body;

    try {
        const token = await authService.login(userData);

        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
    }
    catch (error) {
        res.render('auth/login', { error: getErrorMsg(error) });
    }
});

router.get('/logout', (req, res) => {
    try {
        if (!req.user) {
            throw new Error('You\'ve been already logged out!');
        }

        res.clearCookie('auth');
        res.redirect('/');
    }
    catch (error) {
        res.render('404', { error: getErrorMsg(error) });
    }
});


export { router };