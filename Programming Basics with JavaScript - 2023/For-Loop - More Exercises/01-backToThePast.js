function backToThePast(input) {

    let inheritedMoney = Number(input[0]);
    let yearTillHeLives = Number(input[1]);

    let moneyAway = 0;
    let hisYears = 18;

    for (let index = 1800; index <= yearTillHeLives; index++) {
        let currentYear = index;

        if (currentYear % 2 === 0) {
            moneyAway += 12000

        } else {
            moneyAway += 12000 + 50 * hisYears;

        }
        hisYears++
    }
    if (inheritedMoney >= moneyAway) {
        console.log(`Yes! He will live a carefree life and will have ${(inheritedMoney - moneyAway).toFixed(2)} dollars left.`);

    } else {
        console.log(`He will need ${(moneyAway - inheritedMoney).toFixed(2)} dollars to survive.`);

    }
}
backToThePast(['50000',
    '1802']);