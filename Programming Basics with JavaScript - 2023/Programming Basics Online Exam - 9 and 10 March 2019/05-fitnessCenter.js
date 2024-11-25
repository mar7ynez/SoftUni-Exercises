function fitnessCenter(input) {

    let numOfPeople = Number(input[0]);

    let backCount = 0;
    let chestCount = 0;
    let legsCount = 0;
    let absCount = 0;
    let proteinShakeCount = 0;
    let proteinBarCount = 0;

    for (let i = 1; i <= numOfPeople; i++) {
        let current = input[i];

        switch (current) {
            case 'Back': backCount++; break;
            case 'Chest': chestCount++; break;
            case 'Legs': legsCount++; break;
            case 'Abs': absCount++; break;
            case 'Protein shake': proteinShakeCount++; break;
            case 'Protein bar': proteinBarCount++; break;
        }
    }
    let workoutPercent = (backCount + chestCount + legsCount + absCount) / numOfPeople * 100;
    let proteinBuy = (proteinShakeCount + proteinBarCount) / numOfPeople * 100;

    console.log(`${backCount} - back`);
    console.log(`${chestCount} - chest`);
    console.log(`${legsCount} - legs`);
    console.log(`${absCount} - abs`);
    console.log(`${proteinShakeCount} - protein shake`);
    console.log(`${proteinBarCount} - protein bar`);
    console.log(`${workoutPercent.toFixed(2)}% - work out`);
    console.log(`${proteinBuy.toFixed(2)}% - protein`);
}
fitnessCenter(["10",
    "Back",
    "Chest",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar",
    "Protein shake",
    "Protein bar",
    "Legs",
    "Abs"])