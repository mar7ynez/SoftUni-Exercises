function worTracker(data) {

    let wordsReg = {};
    let words = data.shift().split(' ');

    for (let word of words) {
        wordsReg[word] = 0;

    }

    for (let word of data) {
        if (wordsReg.hasOwnProperty(word)) {
            wordsReg[word]++;
        }
    }
    let sortedDsecending = Object.keys(wordsReg).sort((a, b) => wordsReg[b] - wordsReg[a]);

    sortedDsecending.forEach(w => console.log(`${w} - ${wordsReg[w]}`));
}
worTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);