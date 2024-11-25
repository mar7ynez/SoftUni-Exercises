function sumFirstAndLast(arr) {

    let firstElement = Number(arr.shift());
    let secondElement = Number(arr.pop());

    let sum = firstElement + secondElement;

    console.log(sum);
}
sumFirstAndLast(['20', '30', '40']);