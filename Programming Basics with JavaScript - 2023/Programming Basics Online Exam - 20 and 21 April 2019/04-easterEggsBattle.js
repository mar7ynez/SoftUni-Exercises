function easterEggsBattle(input) {

    let firstPlayeEggs = Number(input.shift());
    let secondPlayerEggs = Number(input.shift());

    let command = input.shift();

    while (command !== 'End') {

        if (command === 'one') {
            secondPlayerEggs -= 1;

        } else {
            firstPlayeEggs -= 1;

        }

        if (firstPlayeEggs <= 0) {
            console.log(`Player one is out of eggs. Player two has ${secondPlayerEggs} eggs left.`);
            break;

        } else if (secondPlayerEggs <= 0) {
            console.log(`Player two is out of eggs. Player one has ${firstPlayeEggs} eggs left.`);
            break;

        }
        command = input.shift();
    }

    if (command === 'End') {
        console.log(`Player one has ${firstPlayeEggs} eggs left.`);
        console.log(`Player two has ${secondPlayerEggs} eggs left.`);

    }
}
easterEggsBattle(['5',
    '4',
    'one',
    'two',
    'one',
    'two',
    'two',
    'End'])