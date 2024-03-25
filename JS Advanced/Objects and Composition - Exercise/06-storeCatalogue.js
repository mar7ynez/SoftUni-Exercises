function storeCatalogue(arrOfProducts) {

    let productStorage = {};

    for (let products of arrOfProducts) {
        let [productName, productPrice] = products.split(' : ');
        if (!productStorage.hasOwnProperty(productName[0])) {
            productStorage[productName[0]] = [];

        }
        productStorage[productName[0]].push({ productName, productPrice });
    }
    let groups = Object.keys(productStorage).sort((a, b) => a.localeCompare(b));

    for (let group of groups) {
        console.log(group);
        productStorage[group].sort((a, b) => a.productName.localeCompare(b.productName)).forEach((product) => {
            console.log(`  ${product.productName}: ${product.productPrice}`);
        });
    }
}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);