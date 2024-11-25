function calculator(num, operator, num1) {

    let result = 0;

    switch(operator) {
        case "+": result = num + num1; break;
        case "-": result = num - num1; break;
        case "/": result = num / num1; break;

        default: result = num * num1; break;
    }
    console.log(result.toFixed(2));
}

calculator(25.5,
    '-',
    3);