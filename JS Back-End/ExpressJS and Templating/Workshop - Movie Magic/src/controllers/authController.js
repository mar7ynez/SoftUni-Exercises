const router = require('express').Router();
const authService = require('../services/authService');
const getErrorMsg = require('../utils/errorUtils');

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', (req, res) => {
    const { email, password } = req.body;

    authService.register(req.body)
        .then(() => {
            res.redirect('/');
        })
        .catch(error => {
            res.render('auth/register', { error: getErrorMsg(error), email, password })
        });
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', (req, res) => {
    authService.login(req.body)
        .then(token => {
            res.cookie('user', token);

            res.redirect('/');
        })
        .catch(error => {
            res.render('auth/login', { error: getErrorMsg(error) });
        });
});

router.get('/logout', (req, res) => {
    res.clearCookie('user');
    res.redirect('/');
});

module.exports = router;