function palindromeIntegers(arrOfNums) {

    for (let i = 0; i < arrOfNums.length; i++) {
        let curNumAsStr = arrOfNums[i].toString();

        let tempNumber = '';

        for (let i = curNumAsStr.length - 1; i >= 0; i--) {
            tempNumber += curNumAsStr[i];

        }
        if (tempNumber === curNumAsStr) {
            console.log(true);

        } else {
            console.log(false);
        }
    }
}
palindromeIntegers([32,2,232,1010]);
