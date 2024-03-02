function godzillaVsKong(input) {

    let budgetForFilm = Number(input[0]);
    let statistCount = Number(input[1]);
    let clothPrice = Number(input[2]);

    let decor = budgetForFilm * 0.10;
    let totalClothPrice = statistCount * clothPrice;

    if (statistCount > 150) {
        totalClothPrice *= 0.90;

    }
    let totalCosts = decor + totalClothPrice;

    if (totalCosts > budgetForFilm) {
        console.log(`Not enough money!\nWingard needs ${(totalCosts - budgetForFilm).toFixed(2)} leva more.`);

    } else {
        console.log(`Action!\nWingard starts filming with ${(budgetForFilm - totalCosts).toFixed(2)} leva left.`);

    }
}
godzillaVsKong(["20000",
    "120",
    "55.5"]);
