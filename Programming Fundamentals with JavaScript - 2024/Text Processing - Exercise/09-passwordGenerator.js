function passwordGenerator(data) {

    let concatString = data[0] + data[1];
    let theWord = data[2].toUpperCase();
    concatString = concatString.split('');

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    while (concatString.includes('a') || concatString.includes('e')
        || concatString.includes('i') || concatString.includes('o') || concatString.includes('u')) {

        let index = 0;

        for (let curChar of concatString) {
            if (vowels.includes(curChar)) {
                concatString.splice(concatString.indexOf(curChar), 1, theWord[index]);
                index++;

                if (index >= theWord.length) {
                    index = 0;
                    break;

                }
            }
        }
    }
    console.log(`${concatString.reverse().join('')}`);
    console.log('SIytsDrtDtEbBtRUqtTnSnIsDhttDEbBRrUsTSyIrD');
}
passwordGenerator([
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
    ]
    );