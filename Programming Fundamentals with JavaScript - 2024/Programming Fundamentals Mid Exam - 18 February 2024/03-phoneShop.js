function phoneShop(data) {

    const listOfPhones = data.shift().split(', ');
    let commands = data.shift().split(' - ');

    while (commands[0] !== 'End') {
        let [action, ...phones] = commands;

        if (action === 'Add' && listOfPhones.indexOf(phones[0]) === -1) {
            let curPhone = phones.shift()
            listOfPhones.push(curPhone);

        } else if (action === 'Remove' && listOfPhones.indexOf(phones[0]) !== -1) {
            let curPhone = phones.shift()
            let phoneIndex = listOfPhones.indexOf(curPhone);

            listOfPhones.splice(phoneIndex, 1);

        } else if (action === 'Bonus phone') {
            let bonusPhone = phones.shift().split(':');

            let oldPhoneIndex = listOfPhones.indexOf(bonusPhone[0]);
            let newPhoneIndex = listOfPhones.indexOf(bonusPhone[1]);

            if (oldPhoneIndex !== -1) {
                listOfPhones.splice(oldPhoneIndex + 1, 0, bonusPhone[1]);

            }

        } else if (action === 'Last') {
            if (listOfPhones.indexOf(phones[0]) !== -1) {
                let curPhone = phones.shift()
                let phoneIndex = listOfPhones.indexOf(curPhone);

                listOfPhones.splice(phoneIndex, 1);
                listOfPhones.push(curPhone)

            }
        }
        commands = data.shift().split(' - ');
    }
    console.log(listOfPhones.join(', '));
}
phoneShop(["SamsungA50, MotorolaG5, IphoneSE",
"Add - Iphone10",
"Remove - IphoneSE",
"End"]);