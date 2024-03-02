function oddOrEvenPosition(input) {

    let numCounter = Number(input[0]);

    let oddSum = 0;
    let oddNumMin = Number.MAX_SAFE_INTEGER
    let oddNumMax = Number.MIN_SAFE_INTEGER

    let evenSum = 0;
    let evenNumMin = Number.MAX_SAFE_INTEGER
    let evenNumMax = Number.MIN_SAFE_INTEGER

    for (let i = 1; i <= numCounter; i++) {
        let currNum = Number(input[i]);

        if (i % 2 === 0) {
            if (currNum > evenNumMax) {
                evenNumMax = currNum;

            }
            if (currNum < evenNumMin) {
                evenNumMin = currNum;

            }
            evenSum += currNum;

        }
        if (i % 2 !== 0) {
            if (currNum > oddNumMax) {
                oddNumMax = currNum;

            }
            if (currNum < oddNumMin) {
                oddNumMin = currNum;

            }
            oddSum += currNum;

        }
    }
    if (oddSum === 0) {
        console.log(`OddSum=${(oddSum).toFixed(2)},`);
        console.log('OddMin=No,');
        console.log('OddMax=No,');

    } else {
        console.log(`OddSum=${(oddSum).toFixed(2)},`);
        console.log(`OddMin=${(oddNumMin).toFixed(2)},`);
        console.log(`OddMax=${(oddNumMax).toFixed(2)},`);

    }
    if (evenSum === 0) {
        console.log(`EvenSum=${(evenSum).toFixed(2)},`);
        console.log('EvenMin=No,');
        console.log('EvenMax=No');

    } else {
        console.log(`EvenSum=${(evenSum).toFixed(2)},`);
        console.log(`EvenMin=${(evenNumMin).toFixed(2)},`);
        console.log(`EvenMax=${(evenNumMax).toFixed(2)}`);

    }
}
oddOrEvenPosition(['6',
    '2',
    '3',
    '5',
    '4',
    '2',
    '1']);