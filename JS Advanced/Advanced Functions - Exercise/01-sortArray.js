function sortArray(arr, criteria) {

    switch (criteria) {
        case 'asc':
            arr.sort((a, b) => a - b);
            break;
        case 'desc':
            arr.sort((a, b) => b - a);
            break;
    }
    return arr;
}
sortArray([14, 7, 17, 6, 8], 'asc');