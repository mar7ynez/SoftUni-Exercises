function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let numberOfFishers = Number(input[2]);

    let price = 0;

    switch (season) {
        case 'Spring': price = 3000; break;
        case 'Summer':
        case 'Autumn': price = 4200; break;
        case 'Winter': price = 2600; break;
    }

    if (numberOfFishers <= 6) {
        price *= 0.90;

    } else if (numberOfFishers <= 11) {
        price *= 0.85;

    } else {
        price *= 0.75;

    }

    if (numberOfFishers % 2 === 0 && season !== 'Autumn') {
        price *= 0.95;

    }

    if (price > budget) {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);

    } else {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);

    }
}

fishingBoat(["2000",
    "Winter",
    "13"])