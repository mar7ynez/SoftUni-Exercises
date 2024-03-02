function maxSequenceOfEqualElements(arr) {

    let counter = 1;
    let numOfElements = 0;
    let theElement = 0;

    const output = [];

    for (let i = 0; i < arr.length; i++) {
        let curElement = arr[i];
        let nextElement = arr[i + 1];

        if (curElement === nextElement) {
            counter++;

        } else {
            counter = 1;

        }

        if (counter > numOfElements) {
            numOfElements = counter;
            theElement = curElement;

        }
    }

    for (let j = 0; j < numOfElements; j++) {
        output.push(theElement);
        
    }
    console.log(output.join(' '));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);