function catWalking(input) {

    let minutesWalkDay = Number(input[0]);
    let walkTimesDay = Number(input[1]);
    let eatedCalories = Number(input[2]);
    let percentEated = eatedCalories * 0.50;

    let burnCalories = minutesWalkDay * 5;
    let totalBurnedCal = burnCalories * walkTimesDay;

    if (totalBurnedCal >= percentEated) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalBurnedCal}.`);

    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalBurnedCal}.`);

    }
}
catWalking(["30",
    "3",
    "600"]);