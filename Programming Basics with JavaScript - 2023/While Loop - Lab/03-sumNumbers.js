function sumNumbers(input) {

    let goal = Number(input.shift());
    let command = Number(input.shift());

    let sum = 0;

    while (goal > sum) {
        sum += command;

        command = Number(input.shift());
    }
    console.log(sum);
}

sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

