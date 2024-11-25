function moving(input) {

    let freeSpace = Number(input[0]) * Number(input[1]) * Number(input[2]);
    let index = 3;
    let command = input[index];
    let boxesSumSize = 0;

    while (command !== 'Done') {
        let currBoxSize = Number(input[index]);
        boxesSumSize += currBoxSize;

        if (freeSpace <= boxesSumSize) {
            console.log(`No more free space! You need ${boxesSumSize - freeSpace} Cubic meters more.`);
            break;

        }
        index++;
        command = input[index];
    }
    if (freeSpace > boxesSumSize) {
        console.log(`${freeSpace - boxesSumSize} Cubic meters left.`);

    }
}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"]);