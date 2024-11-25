function colorize() {

    let tableRowsElements = document.getElementsByTagName('tr');
    let tableRowsAsArr = Array.from(tableRowsElements);

    tableRowsAsArr.forEach((e, i) => {
        if (i % 2 !== 0) {
            e.style.backgroundColor = 'teal';
        }
    });
}