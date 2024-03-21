function wordsUppercase(data) {

    let pattern = /[A-Za-z0-9]+/g;
    let validWords = data.match(pattern).map(x => x.toUpperCase()).join(', ');

    console.log(validWords);
}
wordsUppercase('Hi, how are you?');