function oscarsWeekInCinema(input) {

    let movieName = input[0];
    let placeType = input[1];
    let purchasedTickets = Number(input[2]);
    let ticketPrice = 0;

    if (movieName === 'A Star Is Born') {
        if (placeType === 'normal') {
            ticketPrice = 7.50;
            
        } else if (placeType === 'luxury') {
            ticketPrice = 10.50;
            
        } else if (placeType === 'ultra luxury') {
            ticketPrice = 13.50;

        }
    } else if (movieName === 'Bohemian Rhapsody') {
        if (placeType === 'normal') {
            ticketPrice = 7.35;

        } else if (placeType === 'luxury') {
            ticketPrice = 9.45;

        } else if (placeType === 'ultra luxury') {
            ticketPrice = 12.75;

        }
    } else if (movieName === 'Green Book') {
        if (placeType === 'normal') {
            ticketPrice = 8.15;

        } else if (placeType === 'luxury') {
            ticketPrice = 12.25;

        } else if (placeType === 'ultra luxury') {
            ticketPrice = 13.25;

        }
    } else {
        if (placeType === 'normal') {
            ticketPrice = 8.75;

        } else if (placeType === 'luxury') {
            ticketPrice = 11.55;

        } else if (placeType === 'ultra luxury') {
            ticketPrice = 13.95;

        }
    }
    let totalEarnings = ticketPrice * purchasedTickets;

    console.log(`${movieName} -> ${(totalEarnings).toFixed(2)} lv.`)
}
oscarsWeekInCinema(["A Star Is Born",
    "luxury",
    "42"]);