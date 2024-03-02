function passwordValidator(password) {

    let isLengthValid = validLength(password);
    let isOnlyLettersAndDigits = lettersAndDigits(password);
    let isAtLeastTwoDigits = atLeastTwoDigits(password);

    if (isLengthValid && isOnlyLettersAndDigits && isAtLeastTwoDigits) {
        console.log('Password is valid');

    }

    function validLength(password) {

        if (password.length <= 10 && password.length >= 6) {
            return true;

        }
        console.log("Password must be between 6 and 10 characters");
        return false;
    }

    function lettersAndDigits(password) {
        let pattern = /^[A-Za-z0-9]+$/;

        if (pattern.test(password)) {
            return true;

        }
        console.log("Password must consist only of letters and digits");
        return false;
    }

    function atLeastTwoDigits(password) {
        let pattern = /[0-9]{2,}/;

        if (pattern.test(password)) {
            return true;

        }
        console.log("Password must have at least 2 digits");
        return false;
    }
}
passwordValidator('MyPass123');