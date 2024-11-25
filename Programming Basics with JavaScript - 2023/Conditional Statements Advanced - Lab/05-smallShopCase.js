function smallShop(input) {

    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);

    let cost = 0;

    if (town === 'Sofia') {
        switch(product) {
            case 'coffee': cost = 0.50; break;
            case 'water': cost = 0.80; break;
            case 'beer': cost = 1.20; break;
            case 'sweets': cost = 1.45; break;
            case 'peanuts': cost = 1.60; break;
        }

    } else if (town === 'Plovdiv') {
        switch(product) {
            case 'coffee': cost = 0.40; break;
            case 'water': cost = 0.70; break;
            case 'beer': cost = 1.15; break;
            case 'sweets': cost = 1.30; break;
            case 'peanuts': cost = 1.50; break;
        }

    } else {
        switch(product) {
            case 'coffee': cost = 0.45; break;
            case 'water': cost = 0.70; break;
            case 'beer': cost = 1.10; break;
            case 'sweets': cost = 1.35; break;
            case 'peanuts': cost = 1.55; break;
        }

    }
    let price = cost * quantity;

    console.log(price);
}

smallShop(["coffee",
"Varna",
"2"]);