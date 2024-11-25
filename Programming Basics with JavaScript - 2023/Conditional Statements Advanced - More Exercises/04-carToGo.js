function carToGo(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let carClass = '';
    let carType = '';
    let price = 0;

    if (season === 'Summer') {
        if (budget <= 100) {
            carClass = 'Economy class';
            carType = 'Cabrio';
            price = budget * 0.35;

        } else if (budget <= 500) {
            carClass = 'Compact class';
            carType = 'Cabrio';
            price = budget * 0.45;

        } else {
            carClass = 'Luxury class';
            carType = 'Jeep'
            price = budget * 0.90;

        }
    } else if (season === 'Winter') {
        if (budget <= 100) {
            carClass = 'Economy class';
            carType = 'Jeep';
            price = budget * 0.65;

        } else if (budget <= 500) {
            carClass = 'Compact class';
            carType = 'Jeep';
            price = budget * 0.80;

        } else {
            carClass = 'Luxury class';
            carType = 'Jeep'
            price = budget * 0.90;

        }
    }
    console.log(carClass);
    console.log(`${carType} - ${price.toFixed(2)}`);
}
carToGo(['450',
    'Summer']);