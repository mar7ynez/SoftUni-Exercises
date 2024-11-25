function starEnigma(data) {

    let messageCount = Number(data.shift());
    let keysPattern = /[star]/gi;
    let messagePattern = /@([A-Za-z]+)[^@\-!:>]*:(\d+)[^@\-!:>]*!([A|D])![^@\-!:>]*->(\d+)/g;
    let planetRegister = { attacked: [], destroyed: [] };

    data.forEach(curMessage => {
        let validKeys = curMessage.match(keysPattern);
        let asciiStorage = [];
        let decreasedBy = 0;

        if (validKeys) {
            decreasedBy = validKeys.length;

        }

        for (let curChar of curMessage) {
            asciiStorage.push(String.fromCharCode(curChar.charCodeAt(0) - decreasedBy));

        }
        let curPlanet = asciiStorage.join('');
        let validPlanets = curPlanet.matchAll(messagePattern);

        for (let match of validPlanets) {
            let planetName = match[1];
            let atackType = match[3];
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
starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']);