function spiceMustFlow(startingYield) {

    let days = 0;
    let totalYield = 0;
    
    while (startingYield >= 100) {
        let extractedSpice = startingYield - 26;
        
        days++;
        totalYield += extractedSpice;
        startingYield -= 10;
    }

    if (totalYield >= 26) {
        totalYield -= 26;

    }
    console.log(days);
    console.log(totalYield);
}

spiceMustFlow(111);