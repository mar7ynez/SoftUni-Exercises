function spaceTravel(data) {

    let travelRoute = data.shift().split('||');
    let fuelAmount = Number(data.shift());
    let ammunitionAmount = Number(data.shift());

    while (travelRoute.length > 0) {
        let curRoute = travelRoute.shift().split(' ');
        let [command, ...value] = curRoute;

        if (command === 'Travel') {
            let distance = Number(value);

            if (fuelAmount >= distance) {
                fuelAmount -= distance;
                console.log(`The spaceship travelled ${distance} light-years.`);

            } else {
                console.log('Mission failed.');
                break;

            }
        } else if (command === 'Enemy') {
            let enemyArmour = Number(value);

            if (ammunitionAmount >= enemyArmour) {
                ammunitionAmount -= enemyArmour
                console.log(`An enemy with ${enemyArmour} armour is defeated.`);

            } else if (ammunitionAmount < enemyArmour) {
                if (fuelAmount - enemyArmour * 2 > 0) {
                    fuelAmount -= enemyArmour * 2;
                    console.log(`An enemy with ${enemyArmour} armour is outmaneuvered.`);

                } else {
                    console.log('Mission failed.');
                    break;
                    
                }
            } 
        } else if (command === 'Repair') {
            let numOfAmmoAndFuel = Number(value);

            fuelAmount += numOfAmmoAndFuel;
            ammunitionAmount += numOfAmmoAndFuel * 2;
            console.log(`Ammunitions added: ${numOfAmmoAndFuel * 2}.`);
            console.log(`Fuel added: ${numOfAmmoAndFuel}.`);

        } else {
            console.log(`You have reached Titan, all passengers are safe.`);

        }
    }
}
spaceTravel([ 'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', 
'60', 
'100' ]);