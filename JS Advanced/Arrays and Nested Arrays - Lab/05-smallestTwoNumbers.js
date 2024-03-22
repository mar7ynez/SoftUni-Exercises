function smallestTwoNumbers(arr) {

    arr.sort((a, b) => a - b);
    arr.splice(2, arr.length)
    console.log(arr.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);