function login(input) {
    
    let password = '';
    let username = input.shift();

    let loginAttempt = input.shift();
    let attemptCounter = 0;

    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];

    }
    
    while (loginAttempt !== password) {
        attemptCounter++;
        
        if (attemptCounter % 4 === 0) {
            console.log(`User ${username} blocked!`);
            return;
            
        }
        console.log('Incorrect password. Try again.');

        loginAttempt = input.shift();
    }
    console.log(`User ${username} logged in.`);
}

login(['Acer','login','go','let me in','recA']);
console.log('--------------');
login(['sunny','rainy','cloudy','sunny','not sunny']);
console.log('--------------');
login(['momo','omom']);