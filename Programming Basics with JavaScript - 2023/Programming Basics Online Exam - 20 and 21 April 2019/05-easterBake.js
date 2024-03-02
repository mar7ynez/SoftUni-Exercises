function easterBake(input) {

    let easterCakes = Number(input.shift());

    let totalFlour = 0;
    let totalSugar = 0;
    let maxSugar = 0;
    let maxFlour = 0;


    for (let i = 1; i <= easterCakes; i++) {
        let curAmountSugar = Number(input.shift());
        let curAmountFlour = Number(input.shift());

        totalFlour += curAmountFlour;
        totalSugar += curAmountSugar;

        if (maxFlour < curAmountFlour) {
            maxFlour = curAmountFlour;
        }

        if (maxSugar < curAmountSugar) {
            maxSugar = curAmountSugar;
        }
    }
    let neededPacksFlour = Math.ceil(totalFlour / 750);
    let neededPacksSugar = Math.ceil(totalSugar / 950);

    console.log(`Sugar: ${neededPacksSugar}`);
    console.log(`Flour: ${neededPacksFlour}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);
}
easterBake(["3",
    "400",
    "350",
    "250",
    "300",
    "450",
    "380"]);