const router = require('express').Router();

const homeController = require('./controllers/homeController');
const movieController = require('./controllers/movieController');
const castController = require('./controllers/castController');
const authController = require('./controllers/authController');

router.use(homeController);
router.use('/movie', movieController);
router.use('/cast', castController);
router.use('/user', authController);

router.get('*', (req, res) => {
    res.redirect('/404');
});

module.exports = router;