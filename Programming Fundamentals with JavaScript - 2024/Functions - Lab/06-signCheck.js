function signCheck(numOne, numTwo, numThree) {

    let firstAndSecondResult = multiplyResult(numOne, numTwo);
    let result = multiplyResult(firstAndSecondResult, numThree);

    let output = result < 0 ? 'Negative' : 'Positive';
    console.log(output);

    function multiplyResult(numOne, numTwo) {
        return numOne * numTwo;

    }
}
signCheck( 5,
    12,
   -15);