function printNthElement(arr) {

    const result = [];
    let lastElement = Number(arr[arr.length - 1])

    for (let i = 0; i < arr.length; i += lastElement) {
        
        if (i === arr.length - 1) {
            break;

        }
        result.push(arr[i]);
    }
    console.log(result.join(' '));
}

printNthElement(['1', '2', '3', '4', '5', '6']);