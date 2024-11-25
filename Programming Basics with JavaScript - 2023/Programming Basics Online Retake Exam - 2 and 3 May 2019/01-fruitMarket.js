function fruitMarket(strawberryPrice, bananaAmount, orangeAmount, blueberryAmount, strawberryAmount) {
    let blueberryPrice = Number(strawberryPrice) * 0.5;
    let orangePrice = blueberryPrice * 0.6;
    let bananaPrice = blueberryPrice * 0.2;

    let blueberryTotal = blueberryPrice * blueberryAmount;
    let orangeTotal = orangePrice * orangeAmount;
    let bananaTotal = bananaPrice * bananaAmount;
    let strawberryTotal = strawberryPrice * strawberryAmount;
    let totalMoney = blueberryTotal + orangeTotal + bananaTotal + strawberryTotal;

    console.log(totalMoney)
}
fruitMarket('48',
    '10',
    '3.3',
    '6.5',
    '1.7')