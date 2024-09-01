const fs = require('fs').promises;
const path = require('path');
const querystring = require('querystring');

const dataPath = path.join('./data', 'catsData.json');

function getCats() {
    return fs.readFile(dataPath, { encoding: 'utf-8' })
        .then(cats => JSON.parse(cats))
        .catch(error => {
            console.error(`Error getting cats: ${error.message}`);
        });
}

function saveCat(newCat) {
    getCats()
        .then(cats => {
            newCat.id = cats[cats.length - 1].id + 1;

            cats.push(newCat);

            fs.writeFile(dataPath, JSON.stringify(cats, null, 2));
        });
}

function generateCatCards(catPart) {
    return Promise.all([
        catPart,
        getCats()
    ])
        .then(([catHtml, allCats]) => {
            const allCardsHtml = allCats.map(cat => {
                return Object.keys(cat).reduce((accumulator, key) => {
                    return accumulator.replaceAll(`{{${key}}}`, cat[key])
                }, catHtml)
            }).join('\n');

            return allCardsHtml;
        })
        .catch(error => {
            console.error(`Error generating cards: ${error.message}`);
        });
}

function getCatById(catId) {
    return fs.readFile(dataPath, { encoding: 'utf-8' })
        .then(catsData => {
            const allCats = JSON.parse(catsData);
            const foundCat = allCats.find(cat => cat.id === Number(catId));

            return foundCat;
        })
        .catch(error => console.error(`Cat not found: ${error.message}`));
}

function deleteCat(catId) {
    return fs.readFile(dataPath).
        then(catsData => {
            const updatedData = JSON.parse(catsData).filter(cat => cat.id !== Number(catId));

            fs.writeFile(dataPath, JSON.stringify(updatedData, null, 2));
        })
        .catch(error => console.error(`Error shelter the cat: ${error.message}`));
}

function populateTempForm(catData, catShelterTemp) {
    let populatedTemplate = catShelterTemp;

    populatedTemplate = Object.keys(catData).reduce((accumulator, key) => {
        return accumulator.replaceAll(`{{${key}}}`, catData[key]);
    }, populatedTemplate);

    return populatedTemplate;
}

function editCatData(editedData, catId) {
    getCats()
        .then(allCats => {
            let idxOfCurCatData = 0;

            allCats.forEach((cat, idx) => Number(cat.id) === Number(catId) ? idxOfCurCatData = Number(idx) : -1);

            editedData.id = idxOfCurCatData + 1;

            allCats.splice(Number(idxOfCurCatData), 1, editedData);

            fs.writeFile(dataPath, JSON.stringify(allCats, null, 2));
        })
}

module.exports = {
    getCats,
    saveCat,
    generateCatCards,
    getCatById,
    deleteCat,
    populateTempForm,
    editCatData
}
