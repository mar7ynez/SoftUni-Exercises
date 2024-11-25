function addAndSubstract(arr) {

    let sumArr = 0;
    let sumModifiedArr = 0;

    for (let i = 0; i < arr.length; i++) {
        let currNumber = arr[i];
        sumArr += currNumber;

        if (currNumber % 2 === 0) {
            arr[i] = currNumber + i;

        } else {
            arr[i] = currNumber - i;

        }
        sumModifiedArr += arr[i];
    }
    console.log(arr);
    console.log(sumArr);
    console.log(sumModifiedArr);
}

addAndSubstract([5, 15, 23, 56, 35]);