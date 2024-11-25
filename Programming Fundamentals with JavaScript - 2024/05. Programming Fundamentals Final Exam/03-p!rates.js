function pirates(data) {

    let citiesTarget = {};
    let command = data.shift();

    while (command !== 'End') {
        if (command.includes('||')) {
            let [cityName, population, gold] = command.split('||');
            targetCities(cityName, Number(population), Number(gold));

        } else if (command.includes('Plunder')) {
            let [, cityName, population, gold] = command.split('=>');
            plunder(cityName, Number(population), Number(gold));

        } else if (command.includes('Prosper')) {
            let [, cityName, gold] = command.split('=>');
            prosper(cityName, Number(gold));

        }
        command = data.shift();
    }
    let wealthySettlementsCount = Object.keys(citiesTarget).length

    if (wealthySettlementsCount > 0) {
        console.log(`Ahoy, Captain! There are ${wealthySettlementsCount} wealthy settlements to go to:`);
        for (let cityName in citiesTarget) {
            console.log(`${cityName} -> Population: ${citiesTarget[cityName].populationCount} citizens, Gold: ${citiesTarget[cityName].goldCount} kg`);

        }
    }

    function targetCities(cityName, population, gold) {
        if (!citiesTarget.hasOwnProperty(cityName)) {
            citiesTarget[cityName] = { populationCount: 0, goldCount: 0 };

        }
        citiesTarget[cityName].populationCount += population;
        citiesTarget[cityName].goldCount += gold;
    }

    function plunder(cityName, population, gold) {
        citiesTarget[cityName].populationCount -= population;
        citiesTarget[cityName].goldCount -= gold;
        if (citiesTarget[cityName].populationCount && citiesTarget[cityName].goldCount) {
            return console.log(`${cityName} plundered! ${gold} gold stolen, ${population} citizens killed.`);

        }
        delete citiesTarget[cityName];
        return console.log(`${cityName} plundered! ${gold} gold stolen, ${population} citizens killed.\n${cityName} has been wiped off the map!`);
    }

    function prosper(cityName, gold) {
        if (Math.sign(gold) === 1) {
            citiesTarget[cityName].goldCount += gold;
            return console.log(`${gold} gold added to the city treasury. ${cityName} now has ${citiesTarget[cityName].goldCount} gold.`);

        }
        return console.log(`Gold added cannot be a negative number!`);
    }
}
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);