function walking(input) {

    let command = input.shift();
    let totalSteps = 0;

    while(command !== 'Going home') {
        totalSteps += Number(command);

        if (totalSteps >= 10000) {
            console.log('Goal reached! Good job!');
            console.log(`${totalSteps - 10000} steps over the goal!`);
            break;

        }

        command = input.shift();
    }

    if (command === 'Going home') {
        totalSteps += Number(input.shift());
        
        if (totalSteps >= 10000) {
            console.log('Goal reached! Good job!');
            console.log(`${totalSteps - 10000} steps over the goal!`);

        } else {
            console.log(`${10000 - totalSteps} more steps to reach goal.`);

        }
    }
}

walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])