function biggestElement(matrix) {

    let biggestNumber = Number.MIN_SAFE_INTEGER;

    matrix.forEach(arr => {
        if (biggestNumber < Math.max(...arr)) {
            biggestNumber = Math.max(...arr);
        }
    });
    return biggestNumber;
}
biggestElement([[-101, -101, -201, -101, -101, -101],
[-101, -101, -101, -101, -101, -101],
[-101, -101, -101, -101, -101, -101]]);