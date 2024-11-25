function sumOfNumbers(input) {

    let numAsStr = input[0];
    let sum = 0;

    for (let i = 0; i < numAsStr.length; i++) {
        let curDigit = Number(numAsStr[i]);
        sum += curDigit;

    }
    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["1234"]);