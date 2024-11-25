function shootForTheWin(data) {

    let target = data.shift().split(' ').map(Number);
    let command = data.shift();

    let targetShotCount = 0;

    while (command !== 'End') {
        command = Number(command);
        let curTarget = target[command];
        let idxOfTarget = target.indexOf(curTarget)

        if (idxOfTarget !== -1) {
            
            for (let i = 0; i < target.length; i++) {
                if (target[i] !== -1) {
                    if (i !== command) {
                        if (target[i] > curTarget) {
                            target[i] -= curTarget;

                        } else {
                            target[i] += curTarget;

                        }
                    } else {
                        target[i] = -1;

                    }
                }
            }
            targetShotCount++;
        }
        command = data.shift();
    }
    console.log(`Shot targets: ${targetShotCount} -> ${target.join(' ')}`);
}
shootForTheWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"]);