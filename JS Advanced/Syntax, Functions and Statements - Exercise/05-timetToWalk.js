function timeToWalk(stepsCount, footPrintLength, studentSpeed) {

    let stepsInMeters = stepsCount * footPrintLength;
    let speedMSec = studentSpeed / 3.6;
    let time = stepsInMeters / speedMSec;

    let restTime = Math.floor(stepsInMeters / 500);
    let minutes = Math.floor(time / 60);
    let hours = Math.floor(time / 3600);
    let seconds = Math.round(time - (minutes * 60));

    console.log((hours < 10 ? "0" : "") + hours + ":" + (minutes + restTime < 10 ? "0" : "") + (minutes + restTime) + ":" + (seconds < 10 ? "0" : "") + seconds);
}
timeToWalk(2564, 0.70, 5.5);