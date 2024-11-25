function train(arr) {

    let wagons = arr.shift().split(' ').map(Number);
    let capacity = arr.shift();

    for (let command of arr) {
        let curCommand = command.split(' ');

        if (curCommand[0] === 'Add') {
            wagons.push(Number(curCommand[1]));

        } else {
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + Number(curCommand[0]) <= capacity) {
                    wagons[i] += Number(curCommand[0]);
                    break;

                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);