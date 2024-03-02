function suppliesForSchool(input) {

    let pensPacks = Number(input[0]);
    let packMarkers = Number(input[1]);
    let chemicals = Number(input[2]);
    let discountPercent = Number(input[3]) / 100;

    let suppliesPrice = pensPacks * 5.80 + packMarkers * 7.20 + chemicals * 1.20;
    let discount = suppliesPrice * discountPercent;
    let finalPrice  = suppliesPrice - discount;

    console.log(finalPrice);

}
suppliesForSchool(["2","3","4","25"]);