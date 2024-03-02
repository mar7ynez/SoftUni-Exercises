function safari(input) {

    let budget = Number(input[0]);
    let litersFuelNeeded = Number(input[1]);
    let dayOfWeek = input[2];

    let fuelPlusTourPrice = litersFuelNeeded * 2.10 + 100;

    if (dayOfWeek === 'Saturday') {
        fuelPlusTourPrice *= 0.90;

    } else if (dayOfWeek === 'Sunday') {
        fuelPlusTourPrice *= 0.80;

    }

    if (budget >= fuelPlusTourPrice) {
        console.log(`Safari time! Money left: ${(budget - fuelPlusTourPrice).toFixed(2)} lv.`);

    } else {
        console.log(`Not enough money! Money needed: ${(fuelPlusTourPrice - budget).toFixed(2)} lv.`);

    }
}

safari(["1000",
"10",
"Sunday"])