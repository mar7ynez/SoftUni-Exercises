function aggregateElements(data) {

    let resultSum = 0;
    let sumInverse = 0;
    let resultConcat = data.join('');
    
    data.map(x => resultSum += x);
    data.map(x => sumInverse += 1 / x);

    console.log(resultSum);
    console.log(sumInverse);
    console.log(resultConcat);
}
aggregateElements([1, 2, 3]);