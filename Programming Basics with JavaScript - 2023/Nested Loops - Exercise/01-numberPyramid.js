function numberPyramid(input) {

    let n = Number(input[0]);
    let lastNum = 1;
    let isReached = false;

    for (let row = 0; row <= n; row++) {
        let currNums = [];
        for (let col = lastNum; col <= lastNum + row; col++) {
            currNums.push(col);

            if (col === n) {
                isReached = true;
                break;
                
            }
        }
        console.log(currNums.join(' '));
        lastNum = currNums.pop() + 1;

        if (isReached) {
            break;

        }
    }
}
numberPyramid(["7"]);