function aluminumJoinery(input) {

    let numOfJoinery = Number(input[0]);
    let sizeOfJoinery = input[1];
    let deliveryType = input[2];

    let price = 0;

    if (sizeOfJoinery === '90X130') {
        price = 110;
        if (numOfJoinery > 60) {
            price *= 0.92;

        } else if (numOfJoinery > 30) {
            price *= 0.95;

        }

    } else if (sizeOfJoinery === '100X150') {
        price = 140;
        if (numOfJoinery > 80) {
            price *= 0.90;

        } else if (numOfJoinery > 40) {
            price *= 0.94;

        }

    } else if (sizeOfJoinery === '130X180') {
        price = 190;
        if (numOfJoinery > 50) {
            price *= 0.88;

        } else if (numOfJoinery > 20) {
            price *= 0.93;

        }

    } else {
        price = 250;
        if (numOfJoinery > 50) {
            price *= 0.86;

        } else if (numOfJoinery > 25) {
            price *= 0.91;

        }
    }
    price *= numOfJoinery;

    if (deliveryType === 'With delivery') {
        price += 60;

    }

    if (numOfJoinery > 99) {
        price *= 0.96;

    } else if (numOfJoinery < 10) {
        console.log('Invalid order');
        
    }
    
    if (numOfJoinery > 10) {
        console.log(`${price.toFixed(2)} BGN`);

    }
}

aluminumJoinery(["105",
"100X150",
"With delivery"])