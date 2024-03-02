function password(input) {

    let username = input.shift();
    let password = input.shift();

    let loginAttempt = input.shift();

    while (loginAttempt !== password) {
        
        loginAttempt = input.shift();
    }
    console.log(`Welcome ${username}!`);
}

password(["Gosho",
"secret",
"secwet"])