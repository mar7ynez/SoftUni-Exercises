function needForSpeed(data) {

    data.shift();
    let parkingLot = [];
    let command = data.shift();

    while (command !== 'Stop') {
        if (command.includes('|')) {
            let [carName, mileage, fuel] = command.split('|');
            parkingLot[carName] = { km: Number(mileage), fuelIn: Number(fuel) };

        } else if (command.includes('Drive')) {
            let carName = command.split(':')[1].trim();
            let distance = command.split(':')[2].trim();
            let fuel = command.split(':')[3].trim();

            if (parkingLot[carName].fuelIn >= Number(fuel)) {
                parkingLot[carName].km += Number(distance);
                parkingLot[carName].fuelIn -= Number(fuel);
                console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

                if (parkingLot[carName].km >= 100000) {
                    delete parkingLot[carName];
                    console.log(`Time to sell the ${carName}!`);

                }
            } else {
                console.log('Not enough fuel to make that ride');

            }

        } else if (command.includes('Refuel')) {
            let carName = command.split(':')[1].trim();
            let refuel = command.split(':')[2].trim();

            if (parkingLot[carName].fuelIn + Number(refuel) > 75) {
                refuel = 75 + Number(refuel) - (parkingLot[carName].fuelIn + Number(refuel));

            }
            parkingLot[carName].fuelIn += Number(refuel)
            console.log(`${carName} refueled with ${refuel} liters`);

        } else if (command.includes('Revert')) {
            let carName = command.split(':')[1].trim();
            let decreaseKm = command.split(':')[2].trim();

            if (parkingLot[carName].km - Number(decreaseKm) < 10000) {
                parkingLot[carName].km = 10000;

            } else {
                parkingLot[carName].km -= Number(decreaseKm);
                console.log(`${carName} mileage decreased by ${decreaseKm} kilometers`);

            }
        }
        command = data.shift()
    }

    for (let carName in parkingLot) {
        console.log(`${carName} -> Mileage: ${parkingLot[carName].km} kms, Fuel in the tank: ${parkingLot[carName].fuelIn} lt.`);
    }
}
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);