function movieProfit(input) {

    let movieName = input[0];
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let feeForCinema = Number(input[4]);

    let totalPriceTickets = (days * tickets) * ticketPrice;
    let cinemaIncome = totalPriceTickets * (feeForCinema / 100);

    console.log(`The profit from the movie ${movieName} is ${(totalPriceTickets - cinemaIncome).toFixed(2)} lv.`);
}
movieProfit(["The Programmer",
    "20",
    "500",
    "7.50",
    "7"]);