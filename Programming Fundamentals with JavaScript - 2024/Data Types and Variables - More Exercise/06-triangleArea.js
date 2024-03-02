function triangleArea(a, b, c) {

    let area = 1 / 4 * Math.sqrt(4 * a ** 2 * b ** 2 - (a ** 2 + b ** 2 - c ** 2) ** 2);

    console.log(area);
}

triangleArea(3,
    5.5,
    4);