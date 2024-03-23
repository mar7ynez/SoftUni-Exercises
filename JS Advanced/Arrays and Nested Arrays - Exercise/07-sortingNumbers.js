function sortingNumbers(arrOfNumbers) {

    let result = [];

    arrOfNumbers.sort((a, b) => a - b);
    let length = arrOfNumbers.length;

    for (let i = 0; i < length; i += 2) {
        result.push(arrOfNumbers.shift());
        result.push(arrOfNumbers.pop());
    }
    return result;
}
sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);