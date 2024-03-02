function equalSumsEvenOddPosition(input) {

    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let result = [];

    for (let currNum = startInterval; currNum <= endInterval; currNum++) {
        let evenSumPairs = 0;
        let oddSumPairs = 0;

        let currNumAsString = String(currNum);

        for (let index = 0; index < currNumAsString.length; index++) {
            let currIndex = Number(currNumAsString[index]);

            if (index % 2 === 0) {
                evenSumPairs += currIndex;

            } else {
                oddSumPairs += currIndex;

            }
        }
        
        if (evenSumPairs === oddSumPairs) {
            result.push(currNumAsString);

        }
    }
    console.log(result.join(' '));
}
equalSumsEvenOddPosition(["100000",
    "100050"]);