function fruit(fruitName, weightG, pricePerKg) {

    let gramsToKilos = weightG / 1000;
    let totalCost = gramsToKilos * pricePerKg;

    console.log(`I need $${totalCost.toFixed(2)} to buy ${gramsToKilos.toFixed(2)} kilograms ${fruitName}.`);
}
fruit('apple', 1563, 2.35);