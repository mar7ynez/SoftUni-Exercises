function numberModification(num) {

    let modifiedNumber = modification(num)

    console.log(modifiedNumber);

    function modification(num) {
        let numAsStr = num.toString();
        let sum = 0;
        
        while (sum / numAsStr.length < 5) {
            sum = 0;
            
            for (let j = 0; j < numAsStr.length; j++) {
                let digits = Number(numAsStr[j]);
                sum += digits;
                
            }
            if (sum / numAsStr.length < 5) {
                numAsStr += '9';
                sum = 0;

            }
        }
        return numAsStr;
    }
}
numberModification(5835);