function lastKNumbersSequence(n, k) {

    let result = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        let startIdx = result.length < k ? 0 : result.length - k;

        for (let j = startIdx; j < result.length; j++) {
            sum += result[j];

        }
        result[i] = sum;
    }
    console.log(result.join(' '));;
}
lastKNumbersSequence(6, 3); 