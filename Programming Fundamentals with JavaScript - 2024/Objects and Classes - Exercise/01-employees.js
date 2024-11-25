function employees(data) {

    data.forEach(n => {
        let empName = n;
        let empNumber = n.length;

        let empObj = { name: empName, number: empNumber };

        console.log(`Name: ${empObj.name} -- Personal Number: ${empObj.number}`);
    })
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);