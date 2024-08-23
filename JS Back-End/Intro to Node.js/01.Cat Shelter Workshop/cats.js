const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'catsData.json');

const getCats = () => {
    const data = fs.readFileSync(dataPath);

    return JSON.parse(data);
}

const saveCat = (newCat) => {
    fs.writeFileSync(dataPath, JSON.stringify(newCat));
}

module.exports = {
    getCats,
    saveCat,
}
