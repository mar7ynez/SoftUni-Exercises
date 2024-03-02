function areaOfFigures(input) {

    let shapeOfTheFig = input[0];
    let sizeA = Number(input[1]);
    let sizeB = Number(input[2]);

    let area = 0;

    if (shapeOfTheFig === 'square') {
        area = sizeA * sizeA;

    } else if (shapeOfTheFig === 'rectangle') {
        area = sizeA * sizeB;

    } else if (shapeOfTheFig === 'circle') {
        area = Math.PI * Math.pow(sizeA, 2);

    } else {
        area = sizeA * sizeB / 2;

    }
    console.log(area.toFixed(3));

}

areaOfFigures(["triangle",
"4.5",
"20"]);