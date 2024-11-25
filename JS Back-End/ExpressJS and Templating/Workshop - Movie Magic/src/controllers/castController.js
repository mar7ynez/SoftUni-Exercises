const router = require('express').Router();
const castServices = require('../services/castService');
const { isAuth } = require('../middlewares/authMiddleware');
const getErrorMsg = require('../utils/errorUtils');

router.get('/create', isAuth, (req, res) => {
    res.render('cast/create');
});

router.post('/create', (req, res) => {
    castServices.create(req.body)
        .then(() => {
            res.redirect('/');
        })
        .catch(error => {
            res.render('cast/create', { error: getErrorMsg(error), ...req.body });
        });
})
module.exports = router;