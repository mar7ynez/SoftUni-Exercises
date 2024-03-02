function pets(input) {

    let daysAbsent = Number(input[0]);
    let foodLeftForPets = Number(input[1]);
    let dayFoodDog = Number(input[2]);
    let dayFoodCat = Number(input[3]);
    let dayFoodTurtle = Number(input[4]); // Grams

    let neededFood = (dayFoodDog + dayFoodCat + (dayFoodTurtle / 1000)) * daysAbsent;

    if (foodLeftForPets >= neededFood) {

        console.log(`${Math.floor(foodLeftForPets - neededFood)} kilos of food left.`)

    } else {

        console.log(`${Math.ceil(neededFood - foodLeftForPets)} more kilos of food are needed.`)

    }
}
pets(['2',
    '10',
    '1',
    '1',
    '1200']);