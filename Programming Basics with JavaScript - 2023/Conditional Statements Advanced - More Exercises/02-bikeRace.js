function bikeRace(input) {

    let juniorsNumber = Number(input[0]);
    let seniorNumber = Number(input[1]);
    let trailType = input[2];
    let taxJuniors = 0;
    let taxSeniors = 0;

    if (trailType === 'trail') {
        taxJuniors = juniorsNumber * 5.50;
        taxSeniors = seniorNumber * 7;

    } else if (trailType === 'cross-country') {
        taxJuniors = juniorsNumber * 8;
        taxSeniors = seniorNumber * 9.50;

    } else if (trailType === 'downhill') {
        taxJuniors = juniorsNumber * 12.25;
        taxSeniors = seniorNumber * 13.75;

    } else {
        taxJuniors = juniorsNumber * 20;
        taxSeniors = seniorNumber * 21.50;

    }
    let totalTax = taxJuniors + taxSeniors;

    if (trailType === 'cross-country' && juniorsNumber + seniorNumber >= 50) {
        totalTax *= 0.75;

    }
    let otherCosts = totalTax * 0.05;

    console.log(`${(totalTax - otherCosts).toFixed(2)}`);
}
bikeRace(['10',
    '20',
    'trail']);