function triangleOfNumbers(num) {

    // for (let i = 1; i <= num; i++) {
    //     console.log(`${i} `.repeat(i));

    // }

    for (let i = 1; i <= num; i++) {
        let curRow = '';

        for (let j = 1; j <= i; j++) {
            curRow += `${i} `;
            
        }
        console.log(curRow);
    }
}

triangleOfNumbers(3);