function reverseInPlace(arrayOfElements) {

    for (let i = 0; i < arrayOfElements.length / 2; i++) {
        let curElement = arrayOfElements[i];
        let lastElement = arrayOfElements[arrayOfElements.length - 1 - i];

        arrayOfElements[i] = lastElement;
        arrayOfElements[arrayOfElements.length - 1 - i] = curElement;
    }
    console.log(arrayOfElements.join(' '));
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);