function workingHours(input) {

    let hour = Number(input[0]);
    let day = input[1];

    let status = '';

    if (hour >= 10 && hour <= 18) {
        switch(day) {
            case 'Monday':
            case 'Tuesday':
            case 'Wednesday':
            case 'Thursday':
            case 'Friday':
            case 'Saturday': status = 'open'; break;

            default: status = 'closed'; break;
        }

    } else {
        status = 'closed';

    }
    console.log(status);
}

workingHours(["11",
"Sunday"])