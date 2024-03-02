function sequence2kPlus1(input) {

    let lastNum = Number(input[0]);

    let num = 1;

    while (num <= lastNum) {
        console.log(num);

        num = num * 2 + 1;
    }
}

sequence2kPlus1(["31"]);