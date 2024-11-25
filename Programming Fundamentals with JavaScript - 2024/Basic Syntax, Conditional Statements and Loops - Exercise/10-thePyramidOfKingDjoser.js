function thePyramid(baseSize, increment) {

    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    let height = 0;
    let floorCounter = 1;

    for (let i = baseSize; i > 0; i -= 2) {
        let totalArea = i * i;
        height += increment;
        
        if (i <= 2) {
            gold = totalArea * increment;
            
        } else {
            let stoneArea = (i - 2) * (i - 2);
            stone += stoneArea * increment;
            
            if (floorCounter % 5 !== 0) {
                let marbleArea = totalArea - stoneArea;
                marble += marbleArea * increment;
                
            } else {
                let lapisArea = totalArea - stoneArea;
                lapis += lapisArea * increment;
    
            }
        }
        floorCounter++;
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}

thePyramid(11, 1);