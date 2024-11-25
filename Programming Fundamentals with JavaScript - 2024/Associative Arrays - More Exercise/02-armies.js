function armies(data) {

    let armyRegister = {};

    for (let info of data) {
        if (info.includes('arrives')) {
            let lastSpaceIdx = info.lastIndexOf(' ');
            let curLeader = info.substring(0, lastSpaceIdx);

            if (!armyRegister.hasOwnProperty(curLeader)) {
                armyRegister[curLeader] = {};

            }
        } else if (info.includes('defeated')) {
            let lastSpaceIdx = info.lastIndexOf(' ');
            let curLeader = info.substring(0, lastSpaceIdx);

            delete armyRegister[curLeader];
        }
        if (info.includes(':')) {
            let [curLeader, armyInfo] = info.split(': ');
            let [armyName, armyAmount] = armyInfo.split(', ');

            if (armyRegister.hasOwnProperty(curLeader)) {
                if (!armyRegister[curLeader].hasOwnProperty(armyName)) {
                    armyRegister[curLeader][armyName] = 0;

                }
                armyRegister[curLeader][armyName] += Number(armyAmount);
            }
        }
        if (info.includes('+')) {
            let [armyName, amountToAdd] = info.split(' + ');
            for (let leader in armyRegister) {
                if (armyRegister[leader].hasOwnProperty(armyName)) {
                    armyRegister[leader][armyName] += Number(amountToAdd);

                }
            }
        }
    }
    let totalLeaderArmy = {};

    for (let [leader, armies] of Object.entries(armyRegister)) {
        totalLeaderArmy[leader] = 0;

        Object.values(armies).forEach(count => totalLeaderArmy[leader] += count);
    }

    let sortedLeadersByTotalArmy = Object.entries(armyRegister).sort((a, b) => {
        return totalLeaderArmy[b[0]] - totalLeaderArmy[a[0]];
    });

    for (let army of sortedLeadersByTotalArmy) {
        let armyMapper = {};
        sortedByArmyCount = Object.entries(army[1]).sort((a, b) => b[1] - a[1]);
        sortedByArmyCount.forEach(([armyName, armyAmount]) => armyMapper[armyName] = armyAmount);
        army[1] = armyMapper;

        console.log(`${army[0]}: ${totalLeaderArmy[army[0]]}`);
        
        for (let armyAmount in army[1]) {
            console.log(`>>> ${armyAmount} - ${army[1][armyAmount]}`);

        }
    }
}
armies(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000', 'Juard + 1350',
    'Britox + 4500', 'Porter arrives',
    'Porter: Legion, 55000', 'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205']);