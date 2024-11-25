function rageQuit(randomString) {

    let pattern = /([\D]+)([\d]+)/g;
    let validCharacters;

    let result = [];
    let uniqueSymbols = [];

    while ((validCharacters = pattern.exec(randomString)) !== null) {
        let chars = validCharacters[1];
        let digit = validCharacters[2];
        
        result.push(chars.repeat(digit));
    }
    result.join('').toUpperCase().split('').map((char) => {
        if (!uniqueSymbols.includes(char)) {
            uniqueSymbols.push(char);

        }
    });
    console.log(`Unique symbols used: ${uniqueSymbols.length}`);
    console.log(result.join('').toUpperCase());
}
rageQuit('aSd2&5s@1');