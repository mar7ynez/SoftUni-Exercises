function addBags(input) {

    let priceAbove20kg = Number(input[0]);
    let bagKilograms = Number(input[1]);
    let daysToGo = Number(input[2]);
    let numOfBags = Number(input[3]);

    let price = 0;

    if (bagKilograms < 10) {
        price = priceAbove20kg * 0.20;

    } else if (bagKilograms <= 20) {
        price = priceAbove20kg * 0.50;

    } else {
        price = priceAbove20kg;

    }

    if (daysToGo > 30) {
        price *= 1.10;

    } else if (daysToGo >= 7 && daysToGo <= 30) {
        price *= 1.15;

    } else if (daysToGo < 7) {
        price *= 1.40;

    }

    let priceToPay = numOfBags * price;

    console.log(`The total price of bags is: ${priceToPay.toFixed(2)} lv.`);

}

addBags(["30",
    "18",
    "15",
    "2"]);