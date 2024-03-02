function guineaPig(input) {

    let quantityFood = Number(input[0]) * 1000;
    let quantityHay = Number(input[1]) * 1000;
    let quantityCover = Number(input[2]) * 1000;
    let guineasWeight = Number(input[3]) * 1000;

    let daysCounter = 0;

    while (daysCounter < 30) {
        daysCounter++;
        quantityFood -= 300;

        if (daysCounter % 2 === 0) {
            quantityHay -= quantityFood * 0.05;

        }
        if (daysCounter % 3 === 0) {
            quantityCover -= guineasWeight * 1 / 3;
        }
    }
    if (quantityFood <= 0 || quantityCover <= 0 || quantityHay <= 0) {
        console.log('Merry must go to the pet store!');
        
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${(quantityFood / 1000).toFixed(2)}, Hay: ${(quantityHay / 1000).toFixed(2)}, Cover: ${(quantityCover / 1000).toFixed(2)}.`);

    }
}
guineaPig(["10", 
"5", 
"5.2", 
"1"])