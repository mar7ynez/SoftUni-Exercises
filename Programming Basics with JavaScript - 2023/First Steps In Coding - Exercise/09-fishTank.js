function fishTank(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentForPump = Number(input[3]);

    let aquariumSize = length * width * height
    let inLiters = aquariumSize / 1000;
    let neededWater = inLiters - inLiters * percentForPump / 100;

    console.log(neededWater);

}

fishTank(["85",
"75",
"47",
"17"]);