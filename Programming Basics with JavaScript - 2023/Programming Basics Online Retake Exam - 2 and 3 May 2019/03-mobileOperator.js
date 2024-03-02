function mobileOperator(input) {

    let termOfContract = input[0];
    let contractType = input[1];
    let mobileInternet = input[2];
    let monthsToPay = Number(input[3]);

    let price = 0;

    if (termOfContract === 'one') {
        if (contractType === 'Small') {
            price = 9.98;

        } else if (contractType === 'Middle') {
            price = 18.99;

        } else if (contractType === 'Large') {
            price = 25.98;

        } else {
            price = 35.99;

        }

    } else {
        if (contractType === 'Small') {
            price = 8.58;

        } else if (contractType === 'Middle') {
            price = 17.09;

        } else if (contractType === 'Large') {
            price = 23.59;

        } else {
            price = 31.79;

        }
    }

    if (mobileInternet === 'yes') {
        if (price <= 10) {
            price += 5.50;

        } else if (price <= 30) {
            price += 4.35;

        } else {
            price += 3.85;

        }
    }
    let costs = monthsToPay * price;
    
    if (termOfContract === 'two') {
        costs *= 0.9625;
    }

    console.log(`${costs.toFixed(2)} lv.`);
    
}

mobileOperator(["one",
    "Small",
    "yes",
    "10"])