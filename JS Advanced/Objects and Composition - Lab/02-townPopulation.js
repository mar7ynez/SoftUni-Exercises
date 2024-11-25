function townPopulation(data) {

    let townRegister = {};

    data.forEach((townInfo) => {
        let [townName, population] = townInfo.split(' <-> ');

        if (!townRegister.hasOwnProperty(townName)) {
            townRegister[townName] = 0;
        }
        townRegister[townName] += Number(population);
    })
    for (let townName in townRegister) {
        console.log(`${townName} : ${townRegister[townName]}`);
        
    }
}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);