function extract() {

    let textContentElement = document.getElementById('content');
    let pattern = /\(([A-Za-z\s]+)\)/g;
    let validWords;
    let extractedWords = [];

    while (validWords = pattern.exec(textContentElement.textContent)) {
        extractedWords.push(validWords[1]);

    }
    return extractedWords.join('; ');
}