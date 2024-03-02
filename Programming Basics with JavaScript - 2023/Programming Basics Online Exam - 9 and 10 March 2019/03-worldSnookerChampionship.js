function worldSnookerChampionship(input) {

    let competitionStage = input[0];
    let ticketType = input[1];
    let ticketCount = Number(input[2]);
    let photoWithTrophy = input[3]

    let cost = 0;

    if (ticketType === 'Standard') {
        if (competitionStage === 'Quarter final') {
            cost = 55.50;

        } else if (competitionStage === 'Semi final') {
            cost = 75.88;

        } else {
            cost = 110.10;

        }
    } else if (ticketType === 'Premium') {
        if (competitionStage === 'Quarter final') {
            cost = 105.20;

        } else if (competitionStage === 'Semi final') {
            cost = 125.22;

        } else {
            cost = 160.66;

        }
    } else if (ticketType === 'VIP') {
        if (competitionStage === 'Quarter final') {
            cost = 118.90;

        } else if (competitionStage === 'Semi final') {
            cost = 300.40;

        } else {
            cost = 400;

        }
    }
    let totalCosts = cost * ticketCount;

    if (totalCosts > 4000) {
        if (photoWithTrophy === 'Y') {
            totalCosts *= 0.75;

        } else {
            totalCosts *= 0.75;

        }
    } else if (totalCosts > 2500) {
        if (photoWithTrophy === 'Y') {
            totalCosts = (totalCosts * 0.90) + (ticketCount * 40);

        } else {
            totalCosts *= 0.90;

        }
    } else if (totalCosts < 2500) {
        if (photoWithTrophy === 'Y') {
            totalCosts += ticketCount * 40;

        }
    }
    console.log(totalCosts.toFixed(2));
}
worldSnookerChampionship(["Final",
    "Premium",
    "25",
    "Y"]);