function primeNumberChecker(num) {

    if (num < 2) {
        console.log('false');

    }

    for (let i = 2; i <= Math.sqrt(num); i++) {

        if (num % i === 0) {
            return false;

        }
    }
    return true;
}

primeNumberChecker(81);