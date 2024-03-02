function transportPrice(input) {

    let kilometersToGo = Number(input[0]);
    let dayOrNight = input[1];
    let price = 0;

    if (kilometersToGo <= 19) {
        if (dayOrNight === 'day') {

            price += kilometersToGo * 0.79 + 0.70;

        } else {

            price += kilometersToGo * 0.90 + 0.70;

        }

    } else if (kilometersToGo <= 99 && (dayOrNight === 'day' || dayOrNight === 'night')) {

        price += kilometersToGo * 0.09;

    } else {

        price += kilometersToGo * 0.06;

    }

    console.log(price.toFixed(2));

}
transportPrice(['5',
    'day']);