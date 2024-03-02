function balls(input) {

    let numberOfBalls = Number(input[0]);
    let points = 0;
    
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let white = 0;
    let black = 0;
    let other = 0;

    for (let i = 1; i <= numberOfBalls; i++) {
        let currBall = input[i];

        if (currBall === 'red') {
            points += 5;
            red++;

        } else if (currBall === 'orange') {
            points += 10;
            orange++;
            
        } else if (currBall === 'yellow') {
            points += 15;
            yellow++;
            
        } else if (currBall === 'white') {
            points += 20;
            white++;
            
        } else if (currBall === 'black') {
            points = Math.floor(points / 2);
            black++;
            
        } else {
            other++;

        }
    }

    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${red}`);
    console.log(`Orange balls: ${orange}`);
    console.log(`Yellow balls: ${yellow}`);
    console.log(`White balls: ${white}`);
    console.log(`Other colors picked: ${other}`);
    console.log(`Divides from black balls: ${black}`);
    
}
balls(["3",
"white",
"black",
"pink"]);