function smallestTwoNums(arrOfNums) {

    const result = [];

    let sortedNumbers = arrOfNums.sort((a, b) => { return a - b });
    result.push(sortedNumbers[0], sortedNumbers[1])

    console.log(result.join(' '));
}
smallestTwoNums([3, 0, 10, 4, 7, 3]);