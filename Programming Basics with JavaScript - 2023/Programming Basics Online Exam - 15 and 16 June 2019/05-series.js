function series(input) {

    let budget = Number(input.shift());
    let seriesCounter = Number(input.shift());
    let cost = 0;

    for (let i = 1; i <= seriesCounter; i++) {
        let curSeries = input.shift();
        let curSeriesPrice = Number(input.shift());

        switch (curSeries) {
            case 'Thrones': cost += curSeriesPrice * 0.50; break;
            case 'Lucifer': cost += curSeriesPrice * 0.60; break;
            case 'Protector': cost += curSeriesPrice * 0.70; break;
            case 'TotalDrama': cost += curSeriesPrice * 0.80; break;
            case 'Area': cost += curSeriesPrice * 0.90; break;

            default: cost += curSeriesPrice; break;
        }
    }
    if (budget >= cost) {
        console.log(`You bought all the series and left with ${(budget - cost).toFixed(2)} lv.`);

    } else {
        console.log(`You need ${(cost - budget).toFixed(2)} lv. more to buy the series!`);

    }
}
series(["10",
    "3",
    "Thrones",
    "5",
    "Riverdale",
    "5",
    "Gotham",
    "2"]);