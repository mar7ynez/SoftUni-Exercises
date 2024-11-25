function sumOfOddNumbers(number) {
    let currNumber = 1;
    let sum = 0;

    for (let i = 1; i <= number; i += 1) {
        console.log(currNumber);

        sum += currNumber;
        currNumber += 2;
    }
    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);