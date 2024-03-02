function theatrePromo(typeOfDay, age) {

    let price = 0;

    if (age < 0 || age > 122) {
        console.log('Error!');
        return;
    }

    if (age <= 18) {
        switch (typeOfDay) {
            case 'Weekday': price = 12; break;
            case 'Weekend': price = 15; break;
            case 'Holiday': price = 5; break;
        }

    } else if (age <= 64) {
        switch (typeOfDay) {
            case 'Weekday': price = 18; break;
            case 'Weekend': price = 20; break;
            case 'Holiday': price = 12; break;
        }

    } else {
        switch (typeOfDay) {
            case 'Weekday': price = 12; break;
            case 'Weekend': price = 15; break;
            case 'Holiday': price = 10; break;
        }

    }
    console.log(`${price}$`);
}

theatrePromo('Holiday', -12);