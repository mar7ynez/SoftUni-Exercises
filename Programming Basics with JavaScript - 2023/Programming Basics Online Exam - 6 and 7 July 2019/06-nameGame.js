function nameGame(input) {

    let command = input.shift();
    let bestPoints = 0;
    let bestPlayer = ''

    while (command !== 'Stop') {
        let currentPoints = 0;
        for (let i = 0; i < command.length; i++) {
            let currNumber = command[i].charCodeAt();
            let namePoints = Number(input.shift());

            currentPoints += currNumber === namePoints ? 10 : 2;
        }

        if (currentPoints >= bestPoints) {
            bestPoints = currentPoints;
            bestPlayer = command;

        }
        command = input.shift();
    }
    console.log(`The winner is ${bestPlayer} with ${bestPoints} points!`);
}
nameGame(["Ivan",
    "73",
    "20",
    "98",
    "110",
    "Ivo",
    "80",
    "65",
    "87",
    "Stop"]);