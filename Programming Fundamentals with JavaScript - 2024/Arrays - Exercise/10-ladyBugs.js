function ladyBugs(data) {

    let fieldLength = data.shift();
    let ladyBugsPos = data.shift().split(' ').map(Number);
    let field = [];

    for (let i = 0; i < fieldLength; i++) {
        if (ladyBugsPos.includes(i)) {
            field[i] = 1;

        } else {
            field[i] = 0;

        }
    }

    for (let i = 0; i < data.length; i++) {
        let [curPos, action, nextPos] = data[i].split(' ');
        curPos = Number(curPos);
        nextPos = Number(nextPos);

        if (!field[curPos]) {
            continue;

        }
        field[curPos] = 0;

        if (action === 'right') {
            let newPos = curPos + nextPos;
            if (newPos < field.length) {
                while (field[newPos] === 1) {
                    newPos += nextPos;

                }

                if (newPos < field.length) {
                    field[newPos] = 1;

                }
            }
        } else {
            let newPos = curPos - nextPos;
            if (newPos >= 0) {
                while (field[newPos] === 1) {
                    newPos -= nextPos;

                }
                
                if (newPos >= 0) {
                    field[newPos] = 1;

                }
            }
        }
    }
    console.log(field.join(' '));
}
ladyBugs([4, '0',
    '0 right 1',
    '1 right 1',
    '1 right 1',
    '1 right 1',
    '1 right 1',
    '2 right 1']);