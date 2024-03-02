function exampPreparation(input) {

    let badGrade = Number(input.shift());
    let command = input.shift();

    let badGradeCounter = 0;
    let gradeSum = 0;
    let counter = 0;
    let lastProblem = '';

    while (command !== 'Enough') {
        let grade = Number(input.shift());
        gradeSum += grade;
        
        if (grade <= 4) {
            badGradeCounter++;
            
        }
        if (badGradeCounter === badGrade) {
            console.log(`You need a break, ${badGrade} poor grades.`);
            break;
            
        }
        
        counter++;
        lastProblem = command;
        command = input.shift();
    }

    if (command === 'Enough') {
        console.log(`Average score: ${(gradeSum / counter).toFixed(2)}`);
        console.log(`Number of problems: ${counter}`);
        console.log(`Last problem: ${lastProblem}`);

    }
}

exampPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"]);