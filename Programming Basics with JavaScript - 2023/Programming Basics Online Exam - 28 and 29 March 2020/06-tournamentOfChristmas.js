function tournamentOfChristmas(input) {

    let daysOfTournament = Number(input.shift());
    let totalMoney = 0;
    let wons = 0;
    let lose = 0;

    for (let i = 1; i <= daysOfTournament; i++) {

        let command = input.shift();
        let moneyForDay = 0;
        let winCounter = 0;
        let loseCounter = 0;

        while (command !== 'Finish') {
            let curGameStatus = input.shift();

            if (curGameStatus === 'win') {
                winCounter++
                moneyForDay += 20;

            } else {
                loseCounter++;

            }
            command = input.shift();
        }
        wons += winCounter;
        lose += loseCounter;

        if (winCounter > loseCounter) {
            moneyForDay *= 1.10;

        }
        totalMoney += moneyForDay;
    }

    if (wons > lose) {
        totalMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${(totalMoney).toFixed(2)}`);

    } else {
        console.log(`You lost the tournament! Total raised money: ${(totalMoney).toFixed(2)}`);

    }
}
tournamentOfChristmas(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"]);