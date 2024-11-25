function readText(input) {

    let command = input.shift();

        while (command !== 'Stop') {
        console.log(command);

        command = input.shift()
    }
}

readText(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])