function theLift(arr) {
    let pplWaiting = Number(arr.shift());
    let wagons = arr.shift().split(' ').map(Number);

    for (let i = 0; i < wagons.length; i++) {
        let currentWagonStatus = wagons[i];

        if (currentWagonStatus < 4) {
            let spaceLeft = 4 - currentWagonStatus;
            let peopleToAdd = Math.min(spaceLeft, pplWaiting);

            wagons[i] += peopleToAdd;
            pplWaiting -= peopleToAdd;

        }

        if (pplWaiting === 0) {
            break;
            
        }

        if (i === wagons.length - 1 && pplWaiting > 0) {
            console.log(`There isn't enough space! ${pplWaiting} people in a queue!
            ${wagons.join(' ')}`);
            return;

        }
    }

    if (pplWaiting === 0) {
        console.log(`The lift has empty spots!
        ${wagons.join(' ')}`);

    }
}
theLift([
    "20",
    "0 2 0"
]);