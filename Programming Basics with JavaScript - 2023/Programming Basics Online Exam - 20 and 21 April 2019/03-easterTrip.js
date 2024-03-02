function easterTrip(input) {

    let destination = input[0];
    let reserveDate = input[1];
    let nightsCount = Number(input[2]);

    let tripCost = 0;

    if (destination === 'France') {
        if (reserveDate === '21-23') {
            tripCost = nightsCount * 30;

        } else if (reserveDate === '24-27') {
            tripCost = nightsCount * 35;

        } else if (reserveDate === '28-31') {
            tripCost = nightsCount * 40;
        }
    } else if (destination === 'Italy') {
        if (reserveDate === '21-23') {
            tripCost = nightsCount * 28;

        } else if (reserveDate === '24-27') {
            tripCost = nightsCount * 32;

        } else if (reserveDate === '28-31') {
            tripCost = nightsCount * 39;
        }
    } else {
        if (reserveDate === '21-23') {
            tripCost = nightsCount * 32;

        } else if (reserveDate === '24-27') {
            tripCost = nightsCount * 37;

        } else if (reserveDate === '28-31') {
            tripCost = nightsCount * 43;
        }
    }
    console.log(`Easter trip to ${destination} : ${tripCost.toFixed(2)} leva.`);
}
easterTrip(["Germany",
    "24-27",
    "5"]);