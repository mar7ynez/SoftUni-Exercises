function netherRealms(data) {

    let demonsBook = {};
    let healthPattern = /[^0-9\+\-\/\*\.]/g;
    let damagePattern = /[-|+]?\d*\.?\d+/g;
    let multDivPattern = /[\*\/]/g;

    let info = data.split(/[, ]+/g);

    for (let curDemon of info) {
        let validHealthChars = curDemon.match(healthPattern);
        let validDamageChars = curDemon.match(damagePattern);
        let validAlter = curDemon.match(multDivPattern);

        demonsBook[curDemon] = { health: 0, damage: 0 };

        if (validHealthChars) {
            validHealthChars.map(x => demonsBook[curDemon].health += x.charCodeAt());

        }

        if (validDamageChars) {
            validDamageChars.map(x => demonsBook[curDemon].damage += Number(x));

        }

        if (validAlter) {
            for (let alter of validAlter) {
                alter === '*' ? demonsBook[curDemon].damage *= 2 : demonsBook[curDemon].damage /= 2;

            }
        }
    }
    let sortedByName = Object.keys(demonsBook).sort((a, b) => a.localeCompare(b));

    sortedByName.forEach(name => {
        console.log(`${name} - ${demonsBook[name].health} health, ${(demonsBook[name].damage).toFixed(2)} damage`);

    });
}
netherRealms('M3ph1st0**, Azazel');
