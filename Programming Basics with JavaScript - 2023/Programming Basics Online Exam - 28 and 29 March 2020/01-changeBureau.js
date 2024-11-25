function changeBureau(input) {

    let btcCounter = Number(input[0]);
    let chineseYuan = Number(input[1]);
    let commision = Number(input[2]);

    let btcChange = (btcCounter * 1168) / 1.95;
    let cyaChange = ((chineseYuan * 0.15) * 1.76) / 1.95;
    let commis = (cyaChange + btcChange) * commision / 100;

    let totalEuro = cyaChange + btcChange - commis;

    console.log(totalEuro.toFixed(2));
}
changeBureau(["1",
    "5",
    "5"]);