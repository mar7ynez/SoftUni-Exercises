function bills(input) {

    let months = Number(input[0]);

    let elecBills = 0;
    let waterBills = 0;
    let internetBills = 0;

    for (let index = 1; index <= months; index++) {
        let currMonth = Number(input[index]);

        waterBills += 20;
        internetBills += 15;
        elecBills += currMonth;

    }
    let othersBills = (waterBills + internetBills + elecBills) * 1.20;
    let avgBills = (waterBills + internetBills + elecBills + othersBills) / months;

    console.log(`Electricity: ${elecBills.toFixed(2)} lv\nWater: ${waterBills.toFixed(2)} lv\nInternet: ${internetBills.toFixed(2)} lv`);
    console.log(`Other: ${othersBills.toFixed(2)} lv\nAverage: ${avgBills.toFixed(2)} lv`);
}
bills(['5',
    '68.63',
    '89.25',
    '132.53',
    '93.53',
    '63.22']);