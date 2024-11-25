function darts(input) {

    let playerName = input[0];
    let playerPoints = 301;

    let index = 1;
    let command = input[index];
    let shotsCounter = 0;
    let missedShots = 0;

    while (command !== 'Retire') {
        let currShot = input[index];
        let currShotNumber = Number(input[index + 1])

        switch (currShot) {
            case 'Single': currShotNumber; break;
            case 'Double': currShotNumber *= 2; break;
            case 'Triple': currShotNumber *= 3; break;
        }

        if (currShotNumber > playerPoints) {
            missedShots++

        } else if (currShotNumber <= playerPoints) {
            shotsCounter++;
            playerPoints -= currShotNumber;

        }

        if (playerPoints === 0) {
            console.log(`${playerName} won the leg with ${shotsCounter} shots.`);
            break;
            
        }
        index += 2;
        command = input[index];
    }

    if (command === 'Retire') {
        console.log(`${playerName} retired after ${missedShots} unsuccessful shots.`);

    }
}
darts(["Michael van Gerwen",
    "Triple",
    "20",
    "Triple",
    "19",
    "Double",
    "10",
    "Single",
    "3",
    "Single",
    "1",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "20"]);