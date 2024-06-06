function listProcessor(data) {
    let collection = [];

    for (let curData of data) {
        let [process, str] = curData.split(' ');

        switch (process) {
            case 'add':
                collection.push(str);
                break;

            case 'remove':
                collection = collection.filter(e => e !== str);
                break;
                
            case 'print':
                console.log(collection.join(','));
                break;
        }
    }
}
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);