function distanceBetweenPoints(x1, y1, x2, y2) {

    let y = Math.abs(x2 - x1);
    let x = Math.abs(y2 - y1);

    let distanceBetween = Math.sqrt(x * x + y * y);

    console.log(distanceBetween);
}

distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);