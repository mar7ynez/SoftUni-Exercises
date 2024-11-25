function poolDayPrice(input) {

    let peopleCount = Number(input[0]);
    let entryPrice = Number(input[1]);
    let priceForOneLounge = Number(input[2]);
    let priceForOneUmbrella = Number(input[3]);

    let totalEntryPrice = peopleCount * entryPrice;
    let totalLoungePrice = Math.ceil(peopleCount * 0.75) * priceForOneLounge;
    let totalUmbrellaPrce = Math.ceil(peopleCount / 2) * priceForOneUmbrella;

    let totalSum = totalEntryPrice + totalLoungePrice + totalUmbrellaPrce;

    console.log(`${totalSum.toFixed(2)} lv.`);
}
poolDayPrice(["21",
    "5.50",
    "4.40",
    "6.20"]);