function onTimeForTheExam(input) {

    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArrive = Number(input[2]);
    let minArrive = Number(input[3]);

    let timeExamMin = hourExam * 60 + minExam;
    let timeArriveMin = hourArrive * 60 + minArrive;
    let output = '';
    let hours = Math.trunc((timeExamMin - timeArriveMin) / 60);
    let minutes = Math.abs((timeExamMin - timeArriveMin) % 60);

    if (timeExamMin >= timeArriveMin && timeExamMin - timeArriveMin <= 30) {
        output = `On time\n${timeExamMin - timeArriveMin} minutes before the start`;

    } else if (timeExamMin > timeArriveMin && timeExamMin - timeArriveMin > 30) {
        output = 'Early\n';
        if (hours > 0) {
            output += `${hours}:${minutes < 10 ? '0' : ''}${minutes} hours before the start`;

        } else {
            output += `${minutes} minutes before the start`;

        }
    } else {
        output = 'Late\n';
        hours = Math.abs(hours);
        if (hours > 0) {
            output += `${hours}:${minutes < 10 ? '0' : ''}${minutes} hours after the start`;

        } else {
            output += `${minutes} minutes after the start`;

        }
    }
    console.log(output);
}

onTimeForExam(["9",
"00",
"8",
"30"])