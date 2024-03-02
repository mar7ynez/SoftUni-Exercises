function flightSchedule(data) {

    let allFlights = data[0];
    let statusChangedFlights = data[1];
    let flightStatus = data[2][0];

    let flightObj = {};

    for (let curFlight of allFlights) {
        let [sector, destination] = curFlight.split(' ');

        flightObj[sector] = {
            Destination: destination,
            Status: 'Ready to fly'

        }
    }

    for (let curFlight of statusChangedFlights) {
        let [sector, status] = curFlight.split(' ');

        if (flightObj.hasOwnProperty(sector)) {
            flightObj[sector].Status = status;

        }
    }

    for (let sector in flightObj) {
        if (flightObj[sector].Status === flightStatus) {
            console.log(flightObj[sector]);
            
        } 
    }
}
flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']
]);