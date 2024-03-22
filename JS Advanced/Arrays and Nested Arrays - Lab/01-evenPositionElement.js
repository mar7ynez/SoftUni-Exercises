function evenPositionElement(arr) {

    const result = [];

    arr.forEach((el, idx) => {
        if (idx % 2 === 0) {
            result.push(el)
            
        }
    });
    console.log(result.join(' '));
}
evenPositionElement(['20', '30', '40', '50', '60']);