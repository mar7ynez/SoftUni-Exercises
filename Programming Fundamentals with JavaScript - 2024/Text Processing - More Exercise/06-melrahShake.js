function melrahShake(data) {

    let randomString = data.shift();
    let pattern = data.shift();
    let startIndex = randomString.indexOf(pattern);
    
    while (startIndex !== -1) {
        startIndex = randomString.indexOf(pattern);
        let lastIndex = randomString.lastIndexOf(pattern);

        if (startIndex !== -1 && lastIndex !== -1 && pattern.length) {
            let splittedString = randomString.split('');
            splittedString.splice(startIndex, pattern.length);
            splittedString.splice(lastIndex - pattern.length, pattern.length);
            randomString = splittedString.join('')

            let patSplit = pattern.split('');
            patSplit.splice(pattern.length / 2, 1);
            pattern = patSplit.join('');
            console.log('Shaked it.');
            
        } else {
            console.log('No shake.');
            break;

        }
    }
    console.log(randomString);
}
melrahShake(['##mtm!!mm.mm*mtm.#',
'mtm']);