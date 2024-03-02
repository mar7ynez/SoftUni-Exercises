function footballResults(input) {

    let wonCounter = 0;
    let loseCounter = 0;
    let drawCounter = 0;

    for (let i = 0; i < 3; i++) {
        let firstResult = input.shift();

        if (Number(firstResult.charAt(0)) > Number(firstResult.charAt(2))) {
            wonCounter++

        } else if (Number(firstResult.charAt(0)) < Number(firstResult.charAt(2))) {
            loseCounter++

        } else {
            drawCounter++

        }
    }
    console.log(`Team won ${wonCounter} games.`);
    console.log(`Team lost ${loseCounter} games.`);
    console.log(`Drawn games: ${drawCounter}`);
}
footballResults(["3:1",
    "0:2",
    "0:0"]);