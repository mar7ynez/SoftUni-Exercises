const router = require('express').Router();
const castServices = require('../services/castService');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/create', isAuth, (req, res) => {
    res.render('cast/create');
});

router.post('/create', (req, res) => {
    castServices.create(req.body)
        .then(() => {
            res.redirect('/');
        });
})
module.exports = router;