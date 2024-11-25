function storeProvision(stock, order) {

    let localStorage = {};

    for (let i = 0; i < stock.length; i += 2) {
        let productName = stock[i];
        let productQty = Number(stock[i + 1]);

        localStorage[productName] = productQty;
    }

    for (let i = 0; i < order.length; i += 2) {
        let productName = order[i];
        let productQty = Number(order[i + 1]);

        if (!localStorage.hasOwnProperty(productName)) {
            localStorage[productName] = 0;

        }
        localStorage[productName] += productQty;
    }
    let entries = Object.entries(localStorage);

    for (let [product, qty] of entries) {
        console.log(`${product} -> ${qty}`);
        
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);