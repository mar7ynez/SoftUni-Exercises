function vacation(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let location = '';
    let sleepPlace = '';
    let price = 0;

    if (budget <= 1000) {
        sleepPlace = 'Camp';
        if (season === 'Summer') {
            location = 'Alaska';
            price = budget * 0.65;

        } else {
            location = "Morocco";
            price = budget * 0.45;

        }
    } else if (budget <= 3000) {
        sleepPlace = 'Hut';
        if (season === 'Summer') {
            location = 'Alaska';
            price = budget * 0.80;

        } else {
            location = 'Morocco';
            price = budget * 0.60;

        }
    } else {
        sleepPlace = 'Hotel';
        if (season === 'Summer') {
            location = 'Alaska'
            price = budget * 0.90;

        } else {
            location = 'Morocco';
            price = budget * 0.90;

        }
    }
    console.log(`${location} - ${sleepPlace} - ${price.toFixed(2)}`);
}
vacation(['800',
    'Summer']);