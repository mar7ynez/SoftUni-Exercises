function evenAndOddSubtraction(arr) {

    let evenSum = 0;
    let oddSum = 0;

    for (let element of arr) {

        if (element % 2 === 0) {
            evenSum += Number(element);

        } else {
            oddSum += Number(element);

        }
    }
    console.log(evenSum - oddSum);
}

evenAndOddSubtraction([3,5,7,9])