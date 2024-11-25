function tripleOfLatinLetters(numAsStr) {

    for (let i = 0; i < numAsStr; i++) {
        
        for (let j = 0; j < numAsStr; j++) {

            for (let k = 0; k < numAsStr; k++) {
                let firstletter = String.fromCharCode(97 + Number(i));
                let secondLetter = String.fromCharCode(97 + Number(j));
                let thirdLetter = String.fromCharCode(97 + Number(k));
                
                console.log(`${firstletter}${secondLetter}${thirdLetter}`);
            }
        }
    }
}

tripleOfLatinLetters('3');