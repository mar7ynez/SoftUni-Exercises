function sorting(arrOfNums) {

    const sortedArr = [];

    arrOfNums.sort((a, b) => a - b);

    while (arrOfNums.length > 0) {
        let biggestNumber = arrOfNums.pop();
        sortedArr.push(biggestNumber);

        let smallestNumber = arrOfNums.shift();
        sortedArr.push(smallestNumber);
        
    }
    console.log(sortedArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);