function barcodeGenerator(input) {

    let startNums = input[0];
    let endNums = input[1];

    const allOdds = [];

    for (let i = Number(startNums.charAt(0)); i <= Number(endNums.charAt(0)); i++) {
        if (i % 2 === 0) {
            continue;
        }
        
        for (let j = Number(startNums.charAt(1)); j <= Number(endNums.charAt(1)); j++) {
            if (j % 2 === 0) {
                continue;
            }

            for (let k = Number(startNums.charAt(2)); k <= Number(endNums.charAt(2)); k++) {
                if (k % 2 === 0) {
                    continue;
                }

                for (let l = Number(startNums.charAt(3)); l <= Number(endNums.charAt(3)); l++) {
                    if (l % 2 === 0) {
                        continue;
                    }
                    allOdds.push(`${i}${j}${k}${l}`)
                }
            }
        }
    }
    console.log(allOdds.join(' '));

}
barcodeGenerator(["2345",
"6789"]);