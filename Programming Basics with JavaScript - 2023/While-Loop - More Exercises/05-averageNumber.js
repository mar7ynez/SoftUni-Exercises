function averageNumber(input) {

    let numberCounter = Number(input[0]);
    let sum = 0;

    for (let i = 1; i <= numberCounter; i++) {
        sum += Number(input[i]);

    }
    console.log((sum / numberCounter).toFixed(2));
}
averageNumber(['4',
    '3',
    '2',
    '4',
    '2']);