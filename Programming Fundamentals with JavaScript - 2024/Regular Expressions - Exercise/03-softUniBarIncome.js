function softUniBarIncome(data) {

    let pattern = /%([A-Z][a-z]+)%[^|$%.]*<(\w+)[^|$%.]*\|(\d+)\|[^|$%.]*?(\d+.?\d+)\$/g;
    let curInformation = data.shift();
    let totalPrice = 0;

    while (curInformation !== 'end of shift') {
        let validateInfo = curInformation.matchAll(pattern);

        if (validateInfo) {
            for (let match of validateInfo) {
                console.log(`${match[1]}: ${match[2]} - ${(match[3] * match[4]).toFixed(2)}`);
                totalPrice += match[3] * match[4];

            }
        }
        curInformation = data.shift();
    }
    console.log(`Total income: ${totalPrice.toFixed(2)}`);
}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);