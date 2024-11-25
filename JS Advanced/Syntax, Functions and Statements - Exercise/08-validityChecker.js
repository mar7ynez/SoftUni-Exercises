function validityChecker(x1, y1, x2, y2) {

    let distanceBetween = (x1, y1, x2, y2) => {
        let resultNum = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

        if (Number.isInteger(resultNum)) {
            return 'is valid';

        } else {
            return 'is invalid';

        }
    }
    console.log(`{${x1}, ${y1}} to {0, 0} ${distanceBetween(x1, y1, 0, 0)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} ${distanceBetween(x2, y2, 0, 0)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} ${distanceBetween(x1, y1, x2, y2)}`);
}
validityChecker(2, 1, 1, 1);