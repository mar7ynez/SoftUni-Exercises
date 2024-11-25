function foodDelivery(input) {

    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegetableMenus = Number(input[2]);

    let allMenusPrice = chickenMenus * 10.35 + fishMenus * 12.40 + vegetableMenus * 8.15;
    let desertPrice = allMenusPrice * 0.20;

    let totalPrice = allMenusPrice + desertPrice + 2.50;

    console.log(totalPrice);

}

foodDelivery(["2",
"4",
"3"])