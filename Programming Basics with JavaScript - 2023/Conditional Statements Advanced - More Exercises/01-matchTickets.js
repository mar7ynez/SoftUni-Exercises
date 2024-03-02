function matchTickets(input) {

    let budget = Number(input[0]);
    let category = input[1];
    let peopleNumber = Number(input[2]);

    let ticketPrice = 0;
    let transport = 0;

    switch (category) {
        case 'VIP': ticketPrice = 499.99 * peopleNumber; break;
        case 'Normal': ticketPrice = 249.99 * peopleNumber; break;

    }
    if (peopleNumber <= 4) {
        transport = budget * 0.75;

    } else if (peopleNumber <= 9) {
        transport = budget * 0.60;

    } else if (peopleNumber <= 24) {
        transport = budget * 0.50;

    } else if (peopleNumber <= 49) {
        transport = budget * 0.40;

    } else {
        transport = budget * 0.25;

    }
    let totalCosts = transport + ticketPrice;

    if (budget >= totalCosts) {
        console.log(`Yes! You have ${(budget - totalCosts).toFixed(2)} leva left.`);

    } else {
        console.log(`Not enough money! You need ${(totalCosts - budget).toFixed(2)} leva.`);

    }
}
matchTickets(['1000',
    'Normal',
    '1'])