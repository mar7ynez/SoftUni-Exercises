function manOWar(data) {

    let shipStatus = data.shift().split('>').map(Number);
    let warShipStatus = data.shift().split('>').map(Number);
    let healthCap = Number(data.shift());
    let isDead = false;

    while (data[0] !== 'Retire') {
        let commands = data.shift().split(' ');
        let action = commands.shift();

        if (action === 'Fire') {
            let index = Number(commands.shift());
            let damage = Number(commands.shift());

            if (warShipStatus.indexOf(warShipStatus[index]) !== -1) {
                if (warShipStatus[index] - damage <= 0) {
                    console.log('You won! The enemy ship has sunken.');
                    isDead = true;
                    break;

                }
                warShipStatus[index] -= damage;

            }
        } else if (action === 'Defend') {
            let index = Number(commands.shift());
            let secIndex = Number(commands.shift());
            let damage = Number(commands.shift());

            if (shipStatus.indexOf(shipStatus[index]) !== -1 && shipStatus.indexOf(shipStatus[secIndex]) !== -1) {
                for (let i = index; i <= secIndex; i++) {
                    if (shipStatus[i] - damage <= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        isDead = true;
                        break;
    
                    }
                    shipStatus[i] -= damage;
                }
                if (isDead) {
                    break;
                    
                }
            }
        } else if (action === 'Repair') {
            let index = Number(commands.shift());
            let reapairValue = Number(commands.shift());

            if (shipStatus.indexOf(shipStatus[index]) !== -1) {
                if (shipStatus[index] + reapairValue > healthCap) {
                    shipStatus[index] = healthCap;

                } else {
                    shipStatus[index] += reapairValue;

                }
            }
        } else if (action === 'Status') {
            let sectionForRepair = 0;

            for (let curSection of shipStatus) {
                if (Number(curSection) < healthCap * 0.20) {
                    sectionForRepair++;
                    
                }
            }
            console.log(`${sectionForRepair} sections need repair.`);
        }
    }
    
    if (!isDead) {
        let pirateShipStatus = 0;
        let enemyShipStatus = 0
        
        for (let sectionStats of shipStatus) {
            pirateShipStatus += Number(sectionStats);

        }

        for (let sectionStats of warShipStatus) {
            enemyShipStatus += Number(sectionStats);

        }
        console.log(`Pirate ship status: ${pirateShipStatus}`);
        console.log(`Warship status: ${enemyShipStatus}`);
    }
}
manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])