function simpleCalculator(firstNum, secondNum, operator) {

    let result = 0;

    let multiply = (firstNum, secondNum) => firstNum * secondNum;
    let divide = (firstNum, secondNum) => firstNum / secondNum;
    let add = (firstNum, secondNum) => firstNum + secondNum;
    let subtract = (firstNum, secondNum) => firstNum - secondNum;

    switch (operator) {
        case "multiply": result = multiply(firstNum, secondNum); break;
        case "divide": result = divide(firstNum, secondNum); break;
        case "add": result = add(firstNum, secondNum); break;
        case "subtract": result = subtract(firstNum, secondNum); break;
    }
    console.log(result);
}

simpleCalculator(50,
    13,
    'subtract');