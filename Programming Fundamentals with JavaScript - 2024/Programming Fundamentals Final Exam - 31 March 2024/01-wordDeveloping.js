function worldDeveloping(data) {

    let startString = '';
    let command = data.shift();

    while (command !== 'End') {
        if (command.includes('Add')) {
            let [, substr] = command.split(' ')

            startString += substr;

        } else if (command.includes('Upgrade')) {
            let [, char] = command.split(' ');

            while (startString.includes(char)) {
                startString = startString.replace(char, String.fromCharCode(char.charCodeAt() + 1));
            }

        } else if (command === 'Print') {
            console.log(startString);

        } else if (command.includes('Index')) {
            let [, char] = command.split(' ');
            let allIdxsWhereCharOccurs = [];

            if (startString.includes(char)) {
                for (let i = 0; i < startString.length; i++) {
                    if (startString[i] === char) {
                        allIdxsWhereCharOccurs.push(i);
                    }
                }
                console.log(allIdxsWhereCharOccurs.join(' '));

            } else {
                console.log('None');
            }

        } else {
            let [, substr] = command.split(' ');

            while (startString.includes(substr)) {
                let newStr = startString.replace(substr, '');

                startString = newStr;
            }
        }
        command = data.shift()
    }
}
worldDeveloping((["Add HelloWorld",
    "Upgrade e",
    "Print",
    "Index b",
    "Remove rl",
    "Print",
    "End"]));