function uniquePinCodes(input) {

    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let thirdNum = Number(input[2]);

    for (let i = 2; i <= firstNum; i++) {
        if (i % 2 === 1) {
            continue;
            
        }

        for (let j = 2; j <= secondNum; j++) {
            if (j !== 2 && j !== 3 && j !== 5 && j !== 7) {
                continue;

            }

            for (let k = 2; k <= thirdNum; k++) {
                if (k % 2 === 1) {
                    continue;

                }
                console.log(`${i} ${j} ${k}`)
            }
        }
    }
}
uniquePinCodes(['3',
    '5',
    '5'
]);