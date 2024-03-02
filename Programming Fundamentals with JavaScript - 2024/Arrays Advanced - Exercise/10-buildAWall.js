function buildWall(arr) {
    
    let cubicConcrete = [];
    let totalConcrete = 0;

    arr.sort((a, b) => a - b);

    while(arr[0] < 30) {
        let concreteSum = 0;
        for (let i in arr) {
            let curSection = arr[i];
    
            if (curSection < 30) {
                concreteSum += 195;
                arr[i] += 1;
    
            } else {
                continue;
    
            }
        }
        cubicConcrete.push(concreteSum);
    }

    for (let cubic of cubicConcrete) {
        totalConcrete += cubic;

    }
    console.log(cubicConcrete.join(', '));
    console.log(`${totalConcrete * 1900} pesos`);
}
buildWall([17, 22, 17, 19, 17]);