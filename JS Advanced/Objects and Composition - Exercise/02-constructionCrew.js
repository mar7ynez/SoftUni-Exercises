function constructionCrew(workerObj) {

    if (workerObj.dizziness) {
        let intakeWater = workerObj.weight * 0.1 * workerObj.experience;
        workerObj.levelOfHydrated += intakeWater;

    }
    return workerObj;
}
constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
});