function townsToJSON(data) {

    let townRegister = [];

    for (let i = 1; i < data.length; i++) {
        let [, townName, latitude, longitude] = data[i].split(/\s*\|\s*/g);
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        townRegister.push({ Town: townName, Latitude: Number(latitude), Longitude: Number(longitude) });
    }
    console.log(JSON.stringify(townRegister));
}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);