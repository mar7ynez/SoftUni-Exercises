function flowers(input) {

    let chrysanthemumNum = Number(input[0]);
    let rosesNum = Number(input[1]);
    let tullipsNum = Number(input[2]);
    let season = input[3];
    let holiday = input[4];

    let price = 0;

    if (season === 'Spring' || season === 'Summer') {
        price = (chrysanthemumNum * 2) + (rosesNum * 4.10) + (tullipsNum * 2.50);
        if (tullipsNum > 7) {
            price *= 0.95;
            
        }
    } else {
        price = (chrysanthemumNum * 3.75) + (rosesNum * 4.50) + (tullipsNum * 4.15);
        if (rosesNum >= 10 && season === 'Winter') {
            price *= 0.90;

        }
    }
    if (rosesNum + tullipsNum + chrysanthemumNum > 20) {
        price *= 0.80;

    }
    if (holiday === 'Y') {
        console.log(((price *= 1.15) + 2).toFixed(2));

    } else {
        console.log((price + 2).toFixed(2));

    }
}
flowers(['2',
    '4',
    '8',
    'Spring',
    'Y']);