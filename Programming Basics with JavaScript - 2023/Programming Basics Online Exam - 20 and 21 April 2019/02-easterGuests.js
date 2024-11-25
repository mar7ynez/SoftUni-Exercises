function easterGuests(input) {

    let guestCounter = Number(input[0]);
    let budget = Number(input[1]);

    let easterCake = Math.ceil(guestCounter / 3);
    let eggs = guestCounter * 2;

    let totaCost = easterCake * 4 + eggs * 0.45;

    if (budget >= totaCost) {
        console.log(`Lyubo bought ${easterCake} Easter bread and ${eggs} eggs.`);
        console.log(`He has ${(budget - totaCost).toFixed(2)} lv. left.`);

    } else {
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${(totaCost - budget).toFixed(2)} lv. more.`);

    }
}
easterGuests(["10",
    "35"]);
