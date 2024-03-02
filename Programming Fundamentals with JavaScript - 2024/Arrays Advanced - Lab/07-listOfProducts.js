function listOfProducts(arrOfProducts) {

    let sortedProducts = arrOfProducts.sort()

    for (let i = 0; i < sortedProducts.length; i++) {
        console.log(`${i + 1}.${sortedProducts[i]}`);

    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);