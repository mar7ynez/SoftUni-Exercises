const fs = require('fs').promises;
const path = require('path');

const dataPath = path.join(__dirname, 'catsData.json');

function getCats() {
    return fs.readFile(dataPath, { encoding: 'utf-8' })
        .then(cats => JSON.parse(cats))
        .catch(error => {
            console.error(error);
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

function generateCatCards(catPart, allCats) {
    return Promise.all([
        catPart,
        allCats
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
            console.error(error);
        });
}

module.exports = {
    getCats,
    saveCat,
    generateCatCards
}
