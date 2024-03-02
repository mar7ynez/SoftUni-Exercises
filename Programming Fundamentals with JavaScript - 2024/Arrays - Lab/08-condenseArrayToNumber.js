function condenseArrayToNumber(arrOfNums) {

    let condensedArr = [];

    while (arrOfNums.length > 1) {

        for (let i = 0; i < arrOfNums.length - 1; i++) {
            let curElement = arrOfNums[i];
            let nextElement = arrOfNums[i + 1];

            condensedArr[i] = curElement + nextElement;
        }
        arrOfNums = condensedArr;
        condensedArr = [];

    }
    console.log(arrOfNums.join(''));
}

condenseArrayToNumber([2, 10, 3]);