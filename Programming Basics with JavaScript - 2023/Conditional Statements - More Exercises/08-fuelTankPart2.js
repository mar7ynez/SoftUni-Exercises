function fuelTankPart2(input) {

    let fuelType = input[0];
    let litersFuel = Number(input[1]);
    let card = input[2];
    let price = 0;

    if (fuelType === 'Gas' && card === 'Yes') {
        price = (0.93 - 0.08) * litersFuel;

    } else if (fuelType === 'Gas' && card === 'No') {
        price = 0.93 * litersFuel;

    } else if (fuelType === 'Gasoline' && card === 'Yes') {
        price = (2.22 - 0.18) * litersFuel;

    } else if (fuelType === 'Gasoline' && card === 'No') {
        price = 2.22 * litersFuel;

    } else if (fuelType === 'Diesel' && card === 'Yes') {
        price = (2.33 - 0.12) * litersFuel;

    } else {
        price = 2.33 * litersFuel;

    }

    if (litersFuel >= 20 && litersFuel <= 25) {
        price *= 0.92;

    } else if (litersFuel > 25) {
        price *= 0.90;

    }
    console.log(`${price.toFixed(2)} lv.`);
}
fuelTankPart2(['Gas',
    '30',
    'Yes'])