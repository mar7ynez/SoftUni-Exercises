function calorieObject(arrOfStr) {

    let foodRegister = {};

    for (let i = 0; i < arrOfStr.length; i += 2) {
        let curProduct = arrOfStr[i];
        let curProductCalories = Number(arrOfStr[i + 1]);

        foodRegister[curProduct] = curProductCalories
    }
    console.log(foodRegister);
}
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);