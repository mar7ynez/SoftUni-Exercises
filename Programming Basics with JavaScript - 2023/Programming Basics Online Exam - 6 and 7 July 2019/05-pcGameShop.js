function pcGameShop(input) {

    let soldGamesCount = Number(input[0]);
    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;

    for (let index = 1; index < input.length; index++) {
        let currentSell = input[index];

        if (currentSell === 'Hearthstone') {
            hearthstone++

        } else if (currentSell === 'Fornite') {
            fornite++

        } else if (currentSell === 'Overwatch') {
            overwatch++

        } else {
            others++

        }
    }
    console.log(`Hearthstone - ${((hearthstone / soldGamesCount) * 100).toFixed(2)}%`);
    console.log(`Fornite - ${((fornite / soldGamesCount) * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${((overwatch / soldGamesCount) * 100).toFixed(2)}%`);
    console.log(`Others - ${((others / soldGamesCount) * 100).toFixed(2)}%`);
}
pcGameShop(["4",
    "Hearthstone",
    "Fornite",
    "Overwatch",
    "Counter-Strike"]);