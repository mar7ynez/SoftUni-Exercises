function charsInRange(char1, char2) {
    
    let output = charsInBtw(char1, char2);
    console.log(output);
    
    function charsInBtw(char1, char2) {
        let firstCharN = char1.charCodeAt()
        let secondCharN = char2.charCodeAt()

        let betweenChars = '';
        if (firstCharN > secondCharN) {
            for (let i = secondCharN + 1; i < firstCharN; i++) {
                betweenChars += `${String.fromCharCode(i)} `;
    
            }
            return betweenChars;
        }
        
        for (let i = firstCharN + 1; i < secondCharN; i++) {
            betweenChars += `${String.fromCharCode(i)} `;

        }
        return betweenChars;
    }
}

charsInRange('C',
'#');