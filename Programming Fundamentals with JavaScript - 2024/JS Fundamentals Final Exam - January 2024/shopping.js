function shopping(data) {
    const notepad = {};
    const addedItems = new Set();
    const importantItems = new Set();

    for (let command of data) {
        if (command === "Go Shopping") {
            break;
        }

        if (command.includes("Add")) {
            const [cmd, store, items] = command.split("->");
            if (!notepad.hasOwnProperty(store)) {
                notepad[store] = [];
            }

            for (let item of items.split(",")) {
                if (!addedItems.has(item)) {
                    notepad[store].push(item);
                    addedItems.add(item);
                }
            }
        } else if (command.includes("Important")) {
            const [cmd, store, item] = command.split("->");

            if (!notepad.hasOwnProperty(store)) {
                notepad[store] = [];
            }

            if (!addedItems.has(item)) {
                notepad[store].unshift(item);
                addedItems.add(item);
                importantItems.add(item);
            }
        } else if (command.includes("Remove")) {
            const [cmd, store] = command.split("->");
            if (notepad.hasOwnProperty(store)) {
                let hasImportantItem = notepad[store].some(item => importantItems.has(item));
                if (!hasImportantItem) {
                    delete notepad[store];
                }
            }
        }
    }

    for (let store in notepad) {
        console.log(`${store}:`);
        for (let item of notepad[store]) {
            console.log(`- ${item}`);
        }
    }
}

shopping([
    "Add->Grocery->Dried-fruit,Nuts,Lemons",
    "Add->Market->Nuts,Juice",
    "Important->Market->Snack",
    "Remove->Market",
    "Go Shopping"
]);
