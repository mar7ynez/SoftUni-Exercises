function computerStore(prices) {

    let action = prices.shift();
    let priceWithoutTaxes = 0;
    let taxes = 0;

    while (action !== 'special' && action !== 'regular') {
        let currentAction = Number(action);

        if (currentAction < 0) {
            console.log('Invalid price!');

        } else {
            priceWithoutTaxes += currentAction;
            taxes += currentAction * 0.20;

        }
        action = prices.shift();
    }

    let totalPrice = priceWithoutTaxes + taxes;

    if (action === 'special') {
        totalPrice *= 0.90;

    }

    if (!priceWithoutTaxes) {
        console.log('Invalid order!');

    } else {
        console.log(`Congratulations you've just bought a new computer!
        Price without taxes: ${priceWithoutTaxes.toFixed(2)}$
        Taxes: ${taxes.toFixed(2)}$
        -----------
        Total price: ${totalPrice.toFixed(2)}$`);
        
    }
}
computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]);