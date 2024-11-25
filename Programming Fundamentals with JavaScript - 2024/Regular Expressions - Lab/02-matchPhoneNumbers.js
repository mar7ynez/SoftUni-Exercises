function matchPhoneNumbers(data) {

    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let phoneNums = data.shift();

    let validPhoneNumbers = phoneNums.match(pattern);

    console.log(validPhoneNumbers.join(', '));
}
matchPhoneNumbers(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);