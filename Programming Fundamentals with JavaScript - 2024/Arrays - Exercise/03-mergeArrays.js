function mergerArrays(firstArr, secondArr) {

    const newArray = [];

    for (let i = 0; i < firstArr.length; i++) {
        if (i % 2 === 0) {
            newArray.push(Number(firstArr[i]) + Number(secondArr[i]))

        } else {
            newArray.push(firstArr[i] + secondArr[i]);

        }
    }
    console.log(newArray.join(' - '));
}

mergerArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']);