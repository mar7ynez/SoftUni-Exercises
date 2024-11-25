function dayOfWeek(day) {

    const weekDaysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    let output = weekDaysArr[day - 1];
    
    if (output) {
        console.log(output);

    } else {
        console.log('Invalid day!');

    }
}

dayOfWeek(0);