function bitcoin(input) {

    let btcPrice = 11949.16;
    let oneGramGold = 67.51;

    let money = 0;
    let ownedBitcoins = 0;
    let firstBuy = 0;
    let daysCounter = 0;
    
    for (let i = 0; i < input.length; i++) {
        let currDayAmount = input[i];
        daysCounter++;

        if (daysCounter % 3 === 0) {
            currDayAmount *= 0.70;

        }
        money += currDayAmount * oneGramGold;

        while (money >= btcPrice) {
            ownedBitcoins++;
            money -= btcPrice;
            
            if (ownedBitcoins === 1) {
                firstBuy = i + 1;
    
            }
        }
    }
    console.log(`Bought bitcoins: ${ownedBitcoins}`);

    if (ownedBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBuy}`);

    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

bitcoin([3124.15, 504.212, 2511.124]);