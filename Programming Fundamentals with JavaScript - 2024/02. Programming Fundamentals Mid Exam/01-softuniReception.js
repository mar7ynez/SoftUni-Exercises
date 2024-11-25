function softuniReception(arr) {

    let studentsCount = Number(arr[3]);
    let employees = arr.slice(0, arr.indexOf(studentsCount)).map(Number);

    let hours = 0;

    while (studentsCount > 0) {
        hours++;
        for (let i = 0; i < employees.length; i++) {
            let curEmp = employees[i];

            if (studentsCount <= 0) {
                break;
            }
            
            studentsCount -= curEmp;

            if (hours % 4 === 0) {
                hours++

            }
        }
    }
    console.log(`Time needed: ${hours}h.`);
}
softuniReception(['3','2','5','40']);