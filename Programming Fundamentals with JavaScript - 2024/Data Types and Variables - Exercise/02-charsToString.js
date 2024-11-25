function charsToString(char, char1, char2) {

    const chars = [char, char1, char2];
    const output = [];

    for (let i = 0; i < chars.length; i++) {
        let curChar = chars[i];

        output.push(curChar);

    }
    console.log(output.join(''));
}

charsToString('%', '2', 'o');