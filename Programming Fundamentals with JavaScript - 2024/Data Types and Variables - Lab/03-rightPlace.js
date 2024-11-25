function rightPlace(string, char, word) {

    let fixedString = string.replace('_', char);
    
    let output = fixedString === word ? 'Matched' : 'Not Matched'

    console.log(output);

    // if (fixedString === word) {
    //     console.log('Matched');

    // } else {
    //     console.log('Not Matched');

    // }
}

rightPlace('Str_ng', 'i', 'String');