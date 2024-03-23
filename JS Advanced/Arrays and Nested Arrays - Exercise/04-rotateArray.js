function rotateArray(arrOfStr, num) {

    for (let i = 0; i < num; i++) {
        arrOfStr.unshift(arrOfStr.pop())
    }
    console.log(arrOfStr.join(' '));
}
rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15);