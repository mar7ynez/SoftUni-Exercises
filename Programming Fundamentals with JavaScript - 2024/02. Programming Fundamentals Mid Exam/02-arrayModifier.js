function arrayModifier(arr) {

    let arrOfElements = arr.shift().split(' ').map(Number);
    let action = arr.shift().split(' ');

    while (action[0] !== 'end') {
        let [command, idx1, idx2] = action;

        idx1 = Number(action[1]);
        idx2 = Number(action[2]);

        if (command === 'swap') {
            let temp = arrOfElements[idx1];
            arrOfElements[idx1] = arrOfElements[idx2];
            arrOfElements[idx2] = temp;

        } else if (command === 'multiply') {
            let multipliedIndex = arrOfElements[idx1] * arrOfElements[idx2];

            arrOfElements.splice(idx1, 1, multipliedIndex);

        } else if (command === 'decrease') {
            arrOfElements = arrOfElements.map(n => n - 1);

        }
        action = arr.shift().split(' ');
    }
    console.log(arrOfElements.join(', '));
}
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);