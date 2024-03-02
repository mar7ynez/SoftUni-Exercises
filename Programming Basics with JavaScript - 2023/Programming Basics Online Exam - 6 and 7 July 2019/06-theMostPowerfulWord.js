function theMostPowerfulWord(input) {

    let index = 0;
    let command = input[index];

    let wordPower = 0;
    let theWord = '';

    while (command !== 'End of words') {
        let currentWord = input[index];
        const isVowel = 'aeiouy'.includes(currentWord[0].toLowerCase());

        let wordSum = 0;
        for (let i = 0; i < currentWord.length; i++) {
            let curLetterValue = currentWord[i].charCodeAt()

            wordSum += curLetterValue;
        }
        let currentPower = 0;

        if (isVowel) {
            currentPower = wordSum * currentWord.length;

        } else if (!isVowel) {
            currentPower = Math.floor(wordSum / currentWord.length);

        }

        if (wordPower < currentPower) {
            wordPower = currentPower;
            theWord = currentWord;

        }
        index++;
        command = input[index];
    }
    console.log(`The most powerful word is ${theWord} - ${wordPower}`);
}
theMostPowerfulWord(["But",
    "Some",
    "People",
    "Say",
    "It's",
    "LOVE",
    "End of words"]);