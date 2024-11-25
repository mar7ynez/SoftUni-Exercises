function trekkingMania(input) {

    let groups = Number(input[0]);

    let musala = 0;
    let monblan = 0;
    let kilimandzharo = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i <= groups; i++) {
        let currGroupPpl = Number(input[i]);

        if (currGroupPpl <= 5) {
            musala += currGroupPpl;

        } else if (currGroupPpl <= 12) {
            monblan += currGroupPpl;

        } else if (currGroupPpl <= 25) {
            kilimandzharo += currGroupPpl;

        } else if (currGroupPpl <= 40) {
            k2 += currGroupPpl;

        } else {
            everest += currGroupPpl;

        }
    }
    let totalPpl = musala + monblan + kilimandzharo + k2 + everest;

    console.log(`${(musala / totalPpl * 100).toFixed(2)}%`);
    console.log(`${(monblan / totalPpl * 100).toFixed(2)}%`);
    console.log(`${(kilimandzharo / totalPpl * 100).toFixed(2)}%`);
    console.log(`${(k2 / totalPpl * 100).toFixed(2)}%`);
    console.log(`${(everest / totalPpl * 100).toFixed(2)}%`);
}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"]);