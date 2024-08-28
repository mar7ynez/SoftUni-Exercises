const fs = require('fs').promises;
const path = require('path');

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

module.exports = {
    getCats,
    saveCat,
    generateCatCards
}
