function partyTime(guestNum) {

    let guestTickets = guestNum.shift();

    let vipMissing = [];
    let regularMissing = [];

    while (guestTickets !== 'PARTY') {
        let isDigit = !isNaN(guestTickets[0]);

        if (isDigit) {
            vipMissing.push(guestTickets);

        } else {
            regularMissing.push(guestTickets);

        }
        guestTickets = guestNum.shift();
    }

    for (let gNum of guestNum) {
        removeMissingGuest(vipMissing, gNum);
        removeMissingGuest(regularMissing, gNum);

    }
    console.log(vipMissing.length + regularMissing.length);

    vipMissing.forEach(g => console.log(g))
    regularMissing.forEach(g => console.log(g))

    function removeMissingGuest(arr, item) {
        if (arr.includes(item)) {
            arr.splice(arr.indexOf(item), 1);
            
        }
    }
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);