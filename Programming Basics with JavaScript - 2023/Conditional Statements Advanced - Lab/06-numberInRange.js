function numberInRange(input) {

    let theNumber = Number(input[0]);

    if (theNumber >= -100 && theNumber <= 100 && theNumber !== 0) {
        console.log('Yes');

    } else {
        console.log('No');

    }
}

numberInRange(["25"]);