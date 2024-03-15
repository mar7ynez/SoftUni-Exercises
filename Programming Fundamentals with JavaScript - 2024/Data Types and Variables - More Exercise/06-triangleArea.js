function triangleArea(a, b, c) {

    let side = (a + b + c) / 2;
    let area = Math.sqrt(side * (side - a) * (side - b) * (side - c));
    console.log(area);

}
triangleArea(3,
    5.5,
    4);