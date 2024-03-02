function cleverLily(input) {

    let lilysAge = Number(input[0]);
    let washMachinePrice = Number(input[1]);
    let singleToyPrice = Number(input[2]);

    let toys = 0;
    let money = 0;
    let stolenMoney = 0;
    let spendMoney = 0;

    for (let i = 1; i <= lilysAge; i++) {
        if (i % 2 !== 0) {
            toys++;

        } else {
            money += 10;
            stolenMoney++
            spendMoney += money;

        }
    }
    spendMoney += toys * singleToyPrice - stolenMoney;

    if (spendMoney < washMachinePrice) {
        console.log(`No! ${(washMachinePrice - spendMoney).toFixed(2)}`);

    } else {
        console.log(`Yes! ${(spendMoney - washMachinePrice).toFixed(2)}`)

    }
}

cleverLily(["21",
"1570.98",
"3"]);