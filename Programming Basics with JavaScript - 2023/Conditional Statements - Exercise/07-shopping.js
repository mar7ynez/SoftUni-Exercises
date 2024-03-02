function shopping(input) {

    let budget = Number(input[0]);
    let numGraphicCards = Number(input[1]);
    let numCPUs = Number(input[2]);
    let numMemory = Number(input[3]);

    let graphicCardsCost = numGraphicCards * 250;
    let cpusCost = graphicCardsCost * 0.35;
    let memoryCost = graphicCardsCost * 0.10;

    let totalPrice = graphicCardsCost + cpusCost * numCPUs + memoryCost * numMemory;

    if (numGraphicCards > numCPUs) {
        totalPrice *= 0.85;

    }

    if (budget < totalPrice) {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);

    } else {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);

    }
}

shopping(["900",
"2",
"1",
"3"]);