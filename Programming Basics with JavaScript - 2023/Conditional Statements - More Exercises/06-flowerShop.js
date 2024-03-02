function flowerShop(input) {

    let numOfMagnolia = Number(input[0]);
    let numOfHyacinth = Number(input[1]);
    let numOfRose = Number(input[2]);
    let numOfCactus = Number(input[3]);
    let giftPrice = Number(input[4]);

    let purchaseIncome = (numOfMagnolia * 3.25 + numOfHyacinth * 4 + numOfRose * 3.50 + numOfCactus * 8) * 0.95;

    if (purchaseIncome >= giftPrice) {
        console.log(`She is left with ${Math.floor(purchaseIncome - giftPrice)} leva.`)

    } else {
        console.log(`She will have to borrow ${Math.ceil(giftPrice - purchaseIncome)} leva.`);

    }
}
flowerShop(['2',
    '3',
    '5',
    '1',
    '50']);