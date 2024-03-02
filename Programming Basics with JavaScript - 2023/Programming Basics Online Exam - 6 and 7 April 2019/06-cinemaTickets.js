function cinemaTickets(input) {

    let index = 0;
    let command = input[index];

    let studentTickets = 0;
    let standardTickets = 0;
    let kidsTickets = 0;
    let totalTickets = 0;

    while (command !== 'Finish') {
        let movieName = input[index];
        index++;
        let freeSpace = input[index]
        index++

        let curMovieTickets = 0;
        let ticketType = input[index]

        while (ticketType !== 'End') {
            curMovieTickets++;

            switch (ticketType) {
                case 'standard': standardTickets++; break;
                case 'student': studentTickets++; break;
                case 'kid': kidsTickets++; break;

            }
            if (curMovieTickets >= freeSpace) {
                break;

            }
            index++;
            ticketType = input[index];
        }
        let takenPercent = (curMovieTickets / freeSpace) * 100;
        totalTickets += curMovieTickets;

        console.log(`${movieName} - ${takenPercent.toFixed(2)}% full.`);

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