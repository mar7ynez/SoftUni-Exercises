function add(n) {
    let state = 0;
    state += n;

    function sum(n) {
        state += n;
        return sum;
    }
    sum.toString = () => state;
    return sum
}
console.log(add(1)(6)(-3).toString());