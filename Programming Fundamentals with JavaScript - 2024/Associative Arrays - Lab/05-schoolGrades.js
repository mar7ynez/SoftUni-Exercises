function schoolGrades(data) {

    let schoolRegister = {};

    for (let studentInfo of data) {
        let [name, ...grade] = studentInfo.split(' ');

        if (!schoolRegister.hasOwnProperty(name)) {
            schoolRegister[name] = [];

        }
        schoolRegister[name].push(...grade);
    }

    for (let name of Object.keys(schoolRegister).sort((a, b) => a.localeCompare(b))) {
        let avgGrade = 0;

        schoolRegister[name].forEach(grade => {
            avgGrade += Number(grade);

        });
        avgGrade /= schoolRegister[name].length;

        console.log(`${name}: ${avgGrade.toFixed(2)}`);
    }
}
schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']);