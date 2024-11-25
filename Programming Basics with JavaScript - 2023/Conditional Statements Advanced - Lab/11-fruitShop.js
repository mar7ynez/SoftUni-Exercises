function fruitShop(input) {

    let fruit = input[0];
    let dayOfWeek = input[1];
    let quantity = Number(input[2]);

    let cost = 0;
    let isNotError = true;

    if (dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday') {
        switch (fruit) {
            case 'banana': cost = 2.70; break;
            case 'apple': cost = 1.25; break;
            case 'orange': cost = 0.90; break;
            case 'grapefruit': cost = 1.60; break;
            case 'kiwi': cost = 3.00; break;
            case 'pineapple': cost = 5.60; break;
            case 'grapes': cost = 4.20; break;

            default: console.log('error'); isNotError = false; break;
        }

    } else if (dayOfWeek === 'Monday' || dayOfWeek === 'Tuesday' || dayOfWeek === 'Wednesday' || dayOfWeek === 'Thursday' || dayOfWeek === 'Friday') {
        switch (fruit) {
            case 'banana': cost = 2.50; break;
            case 'apple': cost = 1.20; break;
            case 'orange': cost = 0.85; break;
            case 'grapefruit': cost = 1.45; break;
            case 'kiwi': cost = 2.70; break;
            case 'pineapple': cost = 5.50; break;
            case 'grapes': cost = 3.85; break;

            default: console.log('error'); isNotError = false; break;
        }

    } else {
        isNotError = false;
        console.log('error');

    }
    let price = cost * quantity;

    if (isNotError) {
        console.log(price.toFixed(2));

    }
}

fruitShop(["tomato",
    "Monday",
    "0.5"]);