function greatestCommonDivisor(numA, numB) {

    while (numA !== numB) {
        if (numA > numB) {
            numA -= numB;

        } else {
            numB -= numA

        }
    }
    console.log(numA);
}
greatestCommonDivisor(2154, 458);