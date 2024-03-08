function valueOfAString(data) {

    let randomString = data[0];
    let condition = data[1];

    let lowerCaseSum = 0;
    let upperCaseSum = 0;

    for (let curChar of randomString) {
        let isLower = curChar.charCodeAt() >= 97 && curChar.charCodeAt() <= 122;
        let isUpper = curChar.charCodeAt() >= 65 && curChar.charCodeAt() <= 90;

        if (condition === 'LOWERCASE' && isLower) {
            lowerCaseSum += curChar.charCodeAt();

        } else if (condition === 'UPPERCASE' && isUpper) {
            upperCaseSum += curChar.charCodeAt();

        }
    }
    let sumOfBothCases = lowerCaseSum + upperCaseSum;

    console.log(`The total sum is: ${sumOfBothCases}`);
}
valueOfAString(['HelloFromMyAwesomePROGRAM',
'LOWERCASE']);