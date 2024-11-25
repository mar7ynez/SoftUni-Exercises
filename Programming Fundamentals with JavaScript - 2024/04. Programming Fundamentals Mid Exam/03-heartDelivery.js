function heartDelivery(data) {

    let houses = data.shift().split('@');
    let action = data.shift().split(' ');

    let position = 0;

    while (action[0] !== 'Love!') {
        let [command, jumpLength] = action;

        jumpLength = Number(jumpLength);
        jumpLength += position;

        if (jumpLength >= houses.length) {
            jumpLength = 0;
        }
        if (houses[jumpLength] === 0) {
            console.log(`Place ${jumpLength} already had Valentine's day.`);

        } else {
            houses[jumpLength] -= 2;

            if (houses[jumpLength] === 0) {
                console.log(`Place ${jumpLength} has Valentine's day.`);

            }
        }
        position = jumpLength;
        action = data.shift().split(' ');
    }
    let failedPlaces = houses.filter(n => n !== 0);

    console.log(`Cupid's last position was ${position}.`);

    if (failedPlaces.length <= 0) {
        console.log('Mission was successful.');

    } else {
        console.log(`Cupid has failed ${failedPlaces.length} places.`);

    }
}
heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])