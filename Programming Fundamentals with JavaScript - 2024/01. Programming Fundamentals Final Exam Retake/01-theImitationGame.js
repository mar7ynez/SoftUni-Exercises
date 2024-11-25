function theImitationGame(data) {

    let encryptedMessage = data.shift();
    let command = data.shift();

    while (command !== 'Decode') {
        let [action, valueOne, valueTwo] = command.split('|');

        if (action === "Move") {
            let letters = encryptedMessage.substring(0, Number(valueOne));
            encryptedMessage = encryptedMessage.replace(letters, '');
            encryptedMessage += letters;

        } else if (action === 'Insert') {
            encryptedMessage = encryptedMessage.split('');
            encryptedMessage.splice(Number(valueOne), 0, valueTwo);
            encryptedMessage = encryptedMessage.join('');

        } else {
            while (encryptedMessage.includes(valueOne)) {
                encryptedMessage = encryptedMessage.replace(valueOne, valueTwo)
            }
        }
        command = data.shift();
    }
    console.log(`The decrypted message is: ${encryptedMessage}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);