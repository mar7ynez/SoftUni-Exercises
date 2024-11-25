function legenderyFarming(data) {

    let commands = data.toLowerCase().split(' ');

    let itemStorage = { shards: 'Shadowmourne', fragments: 'Valanyr', motes: 'Dragonwrath' };
    let keyMaterials = { shards: 0, fragments: 0, motes: 0 };
    let trashMaterials = {};

    for (let i = 0; i < commands.length; i += 2) {
        let quantity = Number(commands[i]);
        let material = commands[i + 1];

        if (keyMaterials.hasOwnProperty(material)) {
            keyMaterials[material] += quantity;
            
            if (keyMaterials[material] >= 250) {
                keyMaterials[material] -= 250;
                console.log(`${itemStorage[material]} obtained!`);
                break;

            }

        } else {
            if (!trashMaterials.hasOwnProperty(material)) {
                trashMaterials[material] = 0;

            }
            trashMaterials[material] += quantity;
        }
    }
    let keyMaterialsEntries = Object.entries(keyMaterials);
    let trashMaterialsEntries = Object.entries(trashMaterials);
    let sortedMaterialsInAsc = keyMaterialsEntries.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    let sortedAlphabetically = trashMaterialsEntries.sort((a, b) => a[0].localeCompare(b[0]));

    sortedMaterialsInAsc.forEach(m => {
        console.log(`${m[0]}: ${m[1]}`);
    });
    
    sortedAlphabetically.forEach(m => {
        console.log(`${m[0]}: ${m[1]}`);
    })
}
legenderyFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');