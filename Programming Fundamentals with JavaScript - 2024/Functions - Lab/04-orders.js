function order(product, quantity) {

    let orderPrice = function(product) {
        let price = 0;
        
        switch(product) {
            
            case "coffee": price = 1.50; break;
            case "water": price = 1.00; break;
            case "coke": price = 1.40; break;
            default : price = 2.00; break;
            
        }
        return price;
    }
    let totalPrice = orderPrice(product) * quantity;

    console.log(totalPrice.toFixed(2));
}
order("coffee", 2);