function processOddNumber(arrOfNums) {

    let result = [];

    for (let i = 0; i < arrOfNums.length; i++) {
        let currElement = arrOfNums[i];

        if (i % 2 !== 0) {
            result.unshift(currElement * 2);

        }
    }
    console.log(result.join(' '));
}
processOddNumber([3, 0, 10, 4, 7, 3]);