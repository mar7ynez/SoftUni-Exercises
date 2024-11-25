function stringLength(stringA, stringB, stringC) {
    
    let allStringsLength = stringA.length + stringB.length + stringC.length

    console.log(allStringsLength);
    console.log(Math.floor(allStringsLength / 3));
}
stringLength('chocolate', 'ice cream', 'cake');