function loadingBar(num) {

    let percentSignCount = num / 10;
    let dotsCount = 10 - percentSignCount;

    if (num < 100) {
        console.log(`${num}% [${'%'.repeat(percentSignCount)}${'.'.repeat(dotsCount)}]`);
        console.log('Still loading...');

    } else {
        console.log(`${num}% Complete!`);
        console.log(`[${'%'.repeat(percentSignCount)}]`);

    }
}
loadingBar(40);