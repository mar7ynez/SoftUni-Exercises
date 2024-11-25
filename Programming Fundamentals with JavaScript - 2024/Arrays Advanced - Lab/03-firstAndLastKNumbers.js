function firstAndLastKNums(arr) {

    let result = [];
    let k = arr.shift();

    let firstKNums = arr.slice(0, k);
    result.push(firstKNums);
    
    let lastKNums = arr.slice(arr.length - k, arr.length);
    result.push(lastKNums);

    result.map(row => console.log(row.join(' ')));
}
firstAndLastKNums([3,
    6, 7, 8, 9]);