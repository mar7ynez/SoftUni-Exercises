function mountainRun(input) {

    let recordInSec = Number(input[0]);
    let distanceInM = Number(input[1]);
    let timeInSec = Number(input[2]);

    let delay = Math.floor(distanceInM / 50) * 30;
    let hisTime = distanceInM * timeInSec + delay;

    if (hisTime < recordInSec) {
        console.log(`Yes! The new record is ${(hisTime).toFixed(2)} seconds.`);


    } else {
        console.log(`No! He was ${(hisTime - recordInSec).toFixed(2)} seconds slower.`);

    }
}
mountainRun(["10164",
    "1400",
    "25"]);