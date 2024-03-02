function sumOfTwoNumbers(input) {

    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinationCounter = 0;
    let isMagicNumFound = false;

    for (let i = startInterval; i <= endInterval; i++) {
        for (let j = startInterval; j <= endInterval; j++) {
            combinationCounter++;

            if (i + j === magicNumber) {
                console.log(`Combination N:${combinationCounter} (${i} + ${j} = ${magicNumber})`);
                isMagicNumFound = true;
                break;

            }
        }
        if (isMagicNumFound) {
            break;
        }
    }

    if (!isMagicNumFound) {
        console.log(`${combinationCounter} combinations - neither equals ${magicNumber}`);

    }
}
sumOfTwoNumbers(["1",
    "10",
    "5"]);