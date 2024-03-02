function storage(data) {

    let productStorage = {};

    for (let items of data) {
        let [product, quantity] = items.split(' ');
        quantity = Number(quantity);

        if (productStorage.hasOwnProperty(product)) {
            productStorage[product] += quantity;

        } else {
            productStorage[product] = quantity;

        }
    }
    for (let [product, quantity] of Object.entries(productStorage)) {
        console.log(`${product} -> ${quantity}`);
        
    }
}
storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']);