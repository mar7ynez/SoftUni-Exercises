function sameNumbers(data) {

    numAsStr = data.toString();
    let result = 0;
    let areAllNumsSame = true

    for (let i = 0; i < numAsStr.length; i++) {
        result += Number(numAsStr[i]);

        if (numAsStr[i] !== numAsStr[0]) {
            areAllNumsSame = false;

        } else {
            areAllNumsSame = true;

        }
    }
    console.log(areAllNumsSame);
    console.log(result);
}
sameNumbers(1234);