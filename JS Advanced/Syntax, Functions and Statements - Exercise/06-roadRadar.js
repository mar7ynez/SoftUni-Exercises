function roadRadar(speed, area) {

    let speedLimit = 0;

    switch (area) {
        case 'motorway': speedLimit = 130;
            drivingSpeedInZone(Number(speed), speedLimit);
            break;

        case 'interstate': speedLimit = 90;
            drivingSpeedInZone(Number(speed), speedLimit)
            break;

        case 'city': speedLimit = 50;
            drivingSpeedInZone(Number(speed), speedLimit);
            break;

        case 'residential': speedLimit = 20;
            drivingSpeedInZone(Number(speed), speedLimit);
            break;
    }

    function drivingSpeedInZone(speed, speedLimit) {
        if (speed <= speedLimit) {
            return console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);

        } else {
            return console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${statusOfDriving(speed, speedLimit)}`);

        }
    }

    function statusOfDriving(speed, speedLimit) {
        let status = '';
        if (speed - speedLimit <= 20) {
            status = 'speeding';

        } else if (speed - speedLimit <= 40) {
            status = 'excessive speeding';

        } else {
            status = 'reckless driving'

        }
        return status;
    }
}
roadRadar(21, 'residential');