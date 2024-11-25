function specialNumbers(n) {

    let numAsString = '';
    let isSpecial = '';
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        numAsString = String(i);

        for (let j = 0; j < numAsString.length; j++) {
            sum += Number(numAsString[j]);

            if (sum === 5 || sum === 7 || sum === 11) {
                isSpecial = '-> True';

            } else {
                isSpecial = '-> False';

            }
        }
        console.log(`${i} ${isSpecial}`);
        sum = 0;
    }
}

specialNumbers(20);