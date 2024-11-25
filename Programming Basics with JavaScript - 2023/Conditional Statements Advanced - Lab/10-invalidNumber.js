function invalidNumber(input) {

    let theNumber = Number(input[0]);

    if (theNumber >= 100 && theNumber <= 200 || theNumber === 0) {

    } else {
        console.log('invalid');

    }
}

invalidNumber(["75"]);