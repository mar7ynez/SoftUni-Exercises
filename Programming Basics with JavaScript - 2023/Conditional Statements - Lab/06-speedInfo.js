function speedInfo(input) {

    let theSpeed = Number(input);

    let outputInfo = '';

    if (theSpeed <= 10) {
        outputInfo = 'slow';

    } else if (theSpeed <= 50) {
        outputInfo = 'average';

    } else if (theSpeed <= 150) {
        outputInfo = 'fast';

    } else if (theSpeed <= 1000) {
        outputInfo = 'ultra fast';

    } else {
        outputInfo = 'extremely fast';

    }
    console.log(outputInfo);
}

speedInfo(["3500"]);