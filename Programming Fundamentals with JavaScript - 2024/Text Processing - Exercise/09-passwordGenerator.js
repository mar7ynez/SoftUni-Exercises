function passwordGenerator(data) {

    let concatString = data[0] + data[1];
    let theWord = data[2].toUpperCase();
    concatString = concatString.split('');

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    while (concatString.includes('a') || concatString.includes('e')
        || concatString.includes('i') || concatString.includes('o') || concatString.includes('u')) {

        let index = 0;

        for (let curChar of concatString) {
            for (let vowel of vowels) {
                if (vowel === curChar.toLowerCase()) {
                    concatString.splice(concatString.indexOf(curChar), 1, theWord[index]);
                    index++;

                    if (index >= theWord.length) {
                        index = 0;
                        break;

                    }
                }
            }
        }
    }
    console.log(`Your generated password is ${concatString.reverse().join('')}`);
}
passwordGenerator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
]
);