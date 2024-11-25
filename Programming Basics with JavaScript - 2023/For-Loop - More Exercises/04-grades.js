function grades(input) {

    let numberOfStudents = Number(input[0]);

    let lowGrade = 0; // 2.00 - 2.99
    let midGrade = 0; // 3.00 - 3.99
    let goodGrade = 0; // 4.00 - 4.99
    let excellentGrade = 0; // 5.00 -> повече

    let totalGrade = 0;

    for (let index = 1; index < input.length; index++) {
        let currentStudentGrade = Number(input[index]);

        if (currentStudentGrade >= 2 && currentStudentGrade <= 2.99) {
            lowGrade++;

        } else if (currentStudentGrade > 2.99 && currentStudentGrade <= 3.99) {
            midGrade++;

        } else if (currentStudentGrade > 3.99 && currentStudentGrade <= 4.99) {
            goodGrade++;

        } else if (currentStudentGrade >= 5.00) {
            excellentGrade++;

        }
        totalGrade += currentStudentGrade;

    }
    let percentLowGrade = lowGrade / numberOfStudents * 100;
    let percentMidGrade = midGrade / numberOfStudents * 100;
    let percentGoodGrade = goodGrade / numberOfStudents * 100;
    let percentExcellentGrade = excellentGrade / numberOfStudents * 100;

    let avarageGrade = totalGrade / numberOfStudents;

    console.log(`Top students: ${percentExcellentGrade.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percentGoodGrade.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percentMidGrade.toFixed(2)}%`);
    console.log(`Fail: ${percentLowGrade.toFixed(2)}%`);
    console.log(`Average: ${avarageGrade.toFixed(2)}`);
}
grades(['10',
    '3.00',
    '2.99',
    '5.68',
    '3.01',
    '4',
    '4',
    '6.00',
    '4.50',
    '2.44',
    '5']);