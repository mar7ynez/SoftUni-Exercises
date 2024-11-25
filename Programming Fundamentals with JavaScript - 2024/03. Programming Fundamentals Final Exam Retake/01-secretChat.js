function secretChat(data) {

    let randomString = data.shift();
    let command = data.shift();

    while (command !== 'Reveal') {
        let [, valueOne, valueTwo] = command.split(':|:');

        if (command.includes('InsertSpace')) {
            let whiteSpaceInsert = randomString.split('');

            whiteSpaceInsert.splice(valueOne, 0, ' ');
            randomString = whiteSpaceInsert.join('');

            console.log(randomString);

        } else if (command.includes('Reverse')) {
            if (randomString.includes(valueOne)) {
                let startIndex = randomString.indexOf(valueOne[0]);
                let modifiedPart = randomString.substring(startIndex, randomString.length).split('').reverse().join('');
                let partReplaced = randomString.split('');

                partReplaced.splice(startIndex, valueOne.length, modifiedPart);
                randomString = partReplaced.join('');

                console.log(randomString);

            } else {
                console.log('error');

            }
            
        } else {
            while (randomString.includes(valueOne)) {
                randomString = randomString.replace(valueOne, valueTwo);

            }
            console.log(randomString);
        }
        command = data.shift();
    }
    console.log(`You have a new text message: ${randomString}`);
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);