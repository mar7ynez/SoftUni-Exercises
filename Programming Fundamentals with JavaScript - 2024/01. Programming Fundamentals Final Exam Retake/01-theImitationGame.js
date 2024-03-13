function theImitationGame(data) {

    let encryptedMessage = data.shift().split('');
    let command = data.shift();

    while (command !== 'Decode') {
        let [action, valueOne, valueTwo] = command.split('|');

        if (action === "Move") {
            for (let i = 0; i < valueOne; i++) {
                let letters = encryptedMessage.shift();
                encryptedMessage.push(letters);
            }

        } else if (action === 'Insert') {
            encryptedMessage.splice(valueOne, 0, valueTwo);

        } else {
            while (encryptedMessage.includes(valueOne)) {
                let occurenceIndex = encryptedMessage.indexOf(valueOne);
                encryptedMessage.splice(occurenceIndex, 1, valueTwo);
            }
        }
        command = data.shift();
    }
    console.log(`The decrypted message is: ${encryptedMessage.join('')}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);