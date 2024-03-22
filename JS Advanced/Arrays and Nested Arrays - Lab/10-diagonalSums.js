function diagonalSums(matrix) {

    let length = matrix.length - 1;
    let result = [];
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i = 0; i <= length; i++) {
        primaryDiagonal += matrix[i][i];
        secondaryDiagonal += matrix[i][length - i];

    }
    result.push(primaryDiagonal, secondaryDiagonal);

    return result.join(' ');
}
diagonalSums([[20, 40],
[10, 60]]);