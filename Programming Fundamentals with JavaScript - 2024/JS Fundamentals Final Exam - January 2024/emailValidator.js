function emailValidator(data) {

    let emailAdress = data.shift();
    let command = data.shift();

    while (command !== 'Complete') {
        if (command.includes('Make Upper')) {
            emailAdress = emailAdress.toUpperCase();
            console.log(emailAdress);

        } else if (command.includes('GetDomain')) {
            const [cmd, count] = command.split(' ');

            console.log(emailAdress.substring(emailAdress.length - count));
        } else if (command.includes('GetUsername')) {
            if (!emailAdress.includes('@')) {
                console.log(`The email ${emailAdress} doesn't contain the @ symbol.`);
            }

            console.log(emailAdress.substring(0, emailAdress.indexOf('@')));
        } else if (command.includes('Make Lower')) {
            emailAdress = emailAdress.toLowerCase();

            console.log(emailAdress);

        } else if (command.includes('Replace')) {
            const [cmd, symbolToReplace] = command.split(' ');

            console.log(emailAdress.replaceAll(symbolToReplace, '-'));
        } else {
            const asciiCodes = emailAdress.split('').map((symbol) => symbol.charCodeAt());

            console.log(asciiCodes.join(' '));
        }

        command = data.shift()
    }
}

emailValidator(["Another@Mail.com",
    "Make Lower",
    "GetUsername",
    "GetDomain 3",
    "Encrypt",
    "Complete"])