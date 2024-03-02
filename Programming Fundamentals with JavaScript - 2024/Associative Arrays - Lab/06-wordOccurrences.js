function wordOccurrences(data) {

    let wordRegister = {};

    for (let word of data) {
        if (wordRegister.hasOwnProperty(word)) {
            wordRegister[word] += 1;

        } else {
            wordRegister[word] = 1;

        }
    }
    let sortedByCountDescending = Object.entries(wordRegister).sort((a, b) => b[1] - a[1]);

    sortedByCountDescending.forEach(entry => {
        console.log(`${entry[0]} -> ${entry[1]} times`);
        
    });
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);