function addAndRemoveElements(arr) {

    let result = [];

    for (let i = 0; i <= arr.length - 1; i++) {
        let command = arr[i];

        command === 'add' ? result.push(i + 1) : result.pop();
    }
    result.length <= 0 ? console.log('Empty') : console.log(result.join('\n'));
}
addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
);