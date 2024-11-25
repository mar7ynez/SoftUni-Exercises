function dishWasher(input) {

    let chemBottles = Number(input[0]) * 750;
    let index = 1;
    let command = input[index];
    let dishWasherCounter = 0;

    let usedChemical = 0;
    let soupPotWashed = 0;
    let platesWashed = 0;

    while (chemBottles >= usedChemical && command !== 'End') {

        let currDishes = Number(input[index]);
        dishWasherCounter++

        if (dishWasherCounter === 3) {

            if (currDishes * 15 <= chemBottles) {
                usedChemical += currDishes * 15;
                soupPotWashed += currDishes;

            }
            dishWasherCounter = 0;

        } else if (currDishes * 5 <= chemBottles) {
            usedChemical += currDishes * 5
            platesWashed += currDishes;

        }
        index++;
        command = input[index];
    }
    if (chemBottles >= usedChemical) {
        console.log("Detergent was enough!");
        console.log(`${platesWashed} dishes and ${soupPotWashed} pots were washed.`);
        console.log(`Leftover detergent ${chemBottles - usedChemical} ml.`);

    } else {
        console.log(`Not enough detergent, ${usedChemical - chemBottles} ml. more necessary!`);

    }
}
dishWasher(['2',
    '53',
    '65',
    '55',
    'End'
]);
