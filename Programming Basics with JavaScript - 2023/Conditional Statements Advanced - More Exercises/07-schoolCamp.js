function schoolCamp(input) {

    let season = input[0];
    let groupType = input[1];
    let studentsNumber = Number(input[2]);
    let nightsNumber = Number(input[3]);

    let nightsPrice = 0;
    let sport = '';

    if (season === 'Winter') {
        if (groupType === 'girls') {
            nightsPrice = nightsNumber * 9.60;
            sport = 'Gymnastics';

        } else if (groupType === 'boys') {
            nightsPrice = nightsNumber * 9.60;
            sport = 'Judo';

        } else {
            nightsPrice = nightsNumber * 10;
            sport = 'Ski';

        }
    } else if (season === 'Spring') {
        if (groupType === 'girls') {
            nightsPrice = nightsNumber * 7.20;
            sport = 'Athletics';

        } else if (groupType === 'boys') {
            nightsPrice = nightsNumber * 7.20;
            sport = 'Tennis';

        } else {
            nightsPrice = nightsNumber * 9.50;
            sport = 'Cycling';

        }
    } else {
        if (groupType === 'girls') {
            nightsPrice = nightsNumber * 15;
            sport = 'Volleyball';

        } else if (groupType === 'boys') {
            nightsPrice = nightsNumber * 15;
            sport = 'Football';

        } else {
            nightsPrice = nightsNumber * 20;
            sport = 'Swimming';

        }
    }
    if (studentsNumber >= 50) {
        nightsPrice *= 0.50;

    } else if (studentsNumber >= 20) {
        nightsPrice *= 0.85;

    } else if (studentsNumber >= 10) {
        nightsPrice *= 0.95;

    }
    console.log(`${sport} ${(nightsPrice * studentsNumber).toFixed(2)} lv.`);
}
schoolCamp(['Spring',
    'girls',
    '20',
    '7']);