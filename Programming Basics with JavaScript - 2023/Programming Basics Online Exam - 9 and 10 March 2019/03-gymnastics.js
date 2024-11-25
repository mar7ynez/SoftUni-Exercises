function gymnastics(input) {

    let country = input[0];
    let apparatus = input[1];

    let points = 0;

    if (apparatus === 'ribbon') {
        if (country === 'Russia') {
            points = 9.1 + 9.4;

        } else if (country === 'Bulgaria') {
            points = 9.6 + 9.4;

        } else {
            points = 9.2 + 9.5;
            
        }

    } else if (apparatus === 'hoop') {
        if (country === 'Russia') {
            points = 9.3 + 9.8;

        } else if (country === 'Bulgaria') {
            points = 9.55 + 9.75;

        } else {
            points = 9.45 + 9.35;

        }
    } else if (apparatus === 'rope') {
        if (country === 'Russia') {
            points = 9.6 + 9.0;

        } else if (country === 'Bulgaria') {
            points = 9.5 + 9.4;

        } else {
            points = 9.7 + 9.15;

        }
    }
    percentToMaxPts = (20 - points) / 20 * 100;

    console.log(`The team of ${country} get ${points.toFixed(3)} on ${apparatus}.`);
    console.log(`${percentToMaxPts.toFixed(2)}%`);
}
gymnastics(["Bulgaria",
    "ribbon"]);