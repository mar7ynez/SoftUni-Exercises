function race(data) {

    let pattern = /[A-Za-z]|\d/g;

    let racersNames = data.shift();
    let racersDetails = data.shift();

    let racersRegister = {};

    while (racersDetails !== 'end of race') {
        let validRacer = racersDetails.matchAll(pattern);
        let racerName = '';
        let racerDistance = 0;

        for (let match of validRacer) {
            if (!isNaN(match[0])) {
                racerDistance += Number(match[0]);

            } else {
                racerName += match[0];

            }
        }
        if (racersNames.includes(racerName)) {
            if (!racersRegister.hasOwnProperty(racerName)) {
                racersRegister[racerName] = 0;

            }
            racersRegister[racerName] += Number(racerDistance);
        }
        racersDetails = data.shift();
    }
    let sortedByDistanceDesc = Object.entries(racersRegister).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sortedByDistanceDesc.shift()[0]}`);
    console.log(`2nd place: ${sortedByDistanceDesc.shift()[0]}`);
    console.log(`3rd place: ${sortedByDistanceDesc.shift()[0]}`);
}
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']);