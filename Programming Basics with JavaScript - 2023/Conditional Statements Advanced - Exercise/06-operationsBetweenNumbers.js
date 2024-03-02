function operationsBetweenNumbers(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    let result = 0;
    let oddOrEven = '';

    if (operator === '+' || operator === '-' || operator === '*') {
        if (operator === '+') {
            result = n1 + n2;

        } else if (operator === '-') {
            result = n1 - n2;

        } else {
            result = n1 * n2;

        }

        if (result % 2 === 0) {
            oddOrEven = 'even';
    
        } else {
            oddOrEven = 'odd';
    
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${oddOrEven}`);
    
    }

    if (operator === '/') {
        result = (n1 / n2).toFixed(2);

    } else if (operator === '%') {
        result = (n1 % n2);

    }

    if (n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`);

    } else if (n2 !== 0 && operator === '/' || operator === '%') {
        console.log(`${n1} ${operator} ${n2} = ${result}`);

    }
}
operationsBetweenNumbers(["112",
"0",
"/"])