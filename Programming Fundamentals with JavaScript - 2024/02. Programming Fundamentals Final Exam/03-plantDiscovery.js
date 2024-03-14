function plantDiscovery(data) {

    data.shift();
    let plantRegister = {};

    for (let command of data) {
        if (command === 'Exhibition') {
            break;

        }

        if (command.includes('<->')) {
            let [plant, rarity] = command.split('<->');
            plantRegister[plant] = { rarity, rate: [] };

        } else if (command.includes('Rate')) {
            let [, plant, , rating] = command.split(' ');
            if (!plantRegister.hasOwnProperty(plant)) {
                console.log('error');

            } else {
                plantRegister[plant].rate.push(rating)

            }

        } else if (command.includes('Update')) {
            let [, plant, , newRarity] = command.split(' ');
            if (!plantRegister.hasOwnProperty(plant)) {
                console.log('error');

            } else {
                plantRegister[plant].rarity = newRarity;

            }

        } else {
            let [, plant] = command.split(' ');
            if (!plantRegister.hasOwnProperty(plant)) {
                console.log('error');

            } else {
                plantRegister[plant].rate = [];

            }
        }
    }
    console.log(`Plants for the exhibition:`);

    for (let plant in plantRegister) {
        let avgRating = 0;
        for (let rate of plantRegister[plant].rate) {
            avgRating += Number(rate);

        }
        avgRating /= plantRegister[plant].rate.length;

        if (!avgRating) {
            avgRating = 0;

        }
        console.log(`- ${plant}; Rarity: ${plantRegister[plant].rarity}; Rating: ${avgRating.toFixed(2)}`);
    }
}
plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"]);