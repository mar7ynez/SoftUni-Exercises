function paintingEggs(input) {

    let eggsSize = input[0];
    let eggsColor = input[1];
    let shipment = Number(input[2]);

    let totalCost = 0;

    if (eggsSize === 'Large') {
        if (eggsColor === 'Red') {
            totalCost = shipment * 16;

        } else if (eggsColor === 'Green') {
            totalCost = shipment * 12;

        } else {
            totalCost = shipment * 9;
        }
    } else if (eggsSize === 'Medium') {
        if (eggsColor === 'Red') {
            totalCost = shipment * 13;

        } else if (eggsColor === 'Green') {
            totalCost = shipment * 9;

        } else {
            totalCost = shipment * 7;
        }
    } else if (eggsSize === 'Small') {
        if (eggsColor === 'Red') {
            totalCost = shipment * 9;

        } else if (eggsColor === 'Green') {
            totalCost = shipment * 8;

        } else {
            totalCost = shipment * 5;
        }
    }
    totalCost *= 0.65;

    console.log(`${totalCost.toFixed(2)} leva.`);
}
paintingEggs(["Large",
    "Red",
    "7"]);