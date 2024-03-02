function careOfPuppy(input) {

    let amountFoodInGrams = Number(input.shift()) * 1000;
    let command = input.shift();

    let totalFoodEated = 0;

    while (command !== 'Adopted') {
        let gramsOnEat = Number(command);

        totalFoodEated += gramsOnEat;

        command = input.shift();
    }
    
    if (amountFoodInGrams >= totalFoodEated) {
        console.log(`Food is enough! Leftovers: ${amountFoodInGrams - totalFoodEated} grams.`);

    } else {
        console.log(`Food is not enough. You need ${totalFoodEated - amountFoodInGrams} grams more.`);

    }
}
careOfPuppy(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"]);