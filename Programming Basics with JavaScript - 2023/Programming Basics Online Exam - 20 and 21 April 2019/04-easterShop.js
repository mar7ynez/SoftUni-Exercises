function easterShop(input) {

    let startAmountEggs = Number(input.shift());
    let command = input.shift();
    let amount = Number(input.shift());

    let eggsSold = 0;

    while (command !== 'Close') {
        let currSold = 0;
        let fill = 0;

        if (command === 'Buy') {
            currSold += amount;
            eggsSold += amount;

        } else {
            fill += amount;

        }

        if (command === 'Buy' && amount > startAmountEggs) {
            console.log(`Not enough eggs in store!`);
            console.log(`You can buy only ${startAmountEggs}.`);
            break;
        }
        startAmountEggs -= currSold;
        startAmountEggs += fill;

        command = input.shift();
        amount = Number(input.shift());
    }

    if (command === 'Close') {
        console.log(`Store is closed!`);
        console.log(`${eggsSold} eggs sold.`);

    }
}
easterShop(["13",
    "Buy",
    "8",
    "Fill",
    "3",
    "Buy",
    "10"]);