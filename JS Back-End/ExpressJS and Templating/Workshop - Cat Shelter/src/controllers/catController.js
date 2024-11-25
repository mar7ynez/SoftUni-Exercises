const express = require('express');
const router = express.Router();

const catService = require('../services/catService');
const breedService = require('../services/breedService');

router.get('/create', (req, res) => {
    breedService.getAll().lean()
        .then(breeds => {
            res.render('cat', { breeds });
        })
        .catch(error => {
            console.log('Error fetching breeds data\n', error);
        });
});

router.post('/create', (req, res) => {
    const catData = req.body;

    catService.create(catData)
        .then(() => {
            res.redirect('/');
        })
        .catch(error => {
            console.log('Error while adding new cat\n', error);
        });
});

router.get('/:catId/shelter', (req, res) => {
    catService.getOne(req.params.catId).lean()
        .then(cat => {
            res.render('shelter', cat);
        })
        .catch(error => {
            console.log('Error fetching cat data\n', error);
        });
});

router.post('/:catId/shelter', (req, res) => {
    catService.deleteOne(req.params.catId)
        .then(() => {
            res.redirect('/');
        })
        .catch(error => {
            console.log('Error deleting the cat\n', error);
        });
});

router.get('/:catId/edit', (req, res) => {
    Promise.all([
        catService.getOne(req.params.catId).lean(),
        breedService.getAll().lean()
    ])
        .then(([cat, breeds]) => {
            res.render('cat/editCat', { catData: cat, breeds });
        })
        .catch(error => {
            console.log('Error fetching the data\n', error);
        });
});

router.post('/:catId/edit', (req, res) => {
    const editedCat = req.body;
    catService.update(req.params.catId, editedCat, { new: true })
        .then(() => {
            res.redirect('/');
        })
        .catch(error => {
            console.log('Error editing the cat\n', error);
        });
});

module.exports = router;