function hospital(input) {

    let timePeriod = Number(input[0]);
    
    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0
    let daysCount = 0;

    for (let index = 1; index < input.length; index++) {
        currPeriodPatients = Number(input[index]);
        daysCount++;

        if (index % 3 === 0 && untreatedPatients > treatedPatients) {
            doctors++

        }
        if (currPeriodPatients > doctors) {
            treatedPatients += doctors;
            untreatedPatients += currPeriodPatients - doctors;

        } else {
            treatedPatients += currPeriodPatients;

        }
    }
    console.log(`Treated patients: ${treatedPatients}.\nUntreated patients: ${untreatedPatients}.`);
}
hospital(['4',
    '7',
    '27',
    '9',
    '1']);