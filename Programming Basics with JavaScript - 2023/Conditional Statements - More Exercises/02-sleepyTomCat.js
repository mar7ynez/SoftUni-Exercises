function sleepyTomCat(input) {

    let restDays = Number(input[0]);
    let tomsPlayTimePerYear = 30000;
    let workingDays = 365 - restDays;

    let workingDaysPlayTime = workingDays * 63;
    let restDaysPlayTime = restDays * 127;
    let totalPlayTimePerYear = workingDaysPlayTime + restDaysPlayTime;

    if (tomsPlayTimePerYear >= totalPlayTimePerYear) {
        console.log(`Tom sleeps well\n${Math.floor((tomsPlayTimePerYear - totalPlayTimePerYear) / 60)} hours and ${(tomsPlayTimePerYear - totalPlayTimePerYear) % 60} minutes less for play`);

    } else {
        console.log(`Tom will run away\n${Math.floor((totalPlayTimePerYear - tomsPlayTimePerYear) / 60)} hours and ${(totalPlayTimePerYear - tomsPlayTimePerYear) % 60} minutes more for play`);

    }
}
sleepyTomCat(['20']);