function renovation(input) {

    let wallHigth = Number(input[0]);
    let wallWidth = Number(input[1]);
    let percentNoPaint = (Number(input[2]) / 100) * wallHigth * wallWidth * 4;

    let spaceToPaint = (wallHigth * wallWidth * 4) - percentNoPaint;

    for (index = 3; index < input.length; index++) {
        let tiredNotif = input[index];
        let paintedSpace = Number(input[index]);

        if (tiredNotif === 'Tired!') {
            console.log(`${spaceToPaint} quadratic m left.`);
            break;

        }
        spaceToPaint -= paintedSpace;

        if (spaceToPaint < 0) {
            console.log(`All walls are painted and you have ${Math.abs(spaceToPaint)} l paint left!`);

        }
    }
    if (spaceToPaint === 0) {
        console.log("All walls are painted! Great job, Pesho!");

    }
}
renovation(["3",
    "5",
    "10",
    "2",
    "3",
    "4",
    "Tired!"]);