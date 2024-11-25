function rounding(num, precision) {
    
    if (precision > 15) {
        precision = 15;
        
    }
    let roundedNumber = num.toFixed(precision)
    
    console.log(parseFloat(roundedNumber));
}

rounding(10.5,16);