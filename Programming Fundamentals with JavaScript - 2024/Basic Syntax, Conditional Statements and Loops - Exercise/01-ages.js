function ages(age) {

    let output = '';
    
    if (age <= 2) {
        output = 'baby';
        
    } else if (age <= 13) {
        output = 'child';
        
    } else if (age <= 19) {
        output = 'teenager';
        
    } else if (age <= 65) {
        output = 'adult';
        
    } else {
        output = 'elder';
        
    }

    if (age < 0) {
        console.log('out of bounds')

    } else {
        console.log(output);

    }
}

ages(-1);