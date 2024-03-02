function lunchBreak(input) {

    let seriesName = input[0];
    let episodeLength = Number(input[1]);
    let breakLength = Number(input[2]);

    let lunchTime = breakLength / 1/8;
    let restTime = breakLength / 1/4;
    let neededTime = lunchTime + restTime + episodeLength;

    if (breakLength < neededTime) {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(neededTime - breakLength)} more minutes.`);

    } else {
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(breakLength - neededTime)} minutes free time.`);

    }
}

lunchBreak(["Teen Wolf",
"48",
"60"]);