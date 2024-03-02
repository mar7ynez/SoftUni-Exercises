function traveling(input) {

    let destination = input.shift();

    while (destination !== 'End') {
        let budget = Number(input.shift());
        let savedMoney = 0;

        while (budget > savedMoney) {
            savedMoney += Number(input.shift());

        }
        console.log(`Going to ${destination}!`);

        destination = input.shift();
    }
}
traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"]);
