function starEnigma(data) {

    let messageCount = data.shift();
    let keysPattern = /[star]/gi;
    let messagePattern = /@([A-Za-z]+)[^@\-!:>]*?:(\d+)[^@\-!:>]*?!([AD])![^@\-!:>]*?->(\d+)/g;

    let planetRegister = { attacked: [], destroyed: [] };

    data.forEach(curMessage => {
        let validKeys = curMessage.match(keysPattern)
        let asciiStorage = [];

        for (let curChar of curMessage) {
            asciiStorage.push(String.fromCharCode(curChar.charCodeAt() - validKeys.length));

        }
        let curPlanet = asciiStorage.join('');
        let validPlanets = curPlanet.matchAll(messagePattern);

        for (let match of validPlanets) {
            let [message, planetName, population, atackType, soldierCount] = match;
            switch (atackType) {
                case 'A':
                    planetRegister.attacked.push(planetName); break;
                case 'D':
                    planetRegister.destroyed.push(planetName); break;
            }
        }
    });
    planetRegister.attacked.sort((a, b) => a.localeCompare(b));
    planetRegister.destroyed.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${planetRegister.attacked.length}`);
    planetRegister.attacked.forEach(p => console.log(`-> ${p}`))

    console.log(`Destroyed planets: ${planetRegister.destroyed.length}`);
    planetRegister.destroyed.forEach(p => console.log(`-> ${p}`));
}
starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']);