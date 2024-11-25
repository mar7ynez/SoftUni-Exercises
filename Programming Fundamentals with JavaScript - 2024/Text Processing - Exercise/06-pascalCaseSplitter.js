function pascalCaseSplitter(pascalCaseString) {

    let splittedWords = [];
    let indexes = [];

    for (let i = 0; i < pascalCaseString.length; i++) {
        if (pascalCaseString[i].charCodeAt() >= 65 && pascalCaseString[i].charCodeAt() <= 90) {
            indexes.push(i);

        }
    }
    for (let i = 0; i < indexes.length; i++) {
        let startIdx = indexes[i];
        let lastIndex = indexes[i + 1];

        splittedWords.push(pascalCaseString.substring(startIdx, lastIndex));
    }
    console.log(splittedWords.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');