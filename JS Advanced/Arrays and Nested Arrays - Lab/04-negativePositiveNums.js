function negativePositiveNumbers(arr) {

    let result = [];

    arr.forEach((num) => {
        if (Math.sign(num) === -1) {
            result.unshift(num);

        } else {
            result.push(num);

        }
    });
    console.log(result.join('\n'));
}
negativePositiveNumbers([3, -2, 0, -1]);