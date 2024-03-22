function processOddPositions(arrOfNums) {

    let result = [];

    arrOfNums.forEach((num, idx) => {
        if (idx % 2 !== 0) {
            result.push(num * 2);
        }
    });
    return result.reverse().join(' ');
}
processOddPositions([3, 0, 10, 4, 7, 3]);