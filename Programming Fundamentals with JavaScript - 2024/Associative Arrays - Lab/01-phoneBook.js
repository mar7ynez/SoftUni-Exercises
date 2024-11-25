function phoneBook(data) {

    let contacts = {};

    for (let contact of data) {
        let [name, phoneNumber] = contact.split(' ');
        
        contacts[name] = phoneNumber;
    }

    for (let name of Object.keys(contacts)) {
        console.log(`${name} -> ${contacts[name]}`);

    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);