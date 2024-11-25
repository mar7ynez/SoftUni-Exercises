function worldTour(data) {

    let allTheStops = data.shift();
    let command = data.shift();

    while (!command.includes('Travel')) {
        let [action, valueOne, valueTwo] = command.split(':');

        if (action === 'Add Stop') {
            if (valueOne >= 0 && valueOne < allTheStops.length) {
                allTheStops = allTheStops.split('')
                allTheStops.splice(valueOne, 0, valueTwo);
                allTheStops = allTheStops.join('');

            }
            console.log(allTheStops);

        } else if (action === 'Remove Stop') {
            if (valueOne >= 0 && valueOne < allTheStops.length && valueTwo >= 0 && valueTwo < allTheStops.length) {
                allTheStops = allTheStops.split('');
                allTheStops.splice(valueOne, valueTwo - valueOne + 1);
                allTheStops = allTheStops.join('');

            }
            console.log(allTheStops);

        } else {
            if (allTheStops.includes(valueOne)) {
                let allStopsSplitted = allTheStops.split(valueOne);
                allTheStops = allStopsSplitted.join(valueTwo);
                
            }
            console.log(allTheStops);
        }
        command = data.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${allTheStops}`);
}
worldTour((["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"]));