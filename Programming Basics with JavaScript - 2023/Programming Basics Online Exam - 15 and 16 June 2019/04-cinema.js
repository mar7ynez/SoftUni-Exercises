function cinema(input) {

    let studioCapacity = Number(input.shift());
    let comingPeople = input.shift();
    let ticketCost = 0;

    while (comingPeople !== 'Movie time!') {
        comingPeople = Number(comingPeople);

        if (comingPeople > studioCapacity) {
            console.log(`The cinema is full.`);
            break;
        }

        if (comingPeople % 3 === 0) {
            ticketCost += (comingPeople * 5) - 5;

        } else {
            ticketCost += comingPeople * 5;

        }
        studioCapacity -= comingPeople;
        comingPeople = input.shift();
    }
    if (comingPeople === 'Movie time!') {
        console.log(`There are ${studioCapacity} seats left in the cinema.`);

    }
    console.log(`Cinema income - ${ticketCost} lv.`);
}
cinema(["60",
    "10",
    "6",
    "3",
    "20",
    "15",
    "Movie time!"]);