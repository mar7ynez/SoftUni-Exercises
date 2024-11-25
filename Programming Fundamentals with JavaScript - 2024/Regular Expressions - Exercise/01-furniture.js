function furniture(data) {

    let pattern = />>(\w+)<<(\d+[.]?\d+)!(\d+)/g
    let totalPrice = 0;

    console.log('Bought furniture:');

    for (let curFurni of data) {
        let validFurniture = curFurni.matchAll(pattern);

        if (validFurniture) {
            for (let match of validFurniture) {
                totalPrice += match[2] * match[3];
                console.log(`${match[1]}`);

            }
        } else {
            break;

        }
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase']
);