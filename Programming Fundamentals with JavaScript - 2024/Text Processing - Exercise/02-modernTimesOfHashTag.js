function modernTimesOfHashTag(text) {

    text = text.split(' ');

    for (let word of text) {
        if (word.charAt(0) === '#' && word.length > 1) {
            if (word.charCodeAt(1) >= 97 && word.charCodeAt(1) <= 122 || word.charCodeAt(1) >= 65 && word.charCodeAt(1) <= 90) {
                console.log(word.substring(1, word.length));
            }
        }
    }
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');