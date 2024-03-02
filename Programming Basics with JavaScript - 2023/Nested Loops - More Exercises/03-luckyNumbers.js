function luckyNumber(input) {

    let number = Number(input[0]);

    const luckyNumbers = [];

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {

                    if ((i + j) === (k + l) && number % (i + j) === 0) {
                        luckyNumbers.push(`${i}${j}${k}${l}`)

                    }
                }
            }
        }
    }
    console.log(luckyNumbers.join(' '));
}
luckyNumber(['3']);