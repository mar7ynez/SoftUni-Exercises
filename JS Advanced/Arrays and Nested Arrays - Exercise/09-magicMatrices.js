function magicMatrices(mat) {

    let sum = mat[0].reduce((a, b) => a + b, 0);
    let length = mat.length;

    for (let i = 0; i < length; i++) {
        let sumRow = 0;
        let sumCol = 0;

        for (let j = 0; j < length; j++) {
            sumRow += mat[i][j];
            sumCol += mat[j][i];

        }
        if (sum !== sumRow || sum !== sumCol) {
            return false
        }
    }
    return true
}
magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);