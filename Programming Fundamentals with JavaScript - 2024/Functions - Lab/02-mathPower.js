function mathPower(num, power) {
    
    let output = numPow(num, power)
    console.log(output);
    
    function numPow(num, pow) {
        let res = num; 

        for (let i = 1; i < pow; i++) {
            res *= num;

        }
        return res;
    }
}
mathPower(3,4);