function easterCompetition(input) {

    let easterCakesCount = Number(input.shift());
    let bestPoints = 0;
    let bestBaker = '';

    for (let i = 1; i <= easterCakesCount; i++) {
        let currBakerName = input.shift();
        let bakerPoints = 0;

        let command = input.shift();
        while (command !== 'Stop') {
            let currPoints = Number(command);

            bakerPoints += currPoints;
            command = input.shift();
        }
        console.log(`${currBakerName} has ${bakerPoints} points.`);

        if (bakerPoints > bestPoints) {
            bestPoints = bakerPoints;
            bestBaker = currBakerName;

            console.log(`${currBakerName} is the new number 1!`);
        }
    }
    console.log(`${bestBaker} won competition with ${bestPoints} points!`);
}
easterCompetition(["3",
    "Chef Manchev", "10",
    "10",
    "10",
    "10",
    "Stop",
    "Natalie",
    "8",
    "2",
    "9",
    "Stop",
    "George",
    "9",
    "2",
    "4",
    "2",
    "Stop"]);