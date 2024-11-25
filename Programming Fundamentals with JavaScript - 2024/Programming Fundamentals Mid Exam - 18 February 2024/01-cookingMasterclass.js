function cookingMasterclass(input) {

    let budget = parseFloat(input[0]);
    let students = parseInt(input[1]);
    let priceFlour = parseFloat(input[2]);
    let priceEgg = parseFloat(input[3]);
    let priceApron = parseFloat(input[4]);

    let freePackages = Math.floor(students / 5);

    let totalApronPrice = priceApron * Math.ceil(students * 1.2);
    let totalEggPrice = priceEgg * 10 * students;
    let totalFlourPrice = priceFlour * (students - freePackages);

    let totalCost = totalApronPrice + totalEggPrice + totalFlourPrice;

    if (budget >= totalCost) {
        console.log(`Items purchased for ${totalCost.toFixed(2)}$.`);

    } else {
        console.log(`${(totalCost - budget).toFixed(2)}$ more needed.`);

    }
}
cookingMasterclass(['946',
'20',
'12.05',
'0.42',
'27.89']);