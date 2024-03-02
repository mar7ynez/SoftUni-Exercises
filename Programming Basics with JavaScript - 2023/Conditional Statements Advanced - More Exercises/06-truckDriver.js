function truckDriver(input) {

    let season = input[0];
    let kmForOneMonth = Number(input[1]);
    let income = 0;

    if (kmForOneMonth <= 5000) {
        if (season === 'Spring' || season === 'Autumn') {
            income = kmForOneMonth * 0.75;

        } else if (season === 'Summer') {
            income = kmForOneMonth * 0.90;

        } else if (season === 'Winter') {
            income = kmForOneMonth * 1.05;

        } else {
            income = kmForOneMonth * 1.45;

        }
    } else if (kmForOneMonth <= 10000) {
        if (season === 'Spring' || season === 'Autumn') {
            income = kmForOneMonth * 0.95;

        } else if (season === 'Summer') {
            income = kmForOneMonth * 1.10;

        } else if (season === 'Winter') {
            income = kmForOneMonth * 1.25;

        } else {
            income = kmForOneMonth * 1.45;

        }
    } else {
        income = kmForOneMonth * 1.45;

    }
    let totalForSeason = income * 4;
    let restMoney = totalForSeason - totalForSeason * 0.10;

    console.log(restMoney.toFixed(2));
}
truckDriver(['Summer',
    '3455']);