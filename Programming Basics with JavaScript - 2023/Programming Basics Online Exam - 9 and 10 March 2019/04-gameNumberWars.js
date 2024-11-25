function gameNumberWars(input) {

    let firstPlayer = input[0];
    let secondPlayer = input[1];

    let index = 2;
    let command = input[index];

    let firstPlayerPoints = 0;
    let secondPlayerPoints = 0;

    while (command !== 'End of game') {
        let firstPlayerCard = Number(input[index]);
        let secondPlayerCard = Number(input[index + 1]);

        if (firstPlayerCard === secondPlayerCard) {
            console.log('Number wars!');
            index += 2;
            firstPlayerCard = Number(input[index]);
            secondPlayerCard = Number(input[index + 1]);
            if (firstPlayerCard > secondPlayerCard) {
                console.log(`${firstPlayer} is winner with ${firstPlayerPoints} points`);
                break;

            } else if (firstPlayerCard < secondPlayerCard) {
                console.log(`${secondPlayer} is winner with ${secondPlayerPoints} points`);
                break;
            }
        }
        if (firstPlayerCard > secondPlayerCard) {
            firstPlayerPoints += firstPlayerCard - secondPlayerCard;

        } else if (firstPlayerCard < secondPlayerCard) {
            secondPlayerPoints += secondPlayerCard - firstPlayerCard;

        }
        index += 2;
        command = input[index];
    }

    if (command === 'End of game') {
        console.log(`${firstPlayer} has ${firstPlayerPoints} points`);
        console.log(`${secondPlayer} has ${secondPlayerPoints} points`);

    }
}
gameNumberWars(["Desi",
    "Niki",
    "7",
    "5",
    "3",
    "4",
    "3",
    "3",
    "5",
    "3"]);