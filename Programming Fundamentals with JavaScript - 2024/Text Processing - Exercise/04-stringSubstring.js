function stringSubstring(word, text) {

    let textLower = text.toLowerCase().split(' ');
    let isTheWordFound = false;

    for (let wordFromText of textLower) {
        if (word === wordFromText) {
            isTheWordFound = true;
            console.log(word);
            break;

        }
    }

    if (!isTheWordFound) {
        console.log(`${word} not found!`);

    }
}
stringSubstring('javascript',
'JavaScript is the best programming language');