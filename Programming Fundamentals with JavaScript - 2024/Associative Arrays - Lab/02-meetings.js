function meetings(data) {

    let meetingPlan = {};

    for (let info of data) {
        let [day, name] = info.split(' ');

        if (!meetingPlan.hasOwnProperty(day)) {
            meetingPlan[day] = name;
            console.log(`Scheduled for ${day}`);

        } else {
            console.log(`Conflict on ${day}!`);

        }
    }

    for (let [name, day] of Object.entries(meetingPlan)) {
        console.log(`${name} -> ${day}`);

    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);