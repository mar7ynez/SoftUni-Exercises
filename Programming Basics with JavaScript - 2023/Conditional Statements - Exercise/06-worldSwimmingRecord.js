function worldSwimmingRecord(input) {

    let curRecordInSec = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let theTimeInSec = Number(input[2]);

    let slowDownTime = Math.floor(distanceInMeters / 15);
    let slowDownSeconds = slowDownTime * 12.5;
    let hisTime = distanceInMeters * theTimeInSec + slowDownSeconds;

    if (hisTime < curRecordInSec) {
        console.log(`Yes, he succeeded! The new world record is ${(hisTime).toFixed(2)} seconds.`);

    } else {
        console.log(`No, he failed! He was ${(hisTime - curRecordInSec).toFixed(2)} seconds slower.`);

    }
}

worldSwimmingRecord(["55555.67",
"3017",
"5.03"])