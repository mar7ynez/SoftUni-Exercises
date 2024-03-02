function minerTask(data) {

    let minerStorage = {};

    for (let i = 0; i < data.length; i += 2) {
        let material = data[i];
        let quantity = Number(data[i + 1]);

        if (!minerStorage.hasOwnProperty(material)) {
            minerStorage[material] = 0;

        }
        minerStorage[material] += quantity;
    }

    for (let material in minerStorage) {
        console.log(`${material} -> ${minerStorage[material]}`);

    }
}
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);