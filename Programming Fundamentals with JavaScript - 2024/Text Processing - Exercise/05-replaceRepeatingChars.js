function replaceRepeatingChars(randomString) {

    randomString = randomString.split('');
    let editedString = [];

    for (let i = 0; i < randomString.length; i++) {
        if (randomString[i] !== randomString[i + 1]) {
            editedString.push(randomString[i]);
        }
    }
    console.log(editedString.join(''));

}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');