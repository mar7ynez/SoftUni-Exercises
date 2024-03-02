function magicSum(arrOfNums, theNumber) {

    for (let i = 0; i < arrOfNums.length; i++) {
        let firstInteger = arrOfNums[i];

        for (let j = i; j < arrOfNums.length; j++) {
            let nexIntegers = arrOfNums[j];
            
            if (i !== j) {
                let sum = firstInteger + nexIntegers;
                
                if (sum === theNumber) {
                    console.log(`${firstInteger} ${nexIntegers}`);
                    continue;
                    
                }
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23],
    8	)