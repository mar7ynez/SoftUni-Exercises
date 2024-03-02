function streamOfLetters(input) {

    const isLatinLetter = (symbol) => {
        symbol = symbol.charCodeAt();
        return (65 <= symbol && 90 >= symbol) || (97 <= symbol && symbol <= 122);
    }

    let finalResult = '';
    let currWord = '';
    const secretLetters = { 'c': 0, 'o': 0, 'n': 0 };

    while (true) {
        let command = input.shift();

        const currSymbol = command;

        if (currSymbol === 'End') {
            break;

        }

        if (!isLatinLetter(currSymbol)) {
            continue;

        }

        if (!secretLetters.hasOwnProperty(currSymbol)) {
            currWord += currSymbol;
            continue;

        }

        if (!secretLetters[currSymbol]) {
            secretLetters[currSymbol] += 1;

        } else {
            currWord += currSymbol;

        }

        if (Object.values(secretLetters).every(x => x >= 1)) {
            finalResult += currWord + ' ';
            currWord = '';

            Object.keys(secretLetters).forEach(x => secretLetters[x] = 0)

        }
    }
    console.log(finalResult);
}
streamOfLetters(['H',
    'n',
    'e',
    'l',
    'l',
    'o',
    'o',
    'c',
    't',
    'c',
    'h',
    'o',
    'e',
    'r',
    'e',
    'n',
    'e',
    'End']);