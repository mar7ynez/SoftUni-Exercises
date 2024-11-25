function addAndRemove(arr) {

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];

        if (command === 'remove') {
            result.pop()
            
        } else if (command === 'add') {
            result.push(i + 1)
            
        }
    }
    
    if (result.length < 1) {
        console.log('Empty');

    }
    console.log(result.join(' '));
}

addAndRemove(['add', 'add', 'remove', 'add', 'add']);