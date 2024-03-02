function weekendOrWorkDay(input) {

    let theDay = input[0];
    let output = '';

    switch(theDay) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday': output = 'Working day'; break;
        case 'Saturday':
        case 'Sunday': output = 'Weekend'; break;
        
        default: output = 'Error'; break;
    }
    console.log(output);
}

weekendOrWorkDay(["Monday"]);