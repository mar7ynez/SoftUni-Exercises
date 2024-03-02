function sumPrimeNonPrime(input) {

    let command = input.shift();
    let primeNumSum = 0;
    let nonPrimeNumSum = 0;


    while (command !== 'stop') {
        let currNum = Number(command);

        if (command < 0) {
            console.log('Number is negative.');
            command = input.shift();
            continue;

        }
        let isItPrime = true;

        for (let divider = 2; divider < currNum; divider++) {

            if (currNum % divider === 0) {
                isItPrime = false;

            }
        }
        if (isItPrime) {
            primeNumSum += currNum;

        } else {
            nonPrimeNumSum += currNum;

        }
        command = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${primeNumSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNumSum}`);
}
sumPrimeNonPrime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"]);