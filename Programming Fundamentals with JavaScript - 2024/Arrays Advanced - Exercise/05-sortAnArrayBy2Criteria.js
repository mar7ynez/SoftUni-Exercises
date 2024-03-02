function sortAnArrayBy2Criteria(arrOfStr) {

    let sorted = arrOfStr.sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(sorted.join('\n'));
}
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);