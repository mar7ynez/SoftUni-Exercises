function fuelTank(input) {

    let fuelType = input[0];
    let litersIn = Number(input[1]);

    if (fuelType !== 'Diesel' && fuelType !== 'Gasoline' && fuelType !== 'Gas') {
        console.log('Invalid fuel!');

    } else if (litersIn >= 25) {
        console.log(`You have enough ${fuelType.toLowerCase()}.`)

    } else if (litersIn < 25) {
        console.log(`Fill your tank with ${fuelType.toLowerCase()}!`)

    }
}
fuelTank(['Diesel',
    '10']);