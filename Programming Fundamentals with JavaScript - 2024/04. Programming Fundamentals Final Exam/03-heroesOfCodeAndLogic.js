function heroesOfCodeAndLogic(data) {

    let heroesCount = Number(data.shift());
    let heroesRegister = {};

    for (let i = 0; i < heroesCount; i++) {
        let heroDetails = data.shift();
        let [name, hitPoints, manaPoints] = heroDetails.split(' ');

        heroesRegister[name] = { hp: Number(hitPoints), mp: Number(manaPoints) };
    }
    let command = data.shift();

    while (command !== 'End') {
        let [action, , heroName, , amount, , attacker] = command.split(' ');

        if (heroesRegister.hasOwnProperty(heroName)) {
            if (action === 'Heal') {
                console.log(recharge(action, heroName, amount));

            } else if (action === 'Recharge') {
                console.log(recharge(action, heroName, amount));

            } else if (action === 'TakeDamage') {
                console.log(takeDamage(heroName, amount, attacker));

            } else if (action === 'CastSpell') {
                let spellName = attacker;
                console.log(castSpell(heroName, amount, spellName));

            }
        }
        command = data.shift();
    }
    for (let heroName in heroesRegister) {
        console.log(heroName);
        console.log(` HP: ${heroesRegister[heroName].hp}`);
        console.log(` MP: ${heroesRegister[heroName].mp}`);
    }

    function castSpell(heroName, mpNeeded, spellName) {
        if (heroesRegister[heroName].mp >= Number(mpNeeded)) {
            heroesRegister[heroName].mp -= Number(mpNeeded);
            return `${heroName} has successfully cast ${spellName} and now has ${heroesRegister[heroName].mp} MP!`;

        }
        return `${heroName} does not have enough MP to cast ${spellName}!`;
    }

    function takeDamage(heroName, damage, attacker) {
        if (heroesRegister[heroName].hp - Number(damage) > 0) {
            heroesRegister[heroName].hp -= Number(damage);
            return `${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroesRegister[heroName].hp} HP left!`;

        }
        delete heroesRegister[heroName];
        return `${heroName} has been killed by ${attacker}!`
    }

    function recharge(action, heroName, amount) {
        let amountRecovered = 0;
        if (action !== 'Heal') {
            if (heroesRegister[heroName].mp + Number(amount) > 200) {
                amountRecovered = (200 + Number(amount)) - (heroesRegister[heroName].mp + Number(amount));
                heroesRegister[heroName].mp = 200;
                return `${heroName} recharged for ${amountRecovered} MP!`;

            }
            heroesRegister[heroName].mp += Number(amount);
            return `${heroName} recharged for ${Number(amount)} MP!`;
        }
        
        if (heroesRegister[heroName].hp + Number(amount) > 100) {
            amountRecovered = (100 + Number(amount)) - (heroesRegister[heroName].hp + Number(amount));
            heroesRegister[heroName].hp = 100;
            return `${heroName} healed for ${amountRecovered} HP!`

        }
        heroesRegister[heroName].hp += Number(amount);
        return `${heroName} healed for ${Number(amount)} HP!`
    }
}
heroesOfCodeAndLogic([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
]);