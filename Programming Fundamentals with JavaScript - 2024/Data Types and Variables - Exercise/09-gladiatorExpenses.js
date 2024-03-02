function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let brokenHelms = 0;
    let brokenSwords = 0;
    let brokenShields = 0;
    let brokenArmors = 0;

    for (let i = 1; i <= lostFights; i++) {
        let curLos = i;

        let curFightSword = 0;
        let curFightHelm = 0;

        if (curLos % 2 === 0) {
            brokenHelms++;
            curFightHelm++;

        }

        if (curLos % 3 === 0) {
            brokenSwords++;
            curFightSword++;

        }

        if (curFightHelm && curFightSword) {
            brokenShields++;
            if (brokenShields % 2 === 0) {
                brokenArmors++;

            }
        }
    }
    let expenses = brokenHelms * helmetPrice + brokenSwords * swordPrice + brokenShields * shieldPrice + brokenArmors * armorPrice;
    
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200);