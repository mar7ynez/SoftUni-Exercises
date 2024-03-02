function integerAndFloat(a, b, c) { {

    let sum = a + b + c;

    let output = sum % 1 === 0 ? `${sum} - Integer` : `${sum} - Float`;
    
    console.log(output);
}
}

integerAndFloat(100, 200, 303);