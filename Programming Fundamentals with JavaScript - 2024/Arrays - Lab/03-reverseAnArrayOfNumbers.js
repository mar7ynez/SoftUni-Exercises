function reverseAnArrayOfNums(n, arrayOfNums) {

    const reversedArray = [];

    for (let i = n - 1; i >= 0; i--) {
        reversedArray.push(arrayOfNums[i]);

    }
    console.log(reversedArray.join(' '));
}

reverseAnArrayOfNums(2, [66, 43, 75, 89, 47]);