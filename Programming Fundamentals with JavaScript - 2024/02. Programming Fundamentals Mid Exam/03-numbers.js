function numbers(separatedInt) {

    let arrOfNums = separatedInt.split(' ').map(Number).sort((a, b) => b - a);
    let sum = 0;
    let result = [];

    for (let i = 0; i < arrOfNums.length; i++) {
        sum += arrOfNums[i];
    }

    for (let i = 0; i < arrOfNums.length; i++) {
        if (arrOfNums[i] > sum / arrOfNums.length) {
            result.push(arrOfNums[i]);

            if (i === 4) {
                break;
            }

        } else {
            continue;

        }
    }

    if (result.length <= 0) {
        console.log('No');
    }
    console.log(result.join(' '));
}
numbers('1');