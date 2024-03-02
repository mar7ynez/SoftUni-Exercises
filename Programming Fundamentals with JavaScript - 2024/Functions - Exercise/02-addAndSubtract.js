function addAndSubtract(firstInt, secondInt, thirdInt) {

    let sum = (firstInt, secondInt) => {return firstInt + secondInt};
    let sumFirstAndSecondInt = sum(firstInt, secondInt);

    let subtract = (sumFirstAndSecondInt, thirdInt) => {return sumFirstAndSecondInt - thirdInt};
    let finalResult = subtract(sumFirstAndSecondInt, thirdInt);

    console.log(finalResult);
}
addAndSubtract(1,
    17,
    30);