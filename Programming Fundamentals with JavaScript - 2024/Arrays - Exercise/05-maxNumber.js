function maxNumber(arrOfNums) {

    const maxNum = [];
    
    for (let i = 0; i < arrOfNums.length; i++) {
        let curElement = arrOfNums[i];
        let isMax = true;

        for (let j = i + 1; j < arrOfNums.length; j++) {
            let rightElements = arrOfNums[j];

            if (curElement <= rightElements) {
                isMax = false;
                break;

            }
        }
        
        if (isMax) {
            maxNum.push(curElement);
            
        }
    }
    console.log(maxNum.join(' '));
}

maxNumber([1, 4, 3, 2]);
// maxNumber([27, 19, 42, 2, 13, 45, 48]);
