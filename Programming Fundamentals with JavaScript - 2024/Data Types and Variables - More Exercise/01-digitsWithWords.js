function digitsWithWords(wordFormDigit) {

    let digit = 0;

    switch(wordFormDigit) {
        case 'nine': digit = 9; break;
        case 'eight': digit = 8; break;
        case 'seven': digit = 7; break;
        case 'six': digit = 6; break;
        case 'five': digit = 5; break;
        case 'four': digit = 4; break;
        case 'three': digit = 3; break;
        case 'two': digit = 2; break;
        case 'one': digit = 1; break;
        
        default : digit = 0; break;
    }
    console.log(digit);
}

digitsWithWords('nine');