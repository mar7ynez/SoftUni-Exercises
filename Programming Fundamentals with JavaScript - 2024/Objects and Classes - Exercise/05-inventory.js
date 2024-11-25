function inventory(data) {

    let heroData = [];

    for (let heroInfo of data) {
        let [heroName, heroLevel, heroItems] = heroInfo.split(' / ');

        let heroObj = {
            name: heroName,
            level: Number(heroLevel),
            items: heroItems
        };

        heroData.push(heroObj);
    }
    heroData.sort((a, b) => { return a.level - b.level });
console.log(heroData);
    heroData.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);

    });
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);