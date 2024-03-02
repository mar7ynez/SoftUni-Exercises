function divisionWithoutRemainder(input) {

    let countOfNums = Number(input[0]);
    
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 1; i <= countOfNums; i++) {
        let curNumber = Number(input[i]);

        if (curNumber % 2 === 0) {
            p1++;

        }

        if (curNumber % 3 === 0) {
            p2++;

        }
        
        if (curNumber % 4 === 0) {
            p3++;

        }
    }
    console.log(`${(p1 / countOfNums * 100).toFixed(2)}%`);
    console.log(`${(p2 / countOfNums * 100).toFixed(2)}%`);
    console.log(`${(p3 / countOfNums * 100).toFixed(2)}%`);
}

divisionWithoutRemainder(["3",
"3",
"6",
"9"])
