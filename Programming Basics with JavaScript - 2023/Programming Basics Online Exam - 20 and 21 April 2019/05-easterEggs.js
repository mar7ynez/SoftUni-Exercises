function easterEggs(input) {

    let paintedEggsCount = Number(input.shift());

    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;

    let maxEggs = 0;
    let color = '';

    for (let i = 1; i <= paintedEggsCount; i++) {
        currEggColor = input.shift();

        if (currEggColor === 'red') {
            red++;
            if (red > maxEggs) {
                maxEggs = red;
                color = 'red';
            }

        } else if (currEggColor === 'orange') {
            orange++;
            if (orange > maxEggs) {
                maxEggs = orange;
                color = 'orange';
            }

        } else if (currEggColor === 'blue') {
            blue++;
            if (blue > maxEggs) {
                maxEggs = blue;
                color = 'blue';
            }

        } else if (currEggColor === 'green') {
            green++;
            if (green > maxEggs) {
                maxEggs = green;
                color = 'green';
            }
        }
    }
    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${maxEggs} -> ${color}`);
}
easterEggs(["7",
    "orange",
    "blue",
    "green",
    "green",
    "blue",
    "red",
    "green"]);