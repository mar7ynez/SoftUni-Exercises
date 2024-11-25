function extractIncreasingSubsequenceFromArray(arrOfNumbers) {

    let result = [];
    let temporaryBiggest = 0;

    for (let i = 0; i < arrOfNumbers.length; i++) {
        if (arrOfNumbers[i] >= temporaryBiggest) {
            temporaryBiggest = arrOfNumbers[i];
            result.push(temporaryBiggest);
        }
    }
    return result;
}
extractIncreasingSubsequenceFromArray([20,
    3,
    2,
    15,
    6,
    1]);