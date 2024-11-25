function shoppingList(input) {

    let groceries = input.shift().split('!');
    let action = input.shift();

    while (action !== 'Go Shopping!') {
        action = action.split(' ');
        let [command, item, newItem] = action;

        switch (command) {
            case 'Urgent':
                if (groceries.indexOf(item) === -1) {
                    groceries.unshift(item);

                }
                break;

            case 'Unnecessary':
                if (groceries.indexOf(item) !== -1) {
                    groceries.splice(groceries.indexOf(item), 1);

                }
                break;

            case 'Correct':
                if (groceries.indexOf(item) !== -1) {
                    groceries.splice(groceries.indexOf(item), 1, newItem);

                }
                break;

            case 'Rearrange':
                if (groceries.indexOf(item) !== -1) {
                    groceries.splice(groceries.indexOf(item), 1);
                    groceries.push(item);

                }
                break;
        }
        action = input.shift();
    }
    console.log(groceries.join(', '));
}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]);