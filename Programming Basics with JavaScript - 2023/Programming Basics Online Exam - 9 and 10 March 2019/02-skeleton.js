function skeleton(input) {

    let controlMin = Number(input[0]);
    let controlSeconds = Number(input[1]);
    let distanceMeters = Number(input[2]);
    let secHundredMeters = Number(input[3]);

    let controlTime = controlMin * 60 + controlSeconds;
    let neededTimeInSecs = distanceMeters / 100;
    let delayTime = (distanceMeters / 120) * 2.5;
    let totalTime = neededTimeInSecs * secHundredMeters - delayTime;

    if (controlTime >= totalTime) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${totalTime.toFixed(3)}.`);

    } else {
        console.log(` No, Marin failed! He was ${(totalTime - controlTime).toFixed(3)} second slower.`);

    }
}
skeleton(["2",
    "12",
    "1200",
    "10"]);