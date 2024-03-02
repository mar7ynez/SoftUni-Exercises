function houseParty(arrOfStr) {

    let nameList = [];

    for (person of arrOfStr) {
        let curPerson = person.split(' ');
        let personName = curPerson[0];

        if (!curPerson.includes('not')) {
            if (!nameList.includes(personName)) {
                nameList.push(personName);

            } else {
                console.log(`${personName} is already in the list!`);

            }

        } else {
            if (!nameList.includes(personName)) {
                console.log(`${personName} is not in the list!`);

            } else {
                nameList.splice(nameList.indexOf(personName), 1);

            }
        }
    }
    console.log(nameList.join('\n'));
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);