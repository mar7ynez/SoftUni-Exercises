function perfectNumber(num) {

    let divisorsSum = checkIfPerfect(num);

    if (divisorsSum === num) {
        console.log('We have a perfect number!');

    } else {
        console.log("It's not so perfect.");

    }

    function checkIfPerfect(num) {
        let sum = 0;

        for (let i = num / 2; i > 0; i--) {
            let curDivisor = i;

            if (num % curDivisor === 0) {
                sum += curDivisor;

            }
        }
        return sum;
    }
}
perfectNumber(6);