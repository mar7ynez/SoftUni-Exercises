function equalNeighbors(matrix) {


    function findPair(symbol, row, col) {
        if (row > 0 && bannedSymbols[row - 1].includes(symbol)) {
            return false;
            
        }
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1]
        ];

        for (const [moveRow, moveCol] of directions) {
            let tryRow = row + moveRow;
            let tryCol = col + moveCol;

            if (!validIndex(tryRow, tryCol)) {
                continue;

            }
            if (symbol === matrix[tryRow][tryCol]) {
                return true;

            }
        }
        return false;
    }

    function validIndex(row, col) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length;

    }

    let pairs = 0;
    const bannedSymbols = {};

    for (let row = 0; row < matrix.length; row++) {
        bannedSymbols[row] = [];

    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            const isFound = findPair(matrix[row][col], row, col);

            if (isFound && !bannedSymbols[row].includes(matrix[row][col])) {
                pairs += 1;
                bannedSymbols[row].push(matrix[row][col]);

            }
        }
    }
    console.log(pairs);
}
equalNeighbors([['2', '2', '2', '2'],
['well', 'done', 'no', '6'],
['not', 'done', 'yet', '5']]);