function suitcasesLoad(input) {

    let trunkCapacity = Number(input.shift());
    let command = input.shift();

    let loadedCounter = 0;
    let everyThirdPackCount = 0;

    while (command !== 'End') {
        let currPacketSize = Number(command);
        everyThirdPackCount++;

        if (everyThirdPackCount % 3 === 0) {
            everyThirdPackCount = 0;
            currPacketSize *= 1.10;

        }

        if (trunkCapacity < currPacketSize) {
            console.log(`No more space!`);
            break;

        }
        loadedCounter++;
        trunkCapacity -= currPacketSize;

        command = input.shift();
    }

    if (command === 'End') {
        console.log(`Congratulations! All suitcases are loaded!`);

    }
    console.log(`Statistic: ${loadedCounter} suitcases loaded.`);
}
suitcasesLoad(["550",
    "100",
    "252",
    "72",
    "End"]);