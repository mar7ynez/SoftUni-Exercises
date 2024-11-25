function travelTime(data) {

    const findObjByName = (country, name) => travelRegister[country].find(obj => obj.name === name)

    let travelRegister = {};

    for (let destInfo of data) {
        let [country, townName, travelCost] = destInfo.split(' > ');
        travelCost = Number(travelCost)

        if (!travelRegister.hasOwnProperty(country)) {
            travelRegister[country] = [];

        }

        const obj = findObjByName(country, townName);
        if (!obj) {
            travelRegister[country].push({ name: townName, price: travelCost });

        } else {
            if (obj.price > travelCost) {
                obj.price = travelCost;

            }
        }
    }
    let keys = Object.keys(travelRegister).sort((a, b) => a.localeCompare(b));

    keys.forEach(key => {
        const result = travelRegister[key].sort((a, b) => a.price - b.price);

        const currResult = [`${key} ->`];
        for (const obj of result) {
            currResult.push(`${obj.name} -> ${obj.price}`);

        }
        console.log(currResult.join(" "))
    });
}
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);