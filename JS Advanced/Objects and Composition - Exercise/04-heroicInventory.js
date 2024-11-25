function heroicInventory(heroesInfo) {

    let heroesRegister = [];

    for (let curHero of heroesInfo) {
        let [heroName, heroLevel, itemsInfo] = curHero.split(' / ');

        let heroObj = { name: heroName, level: Number(heroLevel), items: [] };

        if (itemsInfo) {
            let heroItems = itemsInfo.split(', ');
            heroObj.items.push(...heroItems);

        }
        heroesRegister.push(heroObj)
    }
    console.log(JSON.stringify(heroesRegister));
}
heroicInventory(['Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);