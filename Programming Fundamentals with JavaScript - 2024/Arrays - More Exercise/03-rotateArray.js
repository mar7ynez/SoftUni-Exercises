function rotateArray(arr) {

    let rotations = Number(arr.pop());

    for (let i = 0; i < rotations; i++) {
        let curElement = arr.pop();

        arr.unshift(curElement);
    }
    console.log(arr.join(' '));
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);