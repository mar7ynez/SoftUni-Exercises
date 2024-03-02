function minNumber(input) {

    let nums = input.shift();

    let biggest = Number.MAX_SAFE_INTEGER;

    while (nums !== 'Stop') {
        currentNumber = Number(nums);

        if (currentNumber < biggest) {
            biggest = currentNumber;

        }

        nums = input.shift();
    }
    console.log(biggest);
}

minNumber(["-10",
"20",
"-30",
"Stop"])