function equalArrays(firstArray, secondArray) {

    let sum = 0;
    let isIdentical = true;

    for (let i = 0; i < firstArray.length; i++) {
        let firstArrElement = Number(firstArray[i]);
        let secondArrElement = Number(secondArray[i]);

        sum += firstArrElement;

        if (firstArrElement !== secondArrElement) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isIdentical = false;
            break;

        }
    }
    if (isIdentical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
        
    }
}
equalArrays(['1'], ['10']);