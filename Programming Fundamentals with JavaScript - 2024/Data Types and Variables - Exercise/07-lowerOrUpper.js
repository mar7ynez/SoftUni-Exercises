function lowerOrUpper(char) {

    let caseVariation = char >= String.fromCharCode(65) && char <= String.fromCharCode(90) ? 'upper-case' : 'lower-case';

    console.log(caseVariation);
}

lowerOrUpper('f');