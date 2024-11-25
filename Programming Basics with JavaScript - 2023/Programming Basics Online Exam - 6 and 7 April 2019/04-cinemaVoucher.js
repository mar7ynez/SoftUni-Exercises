function cinemaVoucher(input) {

    let voucherValue = Number(input[0]);

    let index = 1;
    let command = input[index];
    let productPrice = 0;
    let ticketCounter = 0;
    let otherProductsCount = 0;

    while (command !== 'End') {
        let productToBuy = input[index];
        let productLength = productToBuy.length

        if (productLength > 8) {
            productPrice += productToBuy.charCodeAt(0) + productToBuy.charCodeAt(1);
            if (productPrice > voucherValue) {
                break;

            }
            ticketCounter++;

        } else if (productLength <= 8) {
            productPrice += productToBuy.charCodeAt(0);
            if (productPrice > voucherValue) {
                break;

            }
            otherProductsCount++;
        }
        index++
        command = input[index];
    }
    console.log(`${ticketCounter}`);
    console.log(`${otherProductsCount}`);
}
cinemaVoucher(["300",
    "Captain Marvel",
    "popcorn",
    "Pepsi"]);