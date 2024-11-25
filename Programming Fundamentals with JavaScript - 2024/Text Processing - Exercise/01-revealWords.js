function revealWords(words, text) {

    words = words.split(', ');
    text = text.split(' ');

    text.forEach(word => {
        if (word.includes('*')) {
            for (let replaceWord of words) {
                if (word.length === replaceWord.length) {
                    text.splice(text.indexOf(word), 1, replaceWord)

                }
            }
        }
    });
    console.log(text.join(' '));
}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');