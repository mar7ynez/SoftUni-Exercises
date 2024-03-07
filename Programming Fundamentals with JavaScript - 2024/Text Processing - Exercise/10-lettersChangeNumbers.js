function lettersChangeNumbers(text) {
    
    let pattern = /\s{1,}/g;
    text = text.split(pattern);
    
    let totalSum = 0;
    
    for (let sequence of text) {
        let number = Number(sequence.substring(1, sequence.length - 1));
        
        for (let i = 0; i < sequence.length; i++) {
            let curChar = sequence[i];
            let isUpperCase = curChar.charCodeAt() >= 65 && curChar.charCodeAt() <= 90 ? true : false;
            let isLetter = curChar.charCodeAt() >= 65 && curChar.charCodeAt() <= 90 || curChar.charCodeAt() >= 97 && curChar.charCodeAt() <= 122 ? true : false;
            
            if (isLetter) {
                if (isUpperCase && i === 0) {
                    number /= positionInAlphabet(curChar);
                    
                } else if (!isUpperCase && i === 0) {
                    number *= positionInAlphabet(curChar);
                    
                } else if (isUpperCase && i !== 0) {
                    number -= positionInAlphabet(curChar);
                    
                } else if (!isUpperCase && i !== 0) {
                    number += positionInAlphabet(curChar);
                    
                }
            }
        }
        totalSum += number;
    }
    console.log(totalSum.toFixed(2));
    
    function positionInAlphabet(myChar) {
        let DIFFERENCE_CHARCODE_AND_LETTERS = 96;
        let myCharLowercase = myChar.toLowerCase();
        let position = myCharLowercase.charCodeAt() - DIFFERENCE_CHARCODE_AND_LETTERS;
    
        return Number(position);
    }
}
lettersChangeNumbers('P34562Z q2576f   H456z');