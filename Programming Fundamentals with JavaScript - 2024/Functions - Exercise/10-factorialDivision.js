function factorialDivision(firstInt, secondInt) {
    
    const firstIntFactorial = factorial(firstInt);
    const secondIntFactorial = factorial(secondInt);
    let result = firstIntFactorial / secondIntFactorial;
    
    console.log(result.toFixed(2));

    function factorial(firstInt) {

        if (firstInt > 0) {
            return firstInt * factorial(firstInt - 1);

        } else {
            return 1;

        }
    }
}
factorialDivision(6,
    2);