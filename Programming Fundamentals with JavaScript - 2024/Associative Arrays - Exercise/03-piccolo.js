function piccolo(data) {

    let parkingLot = {};

    for (let info of data) {
        let [direction, carNum] = info.split(', ');

        if (direction === 'IN') {
            parkingLot[carNum] = carNum;

        } else {
            delete parkingLot[carNum];

        }
    }
    let sortedByAscending = Object.keys(parkingLot).sort((a, b) => a.localeCompare(b));

    if (sortedByAscending.length <= 0) {
        console.log("Parking Lot is Empty");

    } else {
        sortedByAscending.forEach(n => {console.log(n)})
        
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);