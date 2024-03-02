function addressBook(data) {

    let addressRegister = {};

    for (let info of data) {
        let [name, address] = info.split(':');

        addressRegister[name] = address;
    }
    let sortedByName = Object.keys(addressRegister).sort((a, b) => a.localeCompare(b));

    for (let name of sortedByName) {
        console.log(`${name} -> ${addressRegister[name]}`);

    }
}
addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);