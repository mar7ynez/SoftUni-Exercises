function arenaTier(data) {

    let gladiatorPool = {};

    for (let gladiatorInfo of data) {
        if (gladiatorInfo.includes(' -> ')) {
            let [gladiatorName, gladiatorTech, gladiatorSkill] = gladiatorInfo.split(' -> ');

            if (gladiatorName === 'Ave Cesar') {
                break;

            }

            if (!gladiatorPool.hasOwnProperty(gladiatorName)) {
                gladiatorPool[gladiatorName] = {};

            }

            if (!gladiatorPool[gladiatorName].hasOwnProperty(gladiatorTech) || gladiatorPool[gladiatorTech] < gladiatorSkill) {
                gladiatorPool[gladiatorName][gladiatorTech] = gladiatorSkill;

            }
        } else if (gladiatorInfo.includes('vs')) {
            let [gladiatorOne, gladiatorTwo] = gladiatorInfo.split(' vs ');

            if (!gladiatorPool.hasOwnProperty(gladiatorOne) || !gladiatorPool.hasOwnProperty(gladiatorTwo)) {
                continue;

            }
            let gladiatorOneTech = gladiatorPool[gladiatorOne];
            let gladiatorTwoTech = gladiatorPool[gladiatorTwo];

            for (let name in gladiatorOneTech) {
                if (gladiatorTwoTech.hasOwnProperty(name)) {
                    if (gladiatorOneTech[name] > gladiatorTwoTech[name]) {
                        delete gladiatorPool[gladiatorTwo];

                    } else {
                        delete gladiatorPool[gladiatorOne];

                    }
                }
            }
        }
    }
    let nameAndTotalSkill = {};

    for (let key in gladiatorPool) {
        nameAndTotalSkill[key] = 0;

        Object.values(gladiatorPool[key]).forEach(points => {
            nameAndTotalSkill[key] += Number(points);

        });
    }
    let sortedNamesGladiatorPool = Object.keys(gladiatorPool).sort((a, b) => nameAndTotalSkill[b] - nameAndTotalSkill[a] || a.localeCompare(b));

    for (let name of sortedNamesGladiatorPool) {
        let sortedEntrieOfTechAndSkillPts = Object.entries(gladiatorPool[name]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        console.log(`${name}: ${nameAndTotalSkill[name]} skill`);

        for (let curTech of sortedEntrieOfTechAndSkillPts) {
            console.log(`- ${curTech[0]} <!> ${curTech[1]}`);

        }
    }
}
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);