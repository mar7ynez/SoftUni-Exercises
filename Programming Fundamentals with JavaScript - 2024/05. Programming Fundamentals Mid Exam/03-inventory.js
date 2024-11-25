function inventory(data) {

    let items = data.shift().split(', ');
    let commands = data.shift().split(' - ');

    while (commands[0] !== 'Craft!') {
        let action = commands.shift();
        let curItem = commands.shift();
        let itemIndex = items.indexOf(curItem)

        if (action === 'Collect' && itemIndex === -1) {
            items.push(curItem);


        } else if (action === 'Drop' && itemIndex !== -1) {
            items.splice(itemIndex, 1);

        } else if (action === 'Combine Items') {
            let combineItems = curItem.split(':');
            let old= combineItems.shift();
            let newItem = combineItems.shift();

            if (items.indexOf(old) !== -1) {
                items.splice(items.indexOf(old) + 1, 0, newItem);

            }

        } else {
            if (itemIndex !== -1) {
                items.splice(itemIndex, 1);
                items.push(curItem)
                
            }
        }
        commands = data.shift().split(' - ');
    }
    console.log(items.join(', '));
}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);