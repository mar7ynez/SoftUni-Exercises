const express = require('express');
const router = express.Router();

const homeController = require('./controllers/homeController');
const catController = require('./controllers/catController');
const breedControler = require('./controllers/breedControler');

router.use(homeController);
router.use('/cats', catController);
router.use('/breeds', breedControler);

module.exports = router;