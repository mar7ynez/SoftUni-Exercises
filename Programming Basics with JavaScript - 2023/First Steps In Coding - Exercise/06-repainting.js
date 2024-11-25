function repainting(input) {

    let neededFoil = Number(input[0]);
    let neededPaint = Number(input[1]);
    let neededPaintThinner = Number(input[2]);
    let hoursToBeDone = Number(input[3]);

    let priceForMaterials = (neededFoil + 2) * 1.50 + (neededPaint * 1.10) * 14.50 + neededPaintThinner * 5.00 + 0.40;
    let workersPayment = (priceForMaterials * 0.30) * hoursToBeDone;

    let totalPrice = priceForMaterials + workersPayment;

    console.log(totalPrice);

}

repainting(["10",
"11",
"4",
"8"])