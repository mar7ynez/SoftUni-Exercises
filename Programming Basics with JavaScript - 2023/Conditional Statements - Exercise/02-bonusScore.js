function bonusScore(input) {

    let number = Number(input);
    let bonusPts = 0;

    if (number <= 100) {
        bonusPts += 5;

    } else if (number > 1000) {
        bonusPts += number * 0.10;

    } else {
        bonusPts += number * 0.20;

    }
    
    if (number % 2 === 0) {
        bonusPts += 1;
        
    } else if (number % 10 === 5) {
        bonusPts += 2;
        
    }
    let totalPts = number + bonusPts;

    console.log(bonusPts);
    console.log(totalPts);

}

bonusScore(["2703"]);