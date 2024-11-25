function dayOfWeek(input) {

    let number = Number(input);
    let theDay = '';

    switch (number) {
        case 1: theDay = 'Monday'; break;
        case 2: theDay = 'Tuesday'; break;
        case 3: theDay = 'Wednesday'; break;
        case 4: theDay = 'Thursday'; break;
        case 5: theDay = 'Friday'; break;
        case 6: theDay = 'Saturday'; break;
        case 7: theDay = 'Sunday'; break;

        default: theDay = 'Error'; break;
    }
    console.log(theDay);
}

dayOfWeek(["1"]);