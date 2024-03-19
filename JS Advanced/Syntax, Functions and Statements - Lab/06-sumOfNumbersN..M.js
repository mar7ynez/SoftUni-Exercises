function sumOfNumbersNToM(numA, numB) {

    let result = 0

    for (let i = Number(numA); i <= Number(numB); i++) {
        result += i;
    }
    console.log(result);
}
sumOfNumbersNToM('1', '5');