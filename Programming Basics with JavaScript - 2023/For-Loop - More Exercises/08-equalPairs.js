function equalPairs(data) {
    let pairsCount = Number(data.shift());

    let numberCol = [];

    for (let i = 0; i < pairsCount * 2; i += 2) {
        numberCol.push(Number(data[i]) + Number(data[i + 1]));

    }
    if (Math.max(...numberCol) !== Math.min(...numberCol)) {
        let maxDifBetweenPairs = 0;
        
        for (let i = 0; i < numberCol.length - 1; i++) {
            if (numberCol[i] >= numberCol[i + 1] && maxDifBetweenPairs < numberCol[i] - numberCol[i + 1]) {
                maxDifBetweenPairs = numberCol[i] - numberCol[i + 1];

            } else {
                if (maxDifBetweenPairs < numberCol[i + 1] - numberCol[i]) {
                    maxDifBetweenPairs = numberCol[i + 1] - numberCol[i]

                }
            }
        }
        console.log(`No, maxdiff=${maxDifBetweenPairs}`);

    } else {
        console.log(`Yes, value=${numberCol[0]}`);

    }
}
equalPairs(['7',
    '34',
    '-33',
    '52',
    '12',
    '-32',
    '32',
    '23',
    '41',
    '7',
    '25',
    '34',
    '23',
    '124',
    '21']);