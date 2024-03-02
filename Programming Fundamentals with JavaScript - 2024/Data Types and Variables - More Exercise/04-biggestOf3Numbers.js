function biggestOfThreeNumbers(a, b, c) {

    let biggestNumber = Number.MIN_SAFE_INTEGER;
    const arr = [a, b, c];

    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i];
    
        if (curNum > biggestNumber) {
            biggestNumber = curNum;

        }

    }
    console.log(biggestNumber);
}

biggestOfThreeNumbers(-43,
    -43.2,
    -43.1);