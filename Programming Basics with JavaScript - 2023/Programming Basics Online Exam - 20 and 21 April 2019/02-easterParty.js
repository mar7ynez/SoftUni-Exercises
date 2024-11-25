function easterParty(input) {

    let guestCount = Number(input[0]);
    let priceForOneMan = Number(input[1]);
    let budget = Number(input[2]);

    let cakePrice = budget * 0.10;

    if (guestCount >= 10 && guestCount <= 15) {
        priceForOneMan *= 0.85;

    } else if (guestCount > 15 && guestCount <= 20) {
        priceForOneMan *= 0.80;

    } else if (guestCount > 20) {
        priceForOneMan *= 0.75;

    }
    let totalCost = priceForOneMan * guestCount + cakePrice;

    if (budget >= totalCost) {
        console.log(`It is party time! ${(budget - totalCost).toFixed(2)} leva left.`);

    } else {
        console.log(`No party! ${(totalCost - budget).toFixed(2)} leva needed.`);
    }
}
easterParty(["18",
    "30",
    "450"]);