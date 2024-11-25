function biggerHalf(arr) {

    arr.sort((a, b) => a - b);

    if (arr.length % 2 === 0) {
        arr.splice(0, arr.length / 2);

    } else {
        let halfLength = Math.floor(arr.length / 2);
        arr.splice(0, arr[arr.indexOf(halfLength)])

    }
    return arr;
}
biggerHalf([3, 19, 14, 7, 2, 19, 6]);