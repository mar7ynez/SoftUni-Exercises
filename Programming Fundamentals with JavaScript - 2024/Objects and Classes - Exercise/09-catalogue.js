function catalogue(data) {

    let productCollection = [];

    for (let curProduct of data) {
        let [product, productPrice] = curProduct.split(' : ');
        productPrice = Number(productPrice);

        let productObj = {
            name: product,
            price: productPrice

        };
        productCollection.push(productObj);
    }
    productCollection.sort((a, b) => a.name.localeCompare(b.name));
    let productGroup = '';

    productCollection.forEach(product => {
        if (product.name[0] === productGroup) {
            console.log(`${product.name}: ${product.price}`);

        } else {
            productGroup = product.name[0];
            console.log(productGroup);
            console.log(`${product.name}: ${product.price}`);
        }
    });
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)