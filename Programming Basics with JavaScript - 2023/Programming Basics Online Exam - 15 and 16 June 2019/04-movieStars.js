function movieStars(input) {

    let budget = Number(input[0]);
    let index = 1;
    let command = input[index];

    while (command !== 'ACTION') {
        let actorName = input[index]
        let curActorIncome = Number(input[index + 1]);

        if (actorName.length > 15) {
            budget -= budget * 0.20;

        }

        if (budget > curActorIncome) {
            budget -= curActorIncome;

        } else if (budget <= curActorIncome) {
            console.log(`We need ${(curActorIncome - budget).toFixed(2)} leva for our actors.`);
            break;

        }
        index++;
        command = input[index];
    }
    if (command === 'ACTION') {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);

    }
}
movieStars(["90000",
    "Christian Bale",
    "70000.50",
    "Leonard DiCaprio",
    "Kevin Spacey",
    "24000.99"]);