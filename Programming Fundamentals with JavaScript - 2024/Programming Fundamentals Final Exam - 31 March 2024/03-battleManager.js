function battleManager(data) {

    let command = data.shift();
    let battleRegister = {};
    let pplCount = 0;

    while (command !== 'Results') {
        if (command.includes('Add')) {
            let [, personName, health, energy] = command.split(':');
            
            if (!battleRegister.hasOwnProperty(personName)) {
                battleRegister[personName] = { hp: 0, energyPts: Number(energy) };
                pplCount++;

            }
            battleRegister[personName].hp += Number(health);

        } else if (command.includes('Attack')) {
            let [, attackerName, defenderName, damage] = command.split(':');
            if (battleRegister.hasOwnProperty(attackerName) && battleRegister.hasOwnProperty(defenderName)) {
                battleRegister[defenderName].hp -= Number(damage);
                battleRegister[attackerName].energyPts -= 1;

                if (battleRegister[defenderName].hp <= 0) {
                    delete battleRegister[defenderName];
                    pplCount--;
                    console.log(`${defenderName} was disqualified!`);
                }

                if (battleRegister[attackerName].energyPts <= 0) {
                    delete battleRegister[attackerName];
                    pplCount--;
                    console.log(`${attackerName} was disqualified!`);
                }
            }

        } else {
            let [, name] = command.split(':');

            if (battleRegister.hasOwnProperty(name)) {
                delete battleRegister[name];
                pplCount--;

            } else if (name === 'All') {
                pplCount = 0;
                battleRegister = {};
            }
        }
        command = data.shift();
    }
    console.log(`People count: ${pplCount}`);

    for (let name in battleRegister) {
        console.log(`${name} - ${battleRegister[name].hp} - ${battleRegister[name].energyPts}`);
    }
}
battleManager(["Add:Bonnie:3000:5",
    "Add:Kent:10000:10",
    "Add:Johny:4000:10",
    "Attack:Johny:Bonnie:400",
    "Add:Johny:3000:5",
    "Add:Peter:7000:1",
    "Delete:Kent",
    "Results"]);