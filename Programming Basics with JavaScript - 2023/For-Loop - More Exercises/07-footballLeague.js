function footballLeague(input) {

    let stadionCapacity = Number(input[0]);
    let allFans = Number(input[1]);

    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for (let index = 2; index < input.length; index++) {
        let currFanSector = input[index];

        if (currFanSector === 'A') {
            sectorA++;

        } else if (currFanSector === 'B') {
            sectorB++;

        } else if (currFanSector === 'V') {
            sectorV++;

        } else if (currFanSector === 'G') {
            sectorG++;

        }
    }
    console.log(`${((sectorA / allFans) * 100).toFixed(2)}%`);
    console.log(`${((sectorB / allFans) * 100).toFixed(2)}%`);
    console.log(`${((sectorV / allFans) * 100).toFixed(2)}%`);
    console.log(`${((sectorG / allFans) * 100).toFixed(2)}%`);
    console.log(`${(((sectorA + sectorB + sectorG + sectorV) / stadionCapacity) * 100).toFixed(2)}%`);
}
footballLeague(['76',
    '10',
    'A',
    'V',
    'V',
    'V',
    'G',
    'B',
    'A',
    'V',
    'B',
    'B']);