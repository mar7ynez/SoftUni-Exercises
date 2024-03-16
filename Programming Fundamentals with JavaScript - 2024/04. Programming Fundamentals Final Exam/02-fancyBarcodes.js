function fancyBarcodes(data) {

    let barcodesCount = Number(data.shift());
    let pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/g;

    data.forEach(bcode => {
        let validateBarcode = bcode.match(pattern);

        if (validateBarcode) {
            console.log(`Product group: ${determineProdGroup(validateBarcode.join(''))}`);

        } else {
            console.log('Invalid barcode');

        }
    });

    function determineProdGroup(barcode) {
        let productGroup = barcode.match(/[0-9]/g);

        if (productGroup) {
            return productGroup.join('');

        }
        return '00';
    }
}
fancyBarcodes((["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"]));