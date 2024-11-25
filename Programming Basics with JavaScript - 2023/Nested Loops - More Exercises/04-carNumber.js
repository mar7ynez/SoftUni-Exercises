function carNumber(input) {

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    const specialCarNum = [];

    for (let i = startNum; i <= endNum; i++) {

        for (let j = startNum; j <= endNum; j++) {

            for (let k = startNum; k <= endNum; k++) {

                for (let l = startNum; l <= endNum; l++) {

                    if (i % 2 === 0 && l % 2 !== 0 || l % 2 === 0 && i % 2 !== 0) {
                        if (i > l) {
                            if ((j + k) % 2 === 0) {
                                specialCarNum.push(`${i}${j}${k}${l}`);

                            }
                        }
                    }
                }
            }
        }
    }
    console.log(specialCarNum.join(' '));
}
carNumber(['2',
    '3']);