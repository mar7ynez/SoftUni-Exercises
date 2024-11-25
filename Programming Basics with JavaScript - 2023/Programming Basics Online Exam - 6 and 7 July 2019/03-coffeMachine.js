function coffeeMachine(input) {

    let drinkType = input[0];
    let sugar = input[1];
    let counter = Number(input[2]);
    const drinks = {
        'Espresso': { 'Without': 0.90, 'Normal': 1, 'Extra': 1.2 },
        'Cappuccino': { 'Without': 1, 'Normal': 1.2, 'Extra': 1.6 },
        'Tea': { 'Without': 0.5, 'Normal': 0.6, 'Extra': 0.7 },
        discountNoSugar: 0.65,
    }
    let price = counter * drinks[drinkType][sugar];

    if (sugar === 'Without') {
        price *= drinks.discountNoSugar;

    }

    // if (drinkType === 'Espresso') {
    //     if (sugar === 'Without') {
    //         price = counter * 0.90 * 0.65;
    //     } else if (sugar === 'Normal') {
    //         price = counter * 1.00;
    //     } else if (sugar === 'Extra') {
    //         price = counter * 1.20;
    //     }
    // } else if (drinkType === 'Cappuccino') {
    //     if (sugar === 'Without') {
    //         price = counter * 1.00 * 0.65;
    //     } else if (sugar === 'Normal') {
    //         price = counter * 1.20;
    //     } else if (sugar === 'Extra') {
    //         price = counter * 1.60;
    //     }
    // } else if (drinkType === 'Tea') {
    //     if (sugar === 'Without') {
    //         price = counter * 0.50 * 0.65;
    //     } else if (sugar === 'Normal') {
    //         price = counter * 0.60;
    //     } else if (sugar === 'Extra') {
    //         price = counter * 0.70;
    //     }
    // } else {

    // }
    if (drinkType === 'Espresso' && counter >= 5) {
        price *= 0.75;
    }
    if (price > 15) {
        price *= 0.80;
    }

    console.log(`You bought ${counter} cups of ${drinkType} for ${price.toFixed(2)} lv.`)
}
coffeeMachine(["Espresso",
    "Without",
    "10"]);