function filmPremiere(input) {

    let movieName = input[0];
    let packetForFilm = input[1];
    let ticketsCounter = Number(input[2]);

    let ticketPrice = 0;

    if (packetForFilm === 'Drink') {
        if (movieName === 'John Wick') {
            ticketPrice = 12;

        } else if (movieName === 'Star Wars') {
            ticketPrice = 18;

        } else {
            ticketPrice = 9;

        }
    } else if (packetForFilm === 'Popcorn') {
        if (movieName === 'John Wick') {
            ticketPrice = 15;

        } else if (movieName === 'Star Wars') {
            ticketPrice = 25;

        } else {
            ticketPrice = 11;

        }
    } else {
        if (movieName === 'John Wick') {
            ticketPrice = 19;

        } else if (movieName === 'Star Wars') {
            ticketPrice = 30;

        } else {
            ticketPrice = 14;

        }
    }
    let totalCost = ticketPrice * ticketsCounter;

    if (movieName === 'Star Wars' && ticketsCounter >= 4) {
        totalCost *= 0.70;

    } else if (movieName === 'Jumanji' && ticketsCounter === 2) {
        totalCost *= 0.85;

    }
    console.log(`Your bill is ${totalCost.toFixed(2)} leva.`);
}
filmPremiere(["John Wick",
    "Drink",
    "6"]);