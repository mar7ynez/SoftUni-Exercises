function footballTournament(input) {

    let teamName = input[0];
    let matchesCurrSeason = Number(input[1]);

    let points = 0;
    let wCount = 0;
    let dCount = 0;
    let lCount = 0;

    for (let index = 2; index < input.length; index++) {
        currentGameResult = input[index];

        if (currentGameResult === 'W') {
            points += 3;
            wCount++

        } else if (currentGameResult === 'D') {
            points += 1;
            dCount++

        } else {
            lCount++

        }
    }
    if (matchesCurrSeason > 0) {
        console.log(`${teamName} has won ${points} points during this season.\nTotal stats:\n## W: ${wCount}\n## D: ${dCount}\n## L: ${lCount}`);
        console.log(`Win rate: ${((wCount / matchesCurrSeason) * 100).toFixed(2)}%`)

    } else {
        console.log(`${teamName} hasn't played any games during this season.`)

    }
}
footballTournament(["Liverpool",
    "10",
    "W",
    "D",
    "D",
    "W",
    "L",
    "W",
    "D",
    "D",
    "W",
    "W"]);