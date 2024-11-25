function dayOfWeek(data) {

    const daysOfWeekAsNum = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (daysOfWeekAsNum.indexOf(data) !== -1) {
        console.log(daysOfWeekAsNum.indexOf(data) + 1);

    } else {
        console.log('error');

    }
}
dayOfWeek('Monday');