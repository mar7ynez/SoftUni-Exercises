function cookingByNumbers(...data) {

    let startingPoint = Number(data.shift());

    for (let operation of data) {

        switch (operation) {
            case 'chop': startingPoint /= 2; break;
            case 'dice': startingPoint = Math.sqrt(startingPoint); break;
            case 'spice': startingPoint += 1; break;
            case 'bake': startingPoint *= 3; break;
            case 'fillet': startingPoint *= 0.80; break;
        }
        console.log(startingPoint);
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');