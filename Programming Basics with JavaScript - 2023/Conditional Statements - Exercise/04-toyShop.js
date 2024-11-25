function toyShop(input) {

    let vacationCost = Number(input[0]);

    let numberOfPuzzles = Number(input[1]);
    let numberOfSpeakingDolls = Number(input[2]);
    let numberOfTeddyBears = Number(input[3]);
    let numberOfMinions = Number(input[4]);
    let numberOfTrucks = Number(input[5]);

    let theNumOfToys = numberOfPuzzles + numberOfSpeakingDolls + numberOfTeddyBears + numberOfMinions + numberOfTrucks;
    let moneyEarned = numberOfPuzzles * 2.60 + numberOfSpeakingDolls * 3.00 + numberOfTeddyBears * 4.10 + numberOfMinions * 8.20 + numberOfTrucks * 2.00;

    if (theNumOfToys >= 50) {
        moneyEarned *= 0.75;

    }
    let totalEarn = moneyEarned *= 0.90;

    if (vacationCost > moneyEarned) {
        console.log(`Not enough money! ${(vacationCost - totalEarn).toFixed(2)} lv needed.`);

    } else {
        console.log(`Yes! ${(totalEarn - vacationCost).toFixed(2)} lv left.`);
        
    }
}

toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"]);