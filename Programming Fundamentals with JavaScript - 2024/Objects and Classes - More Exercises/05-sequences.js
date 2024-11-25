function sequences(data) {

    let storedArrays = {};

    for (let arr of data) {
        let newArr = JSON.parse(arr).sort((a, b) => a - b);
        let stringOfNums = newArr.join(' ');

        if (!storedArrays.hasOwnProperty(stringOfNums)) {
            storedArrays[stringOfNums] = newArr;

        }
    }
    let sortByLength = Object.values(storedArrays).sort((a, b) => a.length - b.length);

    sortByLength.forEach(arr => {
        arr.sort((a, b) => b - a);
        console.log(`[${arr.join(', ')}]`);

    })
}
sequences(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"]);