function basketBallTournament(input) {

    let tournamentName = input.shift();
    let allGamesCounter = 0;
    let winCounter = 0;
    let loseCounter = 0;

    while (tournamentName !== 'End of tournaments') {
        let games = Number(input.shift());
        let gamesCounter = 0;

        for (let i = 2; i <= games + 1; i++) {
            let teamResult = Number(input.shift());
            let enemyTeamResult = Number(input.shift());
            allGamesCounter++;
            gamesCounter++;

            if (teamResult > enemyTeamResult) {
                winCounter++;
                console.log(`Game ${gamesCounter} of tournament ${tournamentName}: win with ${teamResult - enemyTeamResult} points.`);

            } else {
                loseCounter++;
                console.log(`Game ${gamesCounter} of tournament ${tournamentName}: lost with ${enemyTeamResult - teamResult} points.`);

            }
        }
        tournamentName = input.shift();

    }
    let winPercent = (winCounter / allGamesCounter) * 100;
    let losePercent = ((loseCounter / allGamesCounter) * 100);

    console.log(`${winPercent.toFixed(2)}% matches win`);
    console.log(`${losePercent.toFixed(2)}% matches lost`);
}
basketBallTournament(["Dunkers",
    "2",
    "75",
    "65",
    "56",
    "73",
    "Fire Girls",
    "3",
    "67",
    "34",
    "83",
    "98",
    "66",
    "45",
    "End of tournaments"]);