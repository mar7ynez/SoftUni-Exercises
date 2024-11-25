function movieDestination(input) {

    let movieBudget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let daysCounter = Number(input[3]);

    let costs = 0;

    if (season === 'Winter') {
        if (destination === 'Dubai') {
            costs = 45000;

        } else if (destination === 'Sofia') {
            costs = 17000;

        } else {
            costs = 24000;

        }
    } else {
        if (destination === 'Dubai') {
            costs = 40000;

        } else if (destination === 'Sofia') {
            costs = 12500;

        } else {
            costs = 20250;

        }
    }
    if (destination === 'Dubai') {
        costs *= 0.70;

    } else if (destination === 'Sofia') {
        costs *= 1.25;

    }
    let totalCosts = costs * daysCounter;

    if (movieBudget >= totalCosts) {
        console.log(`The budget for the movie is enough! We have ${(movieBudget - totalCosts).toFixed(2)} leva left!`);

    } else {
        console.log(`The director needs ${(totalCosts - movieBudget).toFixed(2)} leva more!`);

    }
}
movieDestination(["1000000",
    "Dubai",
    "Summer",
    "5"]);