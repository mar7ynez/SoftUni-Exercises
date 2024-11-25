function lettersCombinations(input) {

    let a = input[0].charCodeAt();
    let z = input[1].charCodeAt();
    let excludeLetter = input[2].charCodeAt();

    const combinations = [];

    for (let i = a; i <= z; i++) {
        for (let j = a; j <= z; j++) {
            for (let k = a; k <= z; k++) {
                if (i === excludeLetter || j === excludeLetter || k === excludeLetter) {
                    continue;

                }
                combinations.push(`${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)}`);

            }
        }
    }
    console.log(combinations.join(' '), combinations.length);
}
lettersCombinations(['a', 'c', 'b']);