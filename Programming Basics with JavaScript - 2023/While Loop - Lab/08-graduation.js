function graduation(input) {

    let name = input.shift();
    let grade = Number(input.shift());

    let counter = 0;
    let fail = 1;
    let gradeSum = 0;
    let isExcluded = false;

    while (counter < 12) {
        counter++;
        gradeSum += grade;

        if (grade < 4) {
            fail++;

        }
        if (fail % 3 === 0) {
            isExcluded = true;
            console.log(`${name} has been excluded at ${counter - 1} grade`);
            break;

        }
        grade = Number(input.shift());
    }
    let avgGrade = gradeSum / counter;

    if (!isExcluded) {
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);

    }
}

graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])