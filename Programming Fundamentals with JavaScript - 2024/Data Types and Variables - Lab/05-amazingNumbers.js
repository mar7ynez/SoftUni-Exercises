function amazingNumbers(num) {

    let numAsString = String(num);
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        let curDigit = numAsString[i];
        sum += Number(curDigit);

    }
    let isAmazing = String(sum).includes('9') ? `True` : 'False';

    console.log(`${num} Amazing? ${isAmazing}`);
}

amazingNumbers(999);