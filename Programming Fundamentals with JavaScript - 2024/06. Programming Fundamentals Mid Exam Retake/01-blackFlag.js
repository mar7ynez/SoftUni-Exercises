function blackFlag(data) {

    let days = Number(data[0]);
    let dailyPlunder = Number(data[1]);
    let targetPlunder = Number(data[2]);

    let totalPlunder = 0;

    for (let i = 1; i <= days; i++) {
        totalPlunder += dailyPlunder;

        if (i % 3 === 0) {
            totalPlunder += dailyPlunder * 0.50;

        }
        if (i % 5 === 0) {
            totalPlunder *= 0.70;

        }
    }
    let percentPlunder = totalPlunder / targetPlunder * 100;

    if (totalPlunder >= targetPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);

    } else {
        console.log(`Collected only ${percentPlunder.toFixed(2)}% of the plunder.`);

    }
}
blackFlag(["5",
    "40",
    "100"]);