function familyTrip(input) {

    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let priceForNight = Number(input[2]);
    let percentOtherCost = Number(input[3]);

    let otherCost = budget * percentOtherCost / 100;

    if (nights > 7) {
        priceForNight *= 0.95;

    }
    let tripCost = nights * priceForNight + otherCost;

    if (budget >= tripCost) {
        console.log(`Ivanovi will be left with ${(budget - tripCost).toFixed(2)} leva after vacation.`);

    } else {
        console.log(`${(tripCost - budget).toFixed(2)} leva needed.`);

    }
}
familyTrip(["800.50",
    "8",
    "100",
    "2"]);