function birthdayParty(input) {

    let priceForThePlace = Number(input);
    let cakePrice = priceForThePlace * 0.20;
    let drinksPrice = cakePrice * 0.55;
    let animatorPrice = priceForThePlace / 1 / 3;

    let totalCosts = priceForThePlace + cakePrice + drinksPrice + animatorPrice;

    console.log(totalCosts);
}
birthdayParty(['2250']);