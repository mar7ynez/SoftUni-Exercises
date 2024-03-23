function listOfNames(arrOfNames) {

    let number = 1;
    
    arrOfNames.sort((a, b) => a.localeCompare(b)).forEach((name) => {
        console.log(`${number}.${name}`);
        number++;
    });
}
listOfNames(["John", "Bob", "Christina", "Ema"]);