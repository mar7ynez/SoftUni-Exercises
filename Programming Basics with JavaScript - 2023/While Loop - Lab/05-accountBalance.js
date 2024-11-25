function accountBalance(input) {

    let deposit = input.shift();
    let totalMoney = 0;

    while (deposit !== 'NoMoreMoney') {
        let curDeposit = Number(deposit);

        if (curDeposit < 0) {
            console.log('Invalid operation!');
            break;

        }
        totalMoney += curDeposit;
        console.log(`Increase: ${curDeposit.toFixed(2)}`);

        deposit = input.shift();
    }
    console.log(`Total: ${totalMoney.toFixed(2)}`);
}

accountBalance(["120",
    "45.55",
    "-150"])