function sumEvenNumbers(arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let curNumber = Number(arr[i]);

        if (curNumber % 2 === 0) {
            sum += curNumber
        }
    }
    console.log(sum);
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);