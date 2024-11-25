function treasureHunt(data) {

    let loot = data.shift().split('|');
    let commands = data.shift().split(' ');
    let allItemsLength = 0

    while (commands[0] !== 'Yohoho!') {
        let [action, ...info] = commands;

        switch (action) {
            case 'Loot':
                for (let item of info) {
                    if (loot.indexOf(item) === -1) {
                        loot.unshift(item);

                    }
                }
                break;

            case 'Drop':
                let index = Number(info[0]);
                if (index >= 0 && index < loot.length) {
                    let removedItem = loot[index];
                    loot.splice(index, 1);
                    loot.push(removedItem);

                }
                break;

            case 'Steal':
                let count = Number(info[0]);
                let stolenLoot = [];
                for (let i = 1; i <= count; i++) {
                    if (loot.length <= 0) {
                        break;

                    } else {
                        stolenLoot.unshift(loot.pop());

                    }
                }
                console.log(stolenLoot.join(', '));
                break;
        }
        commands = data.shift().split(' ');
    }

    if (loot.length > 0) {
        for (let element of loot) {
            allItemsLength += element.length;

        }
        let avgTreasureGain = allItemsLength / loot.length;
        console.log(`Average treasure gain: ${avgTreasureGain.toFixed(2)} pirate credits.`);

    } else {
        console.log('Failed treasure hunt.');

    }
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"]);