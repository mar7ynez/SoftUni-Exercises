function oscarsCeremony(input) {

    let rentForPlace = Number(input[0]);

    let statue = rentForPlace * 0.70;
    let catering = statue * 0.85;
    let sound = catering / 1 / 2;

    let totalPrice = statue + catering + sound + rentForPlace;

    console.log(totalPrice.toFixed(2));
}
oscarsCeremony(["3500"]);