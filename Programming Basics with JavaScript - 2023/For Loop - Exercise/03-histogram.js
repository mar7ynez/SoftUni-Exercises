function histogram(input) {

    let n = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    let numbersCounter = 0;

    for (let i = 1; i <= n; i++) {
        let curNum = input[i];
        numbersCounter++

        if (curNum < 200) {
            p1++;

        } else if (curNum <= 399) {
            p2++;

        } else if (curNum <= 599) {
            p3++;

        } else if (curNum <= 799) {
            p4++;

        } else {
            p5++;

        }
    }
    console.log(`${(p1 / numbersCounter * 100).toFixed(2)}%`);
    console.log(`${(p2 / numbersCounter * 100).toFixed(2)}%`);
    console.log(`${(p3 / numbersCounter * 100).toFixed(2)}%`);
    console.log(`${(p4 / numbersCounter * 100).toFixed(2)}%`);
    console.log(`${(p5 / numbersCounter * 100).toFixed(2)}%`);
}

histogram(["3",
    "1",
    "2",
    "999"]);