function garage(data) {

    let carGarage = {};

    for (let garage of data) {
        let details = garage.split(' - ');
        let garageNumber = details[0];
        let carDetails = details[1].split(', ');

        if (!carGarage.hasOwnProperty(garageNumber)) {
            carGarage[garageNumber] = [];

        }
        carGarage[garageNumber].push(carDetails);
    }
    let keys = Object.keys(carGarage)

    for (let key of keys) {
        console.log(`Garage № ${key}`);

        for (let curCar of carGarage[key]) {
            console.log(`--- ${curCar.join(', ').replace(/: /g, ' - ')}`);

        }
    }
}
garage(['1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol']);