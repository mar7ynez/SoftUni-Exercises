function coins(input) {

    let restMoney = Number(input[0]);
    let moneyInCoins = Math.floor(restMoney * 100);
    let coinsCount = 0;

    const coinsRest = [200, 100, 50, 20, 10, 5, 2, 1];

    while (moneyInCoins > 0) {
        for (let i = 0; i < coinsRest.length; i++) {

            if (coinsRest[i] <= moneyInCoins) {
                moneyInCoins -= coinsRest[i];
                coinsCount++
                break;

            }
        }
    }
    console.log(coinsCount);
}
coins([1.51]);