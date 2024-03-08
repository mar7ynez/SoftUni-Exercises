function treasureFinder(data) {

    let seqOfNums = data.shift().split(' ');
    let command = data.shift();
    let asciiStorage = [];

    while (command !== 'find') {
        let index = 0;

        for (let curChar of command) {
            if (index >= seqOfNums.length) {
                index = 0;

            }
            asciiStorage.push(curChar.charCodeAt() - Number(seqOfNums[index]))
            index++;
        }
        command = data.shift();

        let typeSymbolStartIdx = String.fromCharCode(...asciiStorage).indexOf('&');
        let typeSymbolLastIdx = String.fromCharCode(...asciiStorage).lastIndexOf('&');

        let coordFirstSymbol = String.fromCharCode(...asciiStorage).indexOf('<');
        let coordLastSymbol = String.fromCharCode(...asciiStorage).indexOf('>');

        let foundType = String.fromCharCode(...asciiStorage).substring(typeSymbolStartIdx + 1, typeSymbolLastIdx);
        let coordinates = String.fromCharCode(...asciiStorage).substring(coordFirstSymbol + 1, coordLastSymbol);

        console.log(`Found ${foundType} at ${coordinates}`);

        asciiStorage = []
    }
}
treasureFinder(["1 4 2 5 3 2 1",
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    "find"]);