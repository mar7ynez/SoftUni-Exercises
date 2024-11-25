function cinemaTickets(input) {

    let index = 0;
    let command = input[index];

    let totalTickets = 0
    let studentTickets = 0;
    let standardTickets = 0;
    let kidsTickets = 0;

    while (command !== 'Finish') {
        let movieName = input[index];
        index++;
        let freeSpace = input[index];
        index++;

        let curMovieTickets = input[index];
        let ticketCounter = 0;

        while (curMovieTickets !== 'End') {
            ticketCounter++;

            if (curMovieTickets === 'standard') {
                standardTickets++;

            } else if (curMovieTickets === 'kid') {
                kidsTickets++;

            } else if (curMovieTickets === 'student') {
                studentTickets++;

            }
            if (ticketCounter >= freeSpace) {
                break;

            }
            index++
            curMovieTickets = input[index];
        }
        totalTickets += ticketCounter;
        let placesTakenPercent = (ticketCounter / freeSpace) * 100;

        console.log(`${movieName} - ${placesTakenPercent.toFixed(2)}% full.`);

        index++;
        command = input[index];
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidsTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);