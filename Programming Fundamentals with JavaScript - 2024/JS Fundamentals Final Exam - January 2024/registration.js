// function registration(data) {

//     let inputsCount = data.shift();
//     const validationPattern = /U\$([A-Z][a-z]{2,})U\$P\@\$([A-Za-z]{5,}\d+)P\@\$/gm;
//     let success = 0;

//     for (let input of data) {
//         const validInput = validationPattern.exec(input);

//         if (validInput) {
//             console.log('Registration was successful');
//             console.log(`Username: ${validInput[1]}, Password: ${validInput[2]}`);

//             success++;
//         } else {
//             console.log('Invalid username or password');
//         }
//     }
//     console.log(`Successful registrations: ${success}`);
// }
function registration(data) {
    let inputsCount = data.shift();
    const validationPattern = /^U\$([A-Z][a-z]{2,})U\$P\@\$(\w{5,}\d+)P\@\$$/;
    let success = 0;

    for (let input of data) {
        const validInput = validationPattern.exec(input);

        if (validInput) {
            console.log("Registration was successful");
            console.log(`Username: ${validInput[1]}, Password: ${validInput[2]}`);
            success++;
        } else {
            console.log("Invalid username or password");
        }
    }

    console.log(`Successful registrations: ${success}`);
}

registration(["2",
    "U$TommyU$P@$asdqwe123P@$",
    "Sara 1232412"])