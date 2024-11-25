function maxNumber(input) {

    let nums = input.shift();

    let biggest = Number.MIN_SAFE_INTEGER;

    while (nums !== 'Stop') {
        currentNumber = Number(nums);

        if (currentNumber > biggest) {
            biggest = currentNumber;

        }

        nums = input.shift();
    }
    console.log(biggest);
}

maxNumber(["45",
"-20",
"7",
"99",
"Stop"])