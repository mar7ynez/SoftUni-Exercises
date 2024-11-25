function summerOutfit(input) {

    let degrees = Number(input[0]);
    let timeOfDay = input[1];

    let outfit = '';
    let shoes = '';

    if (degrees >= 10 && degrees <= 18) {
        switch (timeOfDay) {
            case 'Morning': outfit = 'Sweatshirt'; shoes = 'Sneakers'; break;
            case 'Afternoon':
            case 'Evening': outfit = 'Shirt'; shoes = 'Moccasins'; break;

        }

    } else if (degrees > 18 && degrees <= 24) {
        switch (timeOfDay) {
            case 'Morning':
            case 'Evening': outfit = 'Shirt'; shoes = 'Moccasins'; break;
            case 'Afternoon': outfit = 'T-Shirt'; shoes = 'Sandals'; break;

        }

    } else {
        switch (timeOfDay) {
            case 'Morning': outfit = 'T-Shirt'; shoes = 'Sandals'; break;
            case 'Afternoon': outfit = 'Swim Suit'; shoes = 'Barefoot'; break;
            case 'Evening': outfit = 'Shirt'; shoes = 'Moccasins'; break;

        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(["28",
"Evening"])