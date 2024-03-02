function reportSystem(input) {

    let expectedIncome = Number(input[0]);
    let index = 1;
    let command = input[index];

    let cashTransCounter = 0;
    let cardTransCounter = 0;
    let payCounter = 0;
    let payWithCard = 0;
    let payCash = 0;

    while (command !== 'End' && payCash + payWithCard < expectedIncome) {
        let currProductPrice = Number(input[index]);
        payCounter++

        if (payCounter <= 1) {
            if (currProductPrice > 100) {
                console.log('Error in transaction!');

            } else {
                payCash += currProductPrice;
                cashTransCounter++
                console.log('Product sold!');

            }
        }
        index++;
        command = input[index];

        if (payCounter >= 2) {
            payCounter = 0;

            if (currProductPrice < 10) {
                console.log('Error in transaction!');

            } else {
                payWithCard += currProductPrice;
                cardTransCounter++;
                console.log('Product sold!');

            }
        }
    }
    if (payCash + payWithCard >= expectedIncome) {
        console.log(`Average CS: ${(payCash / cashTransCounter).toFixed(2)}`);
        console.log(`Average CC: ${(payWithCard / cardTransCounter).toFixed(2)}`);

    } else {
        console.log("Failed to collect required money for charity.");

    }
}
reportSystem(['500',
    '120',
    '8',
    '63',
    '256',
    '78',
    '317'
]);