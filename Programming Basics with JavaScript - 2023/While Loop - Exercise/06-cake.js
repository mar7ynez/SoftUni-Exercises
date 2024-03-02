function cake(input) {

    let cakeWidth = Number(input.shift());
    let cakeLength = Number(input.shift());
    let cakePieces = input.shift();

    let cakeSize = cakeWidth * cakeLength;

    while (cakePieces !== 'STOP') {
      
        if (cakeSize - cakePieces < 0) {
            console.log(`No more cake left! You need ${cakePieces - cakeSize} pieces more.`);
            break;

        } else {
            cakeSize -= Number(cakePieces);
            
        }

        cakePieces = input.shift();
    }

    if (cakePieces === 'STOP') {
        console.log(`${cakeSize} pieces are left.`);
    }
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])