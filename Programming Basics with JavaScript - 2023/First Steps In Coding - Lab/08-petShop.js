function petShop(input) {

    let numOfPacksDogs = Number(input[0]);
    let numOfPacksCats = Number(input[1]);
    let totalPrice = numOfPacksDogs * 2.50 + numOfPacksCats * 4;

    console.log(`${totalPrice} lv.`);

}

petShop(["5", "4"]);