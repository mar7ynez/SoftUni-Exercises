function trainTheTrainers(input) {

    let judges = Number(input[0]);
    let index = 1;
    let currPresent = input[index];
    let sumOfGrades = 0;
    let presentCount = 0;

    while (currPresent !== 'Finish') {
        presentCount++
        currGrades = 0;

        for (let i = 1; i <= judges; i++) {
            index++
            let judgeGrade = Number(input[index]);
            currGrades += judgeGrade;

        }
        let curPresAvg = currGrades / judges;
        sumOfGrades += curPresAvg;

        console.log(`${currPresent} - ${curPresAvg.toFixed(2)}.`);

        index++
        currPresent = input[index];
    }
    let totalGradeAvg = sumOfGrades / presentCount;

    console.log(`Student's final assessment is ${totalGradeAvg.toFixed(2)}.`);
}
trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"]);