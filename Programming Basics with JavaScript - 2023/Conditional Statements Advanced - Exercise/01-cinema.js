function cinema(input) {

    let typeOfProjection = input[0];
    let row = Number(input[1]);
    let col = Number(input[2]);

    let income = 0;

    switch(typeOfProjection) {
        case 'Premiere': income = (row * col) * 12.00; break;
        case 'Normal': income = (row * col) * 7.50; break;
        case 'Discount': income = (row * col) * 5.00; break;

    }
    console.log(`${income.toFixed(2)} leva`);
}

cinema(["Premiere",
"10",
"12"]);