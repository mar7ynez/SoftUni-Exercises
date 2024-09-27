const router = require('express').Router();
const authService = require('../services/authService');

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', (req, res) => {
    authService.register(req.body)
        .then(() => {
            res.redirect('/');
        })
        .catch(error => {
            console.log('Error cannot register new user\n', error);

            res.status(500).send(error.message);
        });
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', (req, res) => {
    authService.login(req.body)
        .then(token => {
            console.log(token);
        })
});

module.exports = router;