function postOffice(data) {

    let randomString = String(data).split('|');
    let capitalLettersPart = randomString.shift();
    let asciiAndWordLength = randomString.shift();
    let allTheWords = randomString.shift().split(' ');

    let capLettersPatern = /([#$%*&])([A-Z]+)\1/g;
    let codeAndWordLengthPattern = /(\d+:\d{2})/g;

    let capitalLettersMatch;
    let asciiCodeAndLengthStorage = new Map();

    while (capitalLettersMatch = capLettersPatern.exec(capitalLettersPart)) {
        let matchAsciiAndLength;
        let capLetters = capitalLettersMatch[2];

        for (let curLetter of capLetters) {
            asciiCodeAndLengthStorage.set(curLetter, 0);

            while (matchAsciiAndLength = codeAndWordLengthPattern.exec(asciiAndWordLength)) {
                let [asciiCode, wordLength] = matchAsciiAndLength[1].split(':');
                let wordLengthFix = wordLength.replace(/^0+/, '');
                let asciiCodeString = String.fromCharCode(asciiCode);

                if (curLetter !== asciiCodeString) {
                    continue;

                } else if (asciiCodeAndLengthStorage.has(asciiCodeString)) {
                    asciiCodeAndLengthStorage.set(asciiCodeString, Number(wordLengthFix));
                    break;

                }
            }
        }
        let index = 0;

        for (let curWord of allTheWords) {
            let capLetters = capitalLettersMatch[2];
            if (!asciiCodeAndLengthStorage.has(curWord[0])) {
                continue;

            }
            if (capLetters[index] === curWord[0] && curWord.length - 1 === asciiCodeAndLengthStorage.get(capLetters[index])) {
                index++;
                console.log(curWord);
                continue;

            }
        }
    }
}
postOffice('Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig')