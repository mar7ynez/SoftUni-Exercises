function schoolRegister(data) {

    let register = {};

    for (let student of data) {
        let tokens = student.split(', ');
        let studentGrade = tokens[1].split(': ')[1];
        let studentName = tokens[0].split(':')[1];
        let studentScore = tokens[2].split(': ')[1];

        if (studentScore > 3) {
            if (!register.hasOwnProperty(studentGrade)) {
                register[studentGrade] = { name: [studentName], score: [studentScore] };

            } else {
                register[studentGrade].name.push(studentName);
                register[studentGrade].score.push(studentScore);

            }
        }
    }
    let sortedAscending = Object.keys(register).sort((a, b) => a - b);
    
    for (let grade of sortedAscending) {
        let avgGradeOfAll = 0;

        register[grade].score.forEach((curGrade) => {
            avgGradeOfAll += Number(curGrade) / register[grade].name.length;
        });

        console.log(`${Number(grade) + 1} Grade`);
        console.log(`List of students:${register[grade].name}`);
        console.log(`Average annual score from last year: ${avgGradeOfAll.toFixed(2)}\n`);
    }
}
schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
]);