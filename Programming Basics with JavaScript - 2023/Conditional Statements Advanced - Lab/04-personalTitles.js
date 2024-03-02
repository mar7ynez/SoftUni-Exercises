function personalTitles(input) {

    let age = Number(input[0]);
    let gender = input[1];

    let title = '';

    if (age >= 16) {
        if (gender === 'm') {
            title = 'Mr.';

        } else {
            title = 'Ms.';

        }

    } else {
        if (gender === 'm') {
            title = 'Master';

        } else {
            title = 'Miss';

        }
    }
    console.log(title);
}

personalTitles(["13.5",
"m"]);