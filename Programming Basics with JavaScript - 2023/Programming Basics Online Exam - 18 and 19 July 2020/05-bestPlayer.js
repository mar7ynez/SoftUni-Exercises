function bestPlayer(input) {

    let index = 0;
    let command = input[index];

    let goalsSum = 0;
    let thePlayer = '';


    while (command !== 'END') {
        index++;
        let currGoals = Number(input[index]);

        if (currGoals > goalsSum) {
            goalsSum = currGoals;
            thePlayer = command;
        }
        index++
        command = input[index]

        if (currGoals >= 10) {
            break;
        }
    }

    if (goalsSum >= 3) {
        console.log(`${thePlayer} is the best player!`);
        console.log(`He has scored ${goalsSum} goals and made a hat-trick !!!`);

    } else {
        console.log(`${thePlayer} is the best player!`);
        console.log(`He has scored ${goalsSum} goals.`);
    }
}

bestPlayer(["Zidane",
"1",
"Felipe",
"2",
"Johnson",
"4",
"END"])