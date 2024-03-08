function asciiSumator(data) {

    let firstChar = data.shift();
    let secondChar = data.shift();
    let randomString = data.shift();

    let maxAsciiCode = Math.max(secondChar.charCodeAt(), firstChar.charCodeAt());
    let minAsciiCode = Math.min(secondChar.charCodeAt(), firstChar.charCodeAt());

    let sumOfAllCharsBetween = 0;

    for (let curChar of randomString) {
        let isBetween = curChar.charCodeAt() < maxAsciiCode && curChar.charCodeAt() > minAsciiCode;

        if (isBetween) {
            sumOfAllCharsBetween += curChar.charCodeAt();

        }
    }
    console.log(sumOfAllCharsBetween);
}
asciiSumator(['.',
    '@',
    'dsg12gr5653feee5']);