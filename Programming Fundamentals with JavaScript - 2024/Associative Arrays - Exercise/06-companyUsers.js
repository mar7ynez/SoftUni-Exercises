function companyUsers(data) {

    let companyEmployees = {};

    for (let info of data) {
        let [companyName, employeeId] = info.split(' -> ');

        if (!companyEmployees.hasOwnProperty(companyName)) {
            companyEmployees[companyName] = [];

        }
        if (!companyEmployees[companyName].includes(employeeId)) {
            companyEmployees[companyName].push(employeeId);

        }
    }
    let sortedByCompanyName = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));

    sortedByCompanyName.forEach(([compName, employeeIds]) => {
        console.log(compName);

        employeeIds.forEach((employeeId) => console.log(`-- ${employeeId}`))
    })
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);