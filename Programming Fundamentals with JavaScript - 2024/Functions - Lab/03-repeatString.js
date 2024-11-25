function repeatString(str, repeatCount) {

    let repeatFuncOutput = repeat(str, repeatCount);
    console.log(repeatFuncOutput);

    function repeat(str, repeatCount) {
        const repeated = [];

        for (let i = 0; i < repeatCount; i++) {
            repeated.push(str);

        }
        return repeated.join('');
    }
}
repeatString("String", 2);