function gameOfIntervals(input) {

    let gameRounds = Number(input[0]);

    let result = 0;
    let zeroToNine = 0; //От 0 до 9  20 % от числото
    let tenToNineteen = 0; //От 10 до 19  30 % от числото
    let twentyToTwentyNine = 0; //От 20 до 29  40 % от числото
    let tirtyToTirtyNine = 0; //От 30 до 39  50 точки
    let fortyToFifty = 0; //От 40 до 50  100 точки
    let invalidNumbers = 0;


    for (let index = 1; index <= gameRounds; index++) {
        let currentNumber = Number(input[index]);

        if (currentNumber <= 9 && currentNumber >= 0) {
            result += currentNumber * 0.20;
            zeroToNine++;

        } else if (currentNumber <= 19 && currentNumber >= 0) {
            result += currentNumber * 0.30;
            tenToNineteen++;

        } else if (currentNumber <= 29 && currentNumber >= 0) {
            result += currentNumber * 0.40;
            twentyToTwentyNine++

        } else if (currentNumber <= 39 && currentNumber >= 0) {
            result += 50;
            tirtyToTirtyNine++

        } else if (currentNumber <= 50 && currentNumber >= 0) {
            result += 100;
            fortyToFifty++;

        } else {
            result = result / 2;
            invalidNumbers++;

        }
    }
    console.log(`${result.toFixed(2)}\nFrom 0 to 9: ${((zeroToNine / gameRounds) * 100).toFixed(2)}%\nFrom 10 to 19: ${((tenToNineteen / gameRounds) * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${((twentyToTwentyNine / gameRounds) * 100).toFixed(2)}%\nFrom 30 to 39: ${((tirtyToTirtyNine / gameRounds) * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${((fortyToFifty / gameRounds) * 100).toFixed(2)}%\nInvalid numbers: ${((invalidNumbers / gameRounds) * 100).toFixed(2)}%`)
}
gameOfIntervals(['10',
    '43',
    '57',
    '-12',
    '23',
    '12',
    '0',
    '50',
    '40',
    '30',
    '20']);