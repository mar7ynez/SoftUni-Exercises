function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let destination = '';
    let costs = 0;
    let type = '';

    if (season === 'summer') {
        type = 'Camp';
        if (budget <= 100) {
            destination = 'Bulgaria';
            costs = budget * 0.30;

        } else if (budget <= 1000) {
            destination = 'Balkans';
            costs = budget * 0.40;

        }

    } else if (season === 'winter') {
        type = 'Hotel';
        if (budget <= 100) {
            destination = 'Bulgaria';
            costs = budget * 0.70;

        } else if (budget <= 1000) {
            destination = 'Balkans';
            costs = budget * 0.80;

        }
    }

    if (budget > 1000) {
        destination = 'Europe';
        type = 'Hotel';
        costs = budget * 0.90;

    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${costs.toFixed(2)}`);
}

journey(["1500", "summer"])