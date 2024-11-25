function sortAnArrayBy2Criteria(arrOfStr) {

    arrOfStr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(arrOfStr.join('\n'));
}
sortAnArrayBy2Criteria(['test',
    'Deny',
    'omen',
    'Default']
);