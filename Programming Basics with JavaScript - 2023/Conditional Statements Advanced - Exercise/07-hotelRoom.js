function hotelRoom(input) {

    let curMonth = input[0];
    let nights = Number(input[1]);

    let apartmentPrice = 0;
    let studioPrice = 0;

    if (curMonth === 'May' || curMonth === 'October') {
        studioPrice = 50.00;
        apartmentPrice = 65.00;
        if (nights > 14) {
            studioPrice *= 0.70;
    
        } else if (nights > 7) {
            studioPrice *= 0.95;
    
        }

    } else if (curMonth === 'June' || curMonth === 'September') {
        studioPrice = 75.20;
        apartmentPrice = 68.70;
        if (nights > 14) {
            studioPrice *= 0.80;

        }

    } else {
        studioPrice = 76.00;
        apartmentPrice = 77.00;

    }

    if (nights > 14) {
        apartmentPrice *= 0.90;

    }
    let totalStudio = studioPrice * nights;
    let totalApartment = apartmentPrice * nights;

    console.log(`Apartment: ${totalApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudio.toFixed(2)} lv.`);
}

hotelRoom(["August",
"20"])