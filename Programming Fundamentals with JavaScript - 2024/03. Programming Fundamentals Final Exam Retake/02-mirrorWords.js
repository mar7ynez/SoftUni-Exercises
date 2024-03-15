function mirrorWords(data) {

    let randomString = data.shift();
    let pattern = /([@#])([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;

    let validWords;
    let validPairsFound = [];
    let validPairsCounter = 0;

    while (validWords = pattern.exec(randomString)) {

        let wordOne = validWords[2];
        let wordTwo = validWords[3];

        validPairsCounter++;
        let reversedWord = wordTwo.split('').reverse().join('');

        if (reversedWord === wordOne) {
            validPairsFound.push(`${wordOne} <=> ${wordTwo}`);

        }
    }

    if (validPairsCounter) {
        console.log(`${validPairsCounter} word pairs found!`);

    } else {
        console.log('No word pairs found!');

    }

    if (validPairsFound.length > 0) {
        console.log('The mirror words are:');
        console.log(validPairsFound.join(', '));

    } else {
        console.log('No mirror words!');

    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);