function printAndSum(startNum, endNum) {

    const numAsString = [];
    let sum = 0;

    for (let i = startNum; i <= endNum; i++) {
        numAsString.push(`${i}`)
        sum += i;
        
    }
    console.log(numAsString.join(' '));
    console.log(`Sum: ${sum}`);
}

printAndSum(0, 26);