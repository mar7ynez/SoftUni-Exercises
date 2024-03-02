function projectsCreation(input) {

    let architectName = input[0];
    let projectsToDo = Number(input[1]);
    let hoursNeeded = projectsToDo * 3;

    console.log(`The architect ${architectName} will need ${hoursNeeded} hours to complete ${projectsToDo} project/s.`);

}

projectsCreation(["George ", "4"]);