function newHouse(input) {

    let typeFlowers = input[0];
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;

    switch(typeFlowers) {
        case 'Roses': price = 5.00; break;
        case 'Dahlias': price = 3.80; break;
        case 'Tulips': price = 2.80; break;
        case 'Narcissus': price = 3.00; break;
        case 'Gladiolus': price = 2.50; break;
    }
    let totalCosts = price * numberOfFlowers;

    if (numberOfFlowers > 80 && typeFlowers === 'Roses') {
        totalCosts *= 0.90;

    } else if (numberOfFlowers > 90 && typeFlowers === 'Dahlias') {
        totalCosts *= 0.85;

    } else if (numberOfFlowers > 80 && typeFlowers === 'Tulips') {
        totalCosts *= 0.85;

    } else if (numberOfFlowers < 120 && typeFlowers === 'Narcissus') {
        totalCosts *= 1.15;

    } else if (numberOfFlowers < 80 && typeFlowers === 'Gladiolus') {
        totalCosts *= 1.20;

    }

    if (budget < totalCosts) {
        console.log(`Not enough money, you need ${(totalCosts - budget).toFixed(2)} leva more.`);
        
    } else {
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${typeFlowers} and ${(budget - totalCosts).toFixed(2)} leva left.`);
        
    }
}

newHouse(["Tulips",
"88",
"260"])
