const express = require('express');
const router = express.Router();

const breedService = require('../services/breedService');

router.get('/create', (req, res) => {
    res.render('breed');
});

router.post('/create', (req, res) => {
    const breedData = req.body;

    breedService.create(breedData)
        .then(() => {
            res.render('breed');
        })
        .catch(error => {
            console.log('Error adding new breed\n', error);
        });
});

module.exports = router;