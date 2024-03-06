function countStringOccurrences(sentence, word) {

    let text = sentence.split(' ');
    let wordCounter = 0;

    for (let curWord of text) {
        if (curWord === word) {
            wordCounter++;

        }
    }
    console.log(wordCounter);
}
countStringOccurrences('softuni is great place for learning new programming languages',
    'softuni');