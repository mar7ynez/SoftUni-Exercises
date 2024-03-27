function pointsValidation(arr) {
    const x1 = arr[0];
    const y1 = arr[1];
    const x2 = arr[2];
    const y2 = arr[3];

    const distanceBetween = (x1, y1, x2, y2) => {
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
pointsValidation([3, 0, 0, 4]);