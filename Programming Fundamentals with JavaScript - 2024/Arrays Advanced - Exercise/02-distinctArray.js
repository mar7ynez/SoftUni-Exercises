function distinctArray(arr) {

    const newArray = [];

    for (i in arr) {
        if (newArray.indexOf(arr[i]) === -1) {
            newArray.push(arr[i]);

        }
    }
    console.log(newArray.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);