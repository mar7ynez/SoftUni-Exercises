function postOffice(data) {

    let randomString = data.split('|');
    let capitalLettersPart = randomString.shift();
    let asciiAndWordLength = randomString.shift();
    let allTheWords = randomString.shift().split(' ');

    let capLettersPatern = /([#$%*&])([A-Z]+)\1/g;
    let codeAndWordLengthPattern = /(\d+:\d{2})/g;
    //let wordsPattern = /\s[A-Z][\S]+/g;
    
    let capitalLettersMatch;
    let asciiCodeAndLengthStorage = {};
    let matchAsciiAndLength = asciiAndWordLength.match(codeAndWordLengthPattern);
    
    while (capitalLettersMatch = capLettersPatern.exec(capitalLettersPart)) {
        let capLetters = capitalLettersMatch[2];
    
        for (let curLetter of capLetters) {
            for (let asciiAndLength of matchAsciiAndLength) {
                let [asciiCode, wordLength] = asciiAndLength.split(':');
                let wordLengthFix = wordLength.replace(/^0+/, '');

                if (curLetter.charCodeAt() !== Number(asciiCode)) {
                    continue;

                } else if (!asciiCodeAndLengthStorage.hasOwnProperty(asciiCode)) {
                    asciiCodeAndLengthStorage[asciiCode] = Number(wordLengthFix);
                    continue;

                }
            }
        }
    }

    for (let curWord of allTheWords) {
        if (!asciiCodeAndLengthStorage.hasOwnProperty(curWord[0].charCodeAt())) {
            continue;
            
        }
        if (curWord.length - asciiCodeAndLengthStorage[curWord[0].charCodeAt()] === 1) {
            console.log(curWord);
            continue;

        }
    }
}
postOffice('Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig')