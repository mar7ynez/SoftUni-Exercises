function easterDecoration(input) {

    let clients = Number(input.shift());
    let totalPrice = 0;

    for (let i = 1; i <= clients; i++) {
        let curProduct = input.shift();

        let purchasedProducts = 0;
        let productPrice = 0;

        while (curProduct !== 'Finish') {
            purchasedProducts++;

            switch (curProduct) {
                case 'basket': productPrice += 1.50; break;
                case 'wreath': productPrice += 3.80; break;
                case 'chocolate bunny': productPrice += 7; break;
            }
            curProduct = input.shift();

        }

        if (purchasedProducts % 2 === 0) {
            productPrice *= 0.80;

        }
        totalPrice += productPrice;

        console.log(`You purchased ${purchasedProducts} items for ${productPrice.toFixed(2)} leva.`);
    }
    let avgP = totalPrice / clients;

    console.log(`Average bill per client is: ${avgP.toFixed(2)} leva.`);
}
easterDecoration(["2",
    "basket",
    "wreath",
    "chocolate bunny",
    "Finish",
    "wreath",
    "chocolate bunny",
    "Finish"]);