function vacation(input) {

    let neededMoney = Number(input.shift());
    let budget = Number(input.shift());
    
    let command = input.shift();
    let spendCounter = 1;
    let days = 0;

    while (neededMoney > budget) {
        let curMoney = Number(input.shift());

        if (spendCounter % 6 === 0) {
            console.log("You can't save the money.");
            console.log(`${days}`);
            break;
            
        }

        if (command === 'spend') {
            spendCounter++;
            budget -= curMoney;

            if (budget < 0) {
                budget = 0;

            }

        } else {
            budget += curMoney;

        }

        days++
        command = input.shift();
    }

    if (neededMoney <= budget) {
        console.log(`You saved the money for ${days} days.`);

    }
}

vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])