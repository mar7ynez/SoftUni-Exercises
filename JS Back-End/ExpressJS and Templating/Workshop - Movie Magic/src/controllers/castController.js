const router = require('express').Router();
const castServices = require('../services/castService');

router.get('/create/cast', (req, res) => {
    res.render('cast/create');
});

router.post('/create/cast', (req, res) => {
    castServices.create(req.body)
        .then(() => {
            res.redirect('/');
        });
})
module.exports = router;