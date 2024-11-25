function easterBakery(input) {

    let flourPrice = Number(input[0]);
    let flourAmount = Number(input[1]);
    let sugarAmount = Number(input[2]);
    let eggsAmount = Number(input[3]);
    let backPulverAmount = Number(input[4]);

    let sugarPrice = flourPrice * 0.75;
    let eggsPrice = flourPrice * 1.10;
    let backPulverPrice = sugarPrice * 0.20;

    let totalCost = flourAmount * flourPrice + sugarAmount * sugarPrice + eggsAmount * eggsPrice + backPulverAmount * backPulverPrice;

    console.log(totalCost.toFixed(2));
}
easterBakery(["50",
    "10",
    "3.5",
    "6",
    "1"]);