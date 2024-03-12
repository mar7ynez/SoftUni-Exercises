function santasSecretHelper(data) {

    let encryptionKey = data.shift();
    let message = data.shift();
    let pattern = /@([A-Za-z]+)[^@\-!:>]*!([GN])!/g;
    let decryptedMessage = [];

    while (message !== 'end') {
        for (let curChar of message) {
            decryptedMessage.push(String.fromCharCode(curChar.charCodeAt() - encryptionKey));

        }
        let match = pattern.exec(decryptedMessage.join(''));
        
        if (match && match[2] !== 'N') {
            console.log(match[1]);

        }
        message = data.shift();
    }
}
santasSecretHelper(['3',
'N}eideidmk$"(mnyenmCNlpamnin$J$',
'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
'ppqmkkkmnolmnnCEhq/vkievk$Q$',
'yyegiivoguCYdohqwlqh/kguimhk$J$',
'end']);