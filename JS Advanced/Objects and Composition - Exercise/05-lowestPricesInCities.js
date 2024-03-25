function lowestPricesInCities(townsInfo) {

    let productsRegister = {};

    for (let curTown of townsInfo) {
        let [townName, productName, productPrice] = curTown.split(' | ');
        productPrice = Number(productPrice);

        if (!productsRegister.hasOwnProperty(productName)) {
            productsRegister[productName] = { price: productPrice, town: townName };

        }

        if (productsRegister[productName].price <= productPrice) {
            continue;

        }
        productsRegister[productName] = { price: productPrice, town: townName };
    }
    for (let productName in productsRegister) {
        console.log(`${productName} -> ${productsRegister[productName].price} (${productsRegister[productName].town})`);

    }
}
lowestPricesInCities(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000']);