const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'catsData.json');

function getCats() {
    const data = fs.readFileSync(dataPath);
    return JSON.parse(data);
}

function saveCat(newCat) {
    let cats = getCats();
    cats.push(newCat);
    fs.writeFileSync(dataPath, JSON.stringify(cats, null, 2));
}

module.exports = {
    getCats,
    saveCat,
}
