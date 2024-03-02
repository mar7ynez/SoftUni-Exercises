function arrayManipulator(arrOfInt, arrOfCommands) {

    for (let i = 0; i < arrOfCommands.length; i++) {
        let curManipulation = arrOfCommands[i].split(' ');
        let command = curManipulation.shift();

        if (command === 'add') {
            let index = Number(curManipulation.shift())
            arrOfInt.splice(index, 0, curManipulation.shift());

        } else if (command === 'addMany') {
            let index = Number(curManipulation.shift());

            for (let i = 0; i < curManipulation.length; i++) {
                arrOfInt.splice(index, 0, curManipulation[i]);
                index++;
                
            }

        } else if (command === 'remove') {
            let index = Number(curManipulation.shift());
            arrOfInt.splice(index, 1);

        } else if (command === 'contains') {
            let element = Number(curManipulation.shift());
            let index = arrOfInt.indexOf(element);

            console.log(index);

        } else if (command === 'shift') {
            let rotations = Number(curManipulation.shift())
            for (let i = 0; i < rotations; i++) {
                let numShift = arrOfInt.shift();
                arrOfInt.push(numShift);

            }

        } else if (command === 'sumPairs') {
            let result = [];
            for (let i = 0; i < arrOfInt.length; i += 2) {

                if (arrOfInt.length - i <= 1) {
                    result.push(Number(arrOfInt[i]));

                } else {
                    result.push(Number(arrOfInt[i]) + Number(arrOfInt[i + 1]))

                }
            }
            arrOfInt = result;

        } else if (command === 'print') {
            console.log(`[ ${arrOfInt.join(', ')} ]`);

        }
    }
}
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);