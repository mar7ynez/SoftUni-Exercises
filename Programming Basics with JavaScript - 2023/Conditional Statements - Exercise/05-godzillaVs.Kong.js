function godzillaVsKong(input) {

    let budgetForMovie = Number(input[0]);
    let numberOfStatists = Number(input[1]);
    let singleClothingPrice = Number(input[2]);

    let decorPrice = budgetForMovie * 0.10;
    
    if (numberOfStatists > 150) {
        singleClothingPrice *= 0.90;

    }
    let clothingPrice = singleClothingPrice * numberOfStatists;
    
    let totalCosts = clothingPrice + decorPrice;

    if (totalCosts > budgetForMovie) {
        console.log('Not enough money!');
        console.log(`Wingard needs ${(totalCosts - budgetForMovie).toFixed(2)} leva more.`);

    } else {
        console.log('Action!');
        console.log(`Wingard starts filming with ${(budgetForMovie - totalCosts).toFixed(2)} leva left.`);

    }
}

godzillaVsKong(["9587.88",
"222",
"55.68"]);