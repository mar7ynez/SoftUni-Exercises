function skiTrip(input) {

    let restDays = Number(input[0]) - 1;
    let typeOfRoom = input[1];
    let grade = input[2];

    let price = 0;

    switch (typeOfRoom) {
        case 'room for one person': price = restDays * 18; break;
        case 'apartment': price = restDays * 25; break;
        case 'president apartment': price = restDays * 35; break;
    }

    if (restDays < 10) {
        if (typeOfRoom === 'apartment') {
            price *= 0.70;

        } else if (typeOfRoom === 'president apartment') {
            price *= 0.90;

        }

    } else if (restDays <= 15) {
        if (typeOfRoom === 'apartment') {
            price *= 0.65;

        } else if (typeOfRoom === 'president apartment') {
            price *= 0.85;

        }

    } else {
        if (typeOfRoom === 'apartment') {
            price *= 0.50;

        } else if (typeOfRoom === 'president apartment') {
            price *= 0.80;

        }
    }

    if (grade === 'positive') {
        price *= 1.25;

    } else {
        price *= 0.90;

    }
    console.log(price.toFixed(2));
}

skiTrip(["30",
"president apartment",
"negative"])