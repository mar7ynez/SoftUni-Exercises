function passwordGuess(input) {

    let passwordAttempt = input[0];

    if (passwordAttempt === 's3cr3t!P@ssw0rd') {
        console.log('Welcome');

    } else {
        console.log('Wrong password!');

    }
}

passwordGuess(["s3cr3t!P@ssw0rd"]);