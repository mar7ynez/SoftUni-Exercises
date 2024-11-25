function tennisRanklist(input) {

    let numOfTournaments = Number(input[0]);
    let startPoints = Number(input[1]);
    let ptsWon = 0;
    let tournamentsWon = 0;

    for (let i = 2; i <= numOfTournaments + 1; i++) {
        let curTourStats = input[i];

        if (curTourStats === 'W') {
            tournamentsWon++;
            ptsWon += 2000;

        } else if (curTourStats === 'F') {
            ptsWon += 1200;

        } else {
            ptsWon += 720;

        }
    }
    let avgPoints = Math.floor(ptsWon / numOfTournaments);
    
    console.log(`Final points: ${startPoints + ptsWon}`);
    console.log(`Average points: ${avgPoints}`);
    console.log(`${(tournamentsWon / numOfTournaments * 100).toFixed(2)}%`);
}

tennisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])