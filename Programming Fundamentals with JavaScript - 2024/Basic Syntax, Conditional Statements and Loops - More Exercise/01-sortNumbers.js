function sortNumbers(num1, num2, num3) {

    let first = 0;
    let second = 0;
    let third = 0;

    let hold = 0;

    if (num1 > first) {
        first = num1;
        second = num2;
        third = num3;
        
    }

    if (num2 > first) {
        first = num2;
        second = num1;
        third = num3;
        
    }

    if (num3 > first) {
        first = num3;
        second = num1;
        third = num2;
        
    }

    if (third > second) {
        hold = second;
        second = third;
        third = hold;

    }
    console.log(first);
    console.log(second);
    console.log(third);
}

sortNumbers(-2, 1, 3);