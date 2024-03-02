function cone(radius, height) {

    let volume = (1/3 * Math.PI * Math.pow(radius, 2) * height).toFixed(4);
    let slantHeight = Math.sqrt(radius**2 + height**2);
    let lateralArea = Math.PI * radius * slantHeight;
    let baseArea = Math.PI * radius**2;

    let totalArea = (lateralArea + baseArea).toFixed(4);

    console.log(`volume = ${volume}`);
    console.log(`area = ${totalArea}`);
}

cone(3, 5);