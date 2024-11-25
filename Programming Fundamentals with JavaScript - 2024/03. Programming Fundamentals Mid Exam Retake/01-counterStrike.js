function counterStrike(input) {

    let health = Number(input.shift());
    let command = input.shift();

    let wonBattles = 0;

    while (command !== 'End of battle' && health >= 0) {
        let curDistance = Number(command);

        if (health - curDistance >= 0) {
            health -= curDistance
            wonBattles++;

        } else {
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${health} energy`);
            break;
        }

        if (wonBattles % 3 === 0) {
            health += wonBattles;

        }
        
        command = input.shift();
    }

    if (command === 'End of battle') {
        console.log(`Won battles: ${wonBattles}. Energy left: ${health}`);

    }
}
counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"]);