function fitnessCard(input) {

    let budget = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sportType = input[3];

    let price = 0;

    if (gender === 'm') {
        if (sportType === 'Gym') {
            price = 42;

        } else if (sportType === 'Boxing') {
            price = 41;

        } else if (sportType === 'Yoga') {
            price = 45;

        } else if (sportType === 'Zumba') {
            price = 34;

        } else if (sportType === 'Dances') {
            price = 51;

        } else if (sportType === 'Pilates') {
            price = 39;

        }
    } else {
        if (sportType === 'Gym') {
            price = 35;

        } else if (sportType === 'Boxing') {
            price = 37;

        } else if (sportType === 'Yoga') {
            price = 42;

        } else if (sportType === 'Zumba') {
            price = 31;

        } else if (sportType === 'Dances') {
            price = 53;

        } else if (sportType === 'Pilates') {
            price = 37;

        }
    }

    if (age <= 19) {
        price *= 0.80;

    }

    if (price <= budget) {
        console.log(`You purchased a 1 month pass for ${sportType}.`);

    } else {
        console.log(`You don't have enough money! You need $${(price - budget).toFixed(2)} more.`);

    }
}
fitnessCard(["50",
    "m",
    "23",
    "Gym"]);