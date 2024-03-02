function pipesInPool(input) {

    let poolVolumeLiter = Number(input[0]);
    let debitFirstPipe = Number(input[1]);
    let debitSecondPipe = Number(input[2]);
    let hoursWithoutWorker = Number(input[3]);

    let firstPipeLiter = debitFirstPipe * hoursWithoutWorker;
    let secondPipeLiter = debitSecondPipe * hoursWithoutWorker;
    let bothPipesLiters = firstPipeLiter + secondPipeLiter;
    let percentPoolVolume = bothPipesLiters / poolVolumeLiter * 100;

    if (bothPipesLiters <= poolVolumeLiter) {
        console.log(`The pool is ${percentPoolVolume}% full. Pipe 1: ${((firstPipeLiter / bothPipesLiters) * 100).toFixed(2)}%. Pipe 2: ${((secondPipeLiter / bothPipesLiters) * 100).toFixed(2)}%.`);

    } else {
        console.log(`For ${hoursWithoutWorker.toFixed(2)} hours the pool overflows with ${(bothPipesLiters - poolVolumeLiter).toFixed(2)} liters.`)

    }
}
pipesInPool(['1000',
    '100',
    '120',
    '3']);