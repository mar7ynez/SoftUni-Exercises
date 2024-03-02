function animalType(input) {

    let animal = input[0];
    let animalType = '';

    switch (animal) {
        case 'dog': animalType = 'mammal'; break;
        case 'crocodile':
        case 'tortoise':
        case 'snake': animalType = 'reptile'; break;

        default: animalType = 'unknown'; break;
    }
    console.log(animalType);
}

animalType(["tortoise"]);