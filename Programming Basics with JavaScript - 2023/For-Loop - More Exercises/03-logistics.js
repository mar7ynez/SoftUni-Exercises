function logistics(input) {

    let numberWares = Number(input[0]);

    let bus = 0;
    let truck = 0;
    let train = 0;
    let tonsCounter = 0;
    let busTons = 0;
    let truckTons = 0;
    let trainTons = 0;

    for (let index = 1; index < input.length; index++) {
        let currentWareTons = Number(input[index]);

        if (currentWareTons <= 3) {
            bus += currentWareTons * 200;
            tonsCounter += currentWareTons;
            busTons += currentWareTons;

        } else if (currentWareTons <= 11) {
            truck += currentWareTons * 175;
            tonsCounter += currentWareTons;
            truckTons += currentWareTons;

        } else {
            train += currentWareTons * 120;
            tonsCounter += currentWareTons;
            trainTons += currentWareTons;

        }
    }
    let avgPrice = (bus + truck + train) / tonsCounter;

    console.log(`${avgPrice.toFixed(2)}\n${(busTons / tonsCounter * 100).toFixed(2)}%\n${(truckTons / tonsCounter * 100).toFixed(2)}%\n${(trainTons / tonsCounter * 100).toFixed(2)}%`);
}
logistics(['4',
    '1',
    '5',
    '16',
    '3'
]);