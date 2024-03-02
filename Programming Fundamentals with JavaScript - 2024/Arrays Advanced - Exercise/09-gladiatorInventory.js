function gladiatorInventory(arr) {

    let inventory = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i++) {
        let action = arr[i].split(' ');
        let command = action.shift();

        if (command === 'Buy') {
            let equipment = action.shift();

            if (!inventory.includes(equipment)) {
                inventory.push(equipment);

            }

        } else if (command === 'Trash') {
            let equipment = action.shift();
            
            if (inventory.includes(equipment)) {
                inventory.splice(inventory.indexOf(equipment), 1);

            }

        } else if (command === 'Repair') {
            let equipment = action.shift();

            if (inventory.includes(equipment)) {
                inventory.splice(inventory.indexOf(equipment), 1);
                inventory.push(equipment);

            }
            
        } else {
            let equipmentUpgrade = action.shift().split('-');
            let item = equipmentUpgrade.shift();
            let upgradeMaterial = equipmentUpgrade.shift();

            if (inventory.includes(item)) {
                inventory.splice(inventory.indexOf(item) + 1, 0, `${item}:${upgradeMaterial}`);

            }
        }
    }
    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']);