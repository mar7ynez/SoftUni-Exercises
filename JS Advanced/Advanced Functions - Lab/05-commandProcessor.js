function solution() {
    let randomStr = '';

    return {
        append(str) {
            randomStr += str;
        },
        removeStart(n) {
            randomStr = randomStr.substring(0 + n);
        },
        removeEnd(n) {
            randomStr = randomStr.substring(0, randomStr.length - n);
        },
        print() {
            console.log(randomStr);
        },
    }
}
let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();