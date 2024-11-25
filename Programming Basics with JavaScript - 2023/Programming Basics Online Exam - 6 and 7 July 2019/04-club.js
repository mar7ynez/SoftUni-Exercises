function club(input) {

    let wantedIncome = Number(input[0]);
    let incomePrice = 0;

    for (index = 1; index < input.length; index++) {
        let currentCocktail = input[index];
        index++
        let numberOfCocktails = Number(input[index]);
        let currentPrice = numberOfCocktails * currentCocktail.length;

        if (currentPrice % 2 === 0) {
            incomePrice += currentPrice;

        } else if (currentPrice % 2 === 1) {
            incomePrice += currentPrice * 0.75;

        }

        if (currentCocktail === 'Party!') {
            console.log(`We need ${(wantedIncome - incomePrice).toFixed(2)} leva more.`);
            break;

        } else if (wantedIncome <= incomePrice) {
            console.log(`Target acquired.`);
            break;

        }
    }
    console.log(`Club income - ${(incomePrice).toFixed(2)} leva.`);
}
club(["500",
    "Bellini",
    "6",
    "Bamboo",
    "7",
    "Party!"]);