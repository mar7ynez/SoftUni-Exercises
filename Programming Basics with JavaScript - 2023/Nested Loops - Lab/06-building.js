function building(input) {

    const [floors, rooms] = input.map(x => Number(x));

    for (let floor = floors; floor >= 1; floor--) {

        let floorSign = '';
        if (floor === floors) {
            floorSign = 'L';

        } else if (floor % 2 === 0) {
            floorSign = 'O';

        } else if (floor % 2 !== 0) {
            floorSign = 'A';

        }
        let currFloor = [];

        for (let room = 0; room < rooms; room++) {
            currFloor.push(`${floorSign}${floor}${room}`);

        }
        console.log(currFloor.join(' '));
    }
}
building(["6", "4"]);
