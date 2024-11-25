function energyBooster(input) {

    let fruitType = input[0];
    let setSize = input[1];
    let purchasedSets = input[2];

    let price = 0;

    if (setSize === 'small') {
        if (fruitType === 'Watermelon') {
            price = 56 * 2;

        } else if (fruitType === 'Mango') {
            price = 36.66 * 2;

        } else if (fruitType === 'Pineapple') {
            price = 42.10 * 2;

        } else if (fruitType === 'Raspberry') {
            price = 20 * 2;

        }
    } else {
        if (fruitType === 'Watermelon') {
            price = 28.70 * 5;

        } else if (fruitType === 'Mango') {
            price = 19.60 * 5;

        } else if (fruitType === 'Pineapple') {
            price = 24.80 * 5;


        } else if (fruitType === 'Raspberry') {
            price = 15.20 * 5;

        }
    }
    let totalCost = price * purchasedSets;

    if (totalCost >= 400 && totalCost <= 1000) {
        totalCost *= 0.85;

    } else if (totalCost > 1000) {
        totalCost *= 0.50;

    }
    console.log(`${totalCost.toFixed(2)} lv.`);
}
energyBooster(["Watermelon",
    "big",
    "4"]);
