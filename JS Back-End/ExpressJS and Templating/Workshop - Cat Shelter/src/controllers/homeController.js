const express = require('express');
const router = express.Router();

const catService = require('../services/catService');

router.get('/', (req, res) => {
    const { search } = req.query;

    catService.search(search).lean()
        .then(cats => {
            res.render('home', { cats });
        })
        .catch(error => {
            console.log('Error cannot fetch the data\n', error);
        });
});

module.exports = router;