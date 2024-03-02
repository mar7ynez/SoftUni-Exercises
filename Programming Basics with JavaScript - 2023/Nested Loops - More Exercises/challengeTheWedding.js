function challengeTheWedding(input) {

    let mansCounter = Number(input[0]);
    let womansCounter = Number(input[1]);
    let availTables = Number(input[2]);

    let tableCounter = 0;

    const result = [];

    for (let i = 1; i <= mansCounter; i++) {
        for (let j = 1; j <= womansCounter; j++) {

            if (tableCounter >= availTables) {
                break;

            } else {
                tableCounter++
                result.push(`(${i} <-> ${j})`);

            }
        }
    }
    console.log(result.join(' '));
}
challengeTheWedding(['2',
    '2',
    '6']);