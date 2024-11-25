function lastDigitName(number) {

    let numString = String(number);
    let nameOfLastDigit = '';

    for (let i = 0; i < numString.length; i++) {
        let lastDigit = numString[i];
        
        switch (lastDigit) {
            case "0": nameOfLastDigit = 'zero'; break;
            case "1": nameOfLastDigit = 'one'; break;
            case "2": nameOfLastDigit = 'two'; break;
            case "3": nameOfLastDigit = 'three'; break;
            case "4": nameOfLastDigit = 'four'; break;
            case "5": nameOfLastDigit = 'five'; break;
            case "6": nameOfLastDigit = 'six'; break;
            case "7": nameOfLastDigit = 'seven'; break;
            case "8": nameOfLastDigit = 'eight'; break;
            case "9": nameOfLastDigit = 'nine'; break;
        }
    }
    console.log(nameOfLastDigit);
}

lastDigitName(7);