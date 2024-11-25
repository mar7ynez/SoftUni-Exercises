function vacation(people, groupType, day) {

    let price = 0;

    if (day === 'Friday') {
        switch(groupType) {
            case 'Students': price = 8.45; break;
            case 'Business': price = 10.90; break;
            case 'Regular': price = 15; break;
        }

    } else if (day === 'Saturday') {
        switch(groupType) {
            case 'Students': price = 9.80; break;
            case 'Business': price = 15.60; break;
            case 'Regular': price = 20; break;
        }

    } else {
        switch(groupType) {
            case 'Students': price = 10.46; break;
            case 'Business': price = 16; break;
            case 'Regular': price = 22.50; break;
        }

    }

    if (people >= 100 && groupType === 'Business') {
        people -= 10;

    }
    
    let totalPrice = price * people;

    if (people >= 30 && groupType === 'Students') {
        totalPrice *= 0.85;

    } else if (people >= 10 && people <= 20 && groupType === 'Regular') {
        totalPrice *= 0.95;

    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(40,
    "Regular",
    "Saturday");