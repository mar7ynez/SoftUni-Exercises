function  nonDecreasingSubset(arr) {

    const result = [];
    let curBiggest = 0;

    for (let i = 0; i < arr.length; i++) {
        let curNumber = arr[i];
        
        if (curNumber >=  curBiggest) {
            curBiggest = curNumber;
            result.push(curBiggest);

        }
    }
    console.log(result.join(' '));
}

nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);