const fs = require('fs').promises;
const path = require('path');

const breedsDataPath = path.join('./data', 'breeds.json');

function getAllBreeds() {
    return fs.readFile(breedsDataPath, { encoding: 'utf-8' })
        .then(breeds => JSON.parse(breeds))
        .catch(error => {
            console.error(`Error getting breeds: ${error.message}`);
        });
}

function saveBreed(newBreed) {
    getAllBreeds()
        .then(breeds => {
            breeds.push(newBreed);

            fs.writeFile(breedsDataPath, JSON.stringify(breeds, null, 2));
        });
}

function updateBreedOptions(breedPart) {
    return Promise.all([
        breedPart,
        getAllBreeds()
    ])
        .then(([breedPart, allBreeds]) => {
            const breedOptions = allBreeds.map(breed => breedPart.replaceAll('{{breed}}', breed.breed));

            return breedOptions;
        })
        .catch(error => {
            console.error(`Error generating breed options: ${error.message}`);
        });
}

module.exports = {
    saveBreed,
    updateBreedOptions
}