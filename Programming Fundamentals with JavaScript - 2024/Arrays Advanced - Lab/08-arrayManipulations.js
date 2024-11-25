function arrayManipulation(arr) {

    let arrOfNums = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i++) {
        let [command, firstNum, secondNum] = arr[i].split(' ');

        switch (command) {
            case 'Add': arrOfNums.push(firstNum); break;
            case 'Remove': arrOfNums = arrOfNums.filter(num => num !== firstNum); break;
            case 'RemoveAt': arrOfNums.splice(firstNum, 1); break;
            case 'Insert': arrOfNums.splice(secondNum, 0, firstNum); break;
        }
    }
    console.log(arrOfNums.join(' '));
}
arrayManipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);