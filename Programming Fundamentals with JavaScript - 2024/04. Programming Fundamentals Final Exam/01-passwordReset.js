function passwordReset(data) {

    let randomString = data.shift();
    let command = data.shift();

    while (command !== 'Done') {
        let [action, valueOne, valueTwo] = command.split(' ');

        if (action === 'TakeOdd') {
            randomString = takeOddAndConcat(randomString);
            console.log(randomString);

        } else if (action === 'Cut') {
            randomString = cut(randomString, valueOne, valueTwo);
            console.log(randomString);

        } else {
            if (!randomString.includes(valueOne)) {
                console.log(subsReplaceAllOccur(randomString, valueOne, valueTwo))

            } else {
                randomString = subsReplaceAllOccur(randomString, valueOne, valueTwo);
                console.log(randomString);

            }
        }
        command = data.shift()
    }
    console.log(`Your password is: ${randomString}`);
    
    function subsReplaceAllOccur(password, substr, substituteStr) {
        if (!password.includes(substr)) {
            return 'Nothing to replace!';

        }

        while (password.includes(substr)) {
            password = password.replace(substr, substituteStr);

        }
        return password
    }

    function cut(password, idx, length) {
        password = password.split('');
        password.splice(idx, length);

        return password.join('');
    }

    function takeOddAndConcat(randomChars) {
        let charsAtOddIdx = [];

        for (let i = 1; i <= randomChars.length; i += 2) {
            charsAtOddIdx.push(randomChars[i]);
        }
        return charsAtOddIdx.join('');
    }
}
passwordReset((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]));