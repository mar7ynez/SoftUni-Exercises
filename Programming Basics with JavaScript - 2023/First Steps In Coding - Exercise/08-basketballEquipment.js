function basketballEquipment(input) {

    let yearTrainingTax = Number(input[0]);
    let shoes = yearTrainingTax - yearTrainingTax * 0.40;
    let clothing = shoes - shoes * 0.20;
    let ball = clothing / 1/4;
    let accessories = ball / 1/5;
    
    let totalPrice = yearTrainingTax + shoes + clothing + ball + accessories;

    console.log(totalPrice);

}

basketballEquipment(["365"]);