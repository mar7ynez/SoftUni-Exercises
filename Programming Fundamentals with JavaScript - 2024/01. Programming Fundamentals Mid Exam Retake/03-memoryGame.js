function memoryGame(arr) {

    let pairElements = arr.shift().split(' ');
    let index = 0
    let command = arr[index];

    while (command !== 'end' && pairElements.length > 0) {
        let curIdxs = command.split(' ');    
        let middleOfSeq = Math.trunc(pairElements.length / 2);

        let isEqual = pairElements[curIdxs[0]] === pairElements[curIdxs[1]];
        let isInvalid = curIdxs[0] === curIdxs[1] || curIdxs[0] < 0 || curIdxs[1] < 0 || curIdxs[0] >= pairElements.length || curIdxs[1] >= pairElements.length;

        let element = pairElements[curIdxs[0]];
        let secondElement = pairElements[curIdxs[1]];
        
        if (isInvalid) {
            pairElements.splice(middleOfSeq, 0, `-${index + 1}a`, `-${index + 1}a`);
            console.log("Invalid input! Adding additional elements to the board");

        } else {
            if (isEqual) {
                pairElements = pairElements.filter(idx => idx !== element && idx !== secondElement);
                console.log(`Congrats! You have found matching elements - ${element}!`);
    
            } else {
                console.log('Try again!');
    
            }
        }
        index++;
        command = arr[index];
    }

    if (pairElements.length > 0) {
        console.log('Sorry you lose :(');
        console.log(`${pairElements.join(' ')}`);

    } else {
        console.log(`You have won in ${index} turns!`);

    }
}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]);