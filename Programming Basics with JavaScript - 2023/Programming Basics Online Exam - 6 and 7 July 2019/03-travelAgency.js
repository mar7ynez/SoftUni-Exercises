function travelAgency(input) {

    let destination = input[0];
    let packetType = input[1];
    let vip = input[2];
    let days = Number(input[3]);
    let price = 0;
    let invalidCase = false;

    if (destination === 'Bansko' || destination === 'Borovets') {
        if (packetType === 'withEquipment' && vip === 'yes') {
            price = 100 * 0.90;

        } else if (packetType === 'noEquipment' && vip === 'yes') {
            price = 80 * 0.95;

        } else if (packetType === 'withEquipment' && vip === 'no') {
            price = 100;

        } else if (packetType === 'noEquipment' && vip === 'no') {
            price = 80;

        } else {
            console.log('Invalid input!');
            invalidCase = true;

        }

    } else if (destination === 'Varna' || destination === 'Burgas') {
        if (packetType === 'withBreakfast' && vip === 'yes') {
            price = 130 * 0.88;

        } else if (packetType === 'noBreakfast' && vip === 'yes') {
            price = 100 * 0.93;

        } else if (packetType === 'withBreakfast' && vip === 'no') {
            price = 130;

        } else if (packetType === 'noBreakfast' && vip === 'no') {
            price = 100;

        } else {
            console.log('Invalid input!');
            invalidCase = true;

        }
    } else {
        console.log('Invalid input!');
        invalidCase = true;

    }
    if (days > 7) {
        days--;

    }
    if (invalidCase === false) {
        if (days >= 1) {
            console.log(`The price is ${(price * days).toFixed(2)}lv! Have a nice time!`);

        } else {
            console.log('Days must be positive number!');

        }
    }
}
travelAgency(["Borovets",
    "noEquipment",
    "yes",
    "6"]);