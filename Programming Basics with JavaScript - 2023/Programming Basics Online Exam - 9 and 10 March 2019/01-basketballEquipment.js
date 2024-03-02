function basketballEquipment(input) {

    let trainCostYear = Number(input[0]);

    let basketShoes = trainCostYear * 0.60;
    let basketEquipmetn = basketShoes * 0.80;
    let ball = basketEquipmetn / 1 / 4;
    let accessories = ball / 1 / 5;

    let totalCosts = trainCostYear + basketShoes + basketEquipmetn + ball + accessories;

    console.log(totalCosts.toFixed(2));
}
basketballEquipment(["320"]);