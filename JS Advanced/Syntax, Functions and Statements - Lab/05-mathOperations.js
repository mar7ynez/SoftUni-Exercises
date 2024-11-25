function mathOperations(numA, numB, operator) {

    let result = 0;
    
    switch (operator) {
        case '+': result = numA + numB; break;
        case '-': result = numA - numB; break;
        case '*': result = numA * numB; break;
        case '/': result = numA / numB; break;
        case '%': result = numA % numB; break;
        case '**': result = numA ** numB; break;
    }
    console.log(result);
}
mathOperations(3, 5.5, '*');