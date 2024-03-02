function binaryToDecimal(binaryNum) {

    let decimalResult = 0;
    let rightToLeftNums = 0
    let powers = 0;

    for (let i = binaryNum.length - 1; i >= 0; i--) {
        rightToLeftNums = binaryNum[i];

        decimalResult += 2**powers * rightToLeftNums;
        powers++;
    }
    console.log(decimalResult);
}

binaryToDecimal('1000101');