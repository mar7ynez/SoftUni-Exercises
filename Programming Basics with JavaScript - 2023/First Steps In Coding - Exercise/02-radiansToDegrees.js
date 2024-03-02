function radiansToDegrees(input) {

    let radians = Number(input);
    let converter = radians * 180 / Math.PI;

    console.log(converter);

}

radiansToDegrees(["3.1416"]);