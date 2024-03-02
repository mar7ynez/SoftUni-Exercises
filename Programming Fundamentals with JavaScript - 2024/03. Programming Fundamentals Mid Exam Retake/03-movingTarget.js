function movingTarget(data) {

    let target = data.shift().split(' ').map(Number);
    let actions = data.shift().split(' ');

    while (actions[0] !== 'End') {
        let [command, index, value] = actions;

        index = Number(index);
        value = Number(value);

        let curTarget = target[index];

        switch (command) {
            case 'Shoot':
                if (target.indexOf(curTarget) !== -1) {

                    if (target[index] - value <= 0) {
                        target.splice(target.indexOf(curTarget), 1);

                    } else {
                        target[index] -= value;

                    }
                }
                break;
            case 'Add':
                if (target.indexOf(curTarget) !== -1 && target.indexOf(curTarget) < target.length) {
                    target.splice(index, 0, value);

                } else {
                    console.log('Invalid placement!');

                }
                break;
            case 'Strike':
                if (target.indexOf(curTarget) - value >= 0 && target.indexOf(curTarget) + value < target.length) {
                    target.splice(index - 1, 2 * value + 1);

                } else {
                    console.log('Strike missed!');

                }

                break;
        }
        actions = data.shift().split(' ');
    }
    console.log(target.join('|'));
}
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);