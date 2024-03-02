function tennisRanklist(input) {

    let tournamentCounter = Number(input[0]);
    let startPoints = Number(input[1]);
    let pointsWon = 0;
    let tournamentsWon = 0;

    for (let i = 2; i <= tournamentCounter + 1; i++) {
        let currTournament = input[i];

        switch (currTournament) {
            case 'W': tournamentsWon++, pointsWon += 2000; break;
            case 'F': pointsWon += 1200; break;
            case 'SF': pointsWon += 720; break;

        }
    }
    let finalPoints = startPoints + pointsWon;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(pointsWon / tournamentCounter)}`);
    console.log(`${((tournamentsWon / tournamentCounter) * 100).toFixed(2)}%`);
}
tennisRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"]);