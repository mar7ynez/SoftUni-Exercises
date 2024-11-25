function substringUsage(wordString, startIdx, countOfElements) {

    let stringResult = wordString.substring(startIdx, countOfElements + startIdx);

    console.log(stringResult);
}
substringUsage('SkipWord', 4, 7);
