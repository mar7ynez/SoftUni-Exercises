function oddAndEvenSum(num) {
    let numAsString = num.toString();

    let output = sum(num)
    console.log(output);

    function sum(num) {
        let evenSum = 0;
        let oddSum = 0;

        for(let i = 0; i < numAsString.length; i++) {
            let curDigit = Number(numAsString[i]);

            if (curDigit % 2 === 0) {
                evenSum += curDigit;

            } else {
                oddSum += curDigit;

            }
        }
        return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    }
}
oddAndEvenSum(6549685784531)