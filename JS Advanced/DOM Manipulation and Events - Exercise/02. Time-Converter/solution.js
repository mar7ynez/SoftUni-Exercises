function attachEventsListeners() {

    let daysInputElement = document.getElementById('days');
    let hoursInputElement = document.getElementById('hours');
    let minutesInputElement = document.getElementById('minutes');
    let secondsInputElement = document.getElementById('seconds');

    let timeReg = { days: 1, hours: 24, minutes: 1440, seconds: 86400 };

    document.getElementById('daysBtn').addEventListener('click', convert);
    document.getElementById('hoursBtn').addEventListener('click', convert);
    document.getElementById('minutesBtn').addEventListener('click', convert);
    document.getElementById('secondsBtn').addEventListener('click', convert);

    function timeCalculation(value, unit) {
        let days = value / timeReg[unit];

        return {
            days: days,
            hours: days * timeReg.hours,
            minutes: days * timeReg.minutes,
            seconds: days * timeReg.seconds,
        };
    }
    function convert(e) {
        let inputElement = e.target.parentNode.querySelector('input[type="text"]');
        let time = timeCalculation(Number(inputElement.value), inputElement.id);

        daysInputElement.value = time.days;
        hoursInputElement.value = time.hours;
        minutesInputElement.value = time.minutes;
        secondsInputElement.value = time.seconds;
    }
}