function touristShop(input) {

    let budget = Number(input[0]);
    let index = 1;
    let command = input[index];
    
    let costs = 0;
    let counter = 0;
    let productCounter = 0;

    while (command !== 'Stop') {
        index++
        let productPrice = Number(input[index]);
        productCounter++
        counter++

        if (counter === 3) {
            productPrice /= 2;
            counter = 0;
        }
        
        if (budget < productPrice) {
            console.log("You don't have enough money!");
            console.log(`You need ${(productPrice - budget).toFixed(2)} leva!`);
            break;
        }
        costs += productPrice;
        budget -= productPrice;
        
        index++;
        command = input[index];
   
    }
    if (command === 'Stop') {
        console.log(`You bought ${productCounter} products for ${costs.toFixed(2)} leva.`);

    }
}

touristShop(["54",
"Thermal underwear",
"24",
"Sunscreen",
"45"])