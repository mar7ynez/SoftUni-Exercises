function reversedChars(char, char1, char2) {

    const arr = [char, char1, char2];
    const output = [];

    for (let i = arr.length; i >= 0; i--) {
        let curCharacter = arr[i];

        output.push(curCharacter);

    }
    console.log(output.join(' '));
}

reversedChars('A', 'B', 'C');