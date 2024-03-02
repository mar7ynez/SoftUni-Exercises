function harvest(input) {

    let vineYardSize = Number(input[0]);
    let grapeForOneM = Number(input[1]);
    let literVineToSell = Number(input[2]);
    let numberOfWorkers = Number(input[3]);

    let grapeHarvest = vineYardSize * 0.40;
    let totalGrape = grapeHarvest * grapeForOneM;
    let totalVine = totalGrape / 2.5;
    let restVine = totalVine - literVineToSell;

    if (totalVine >= literVineToSell) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(totalVine)} liters.\n${Math.ceil(restVine)} liters left -> ${Math.ceil(restVine / numberOfWorkers)} liters per person.`);

    } else {
        console.log(`It will be a tough winter! More ${Math.floor(literVineToSell - totalVine)} liters wine needed.`);

    }
}
harvest(['650',
    '2',
    '175',
    '3']);
