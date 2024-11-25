function reverseString(word) {

    const reversed = [];

    for (let i = word.length - 1; i >= 0; i--) { 
        let curLetter = word[i];

        reversed.push(`${curLetter}`);
    }
    console.log(reversed.join(''));
}

reverseString('Hello');