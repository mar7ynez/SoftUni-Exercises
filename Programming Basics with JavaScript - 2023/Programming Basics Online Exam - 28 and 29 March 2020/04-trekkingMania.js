function trekkingMania(input) {

    let countOfGroups = Number(input.shift());

    let musala = 0;
    let monblan = 0;
    let kilimandzharo = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i <= countOfGroups; i++) {
        let currGroupMembers = Number(input.shift());

        if (currGroupMembers <= 5) {
            musala += currGroupMembers;

        } else if (currGroupMembers <= 12) {
            monblan += currGroupMembers;

        } else if (currGroupMembers <= 25) {
            kilimandzharo += currGroupMembers;

        } else if (currGroupMembers <= 40) {
            k2 += currGroupMembers;

        } else if (currGroupMembers > 40) {
            everest += currGroupMembers;

        }
    }
    let totalMembers = musala + monblan + kilimandzharo + k2 + everest;
    let percentMusala = (musala / totalMembers * 100).toFixed(2);
    let percentMonblan = (monblan / totalMembers * 100).toFixed(2);
    let percentKilimandzharo = (kilimandzharo / totalMembers * 100).toFixed(2);
    let percentK2 = (k2 / totalMembers * 100).toFixed(2);
    let percentEverest = (everest / totalMembers * 100).toFixed(2);

    console.log(`${percentMusala}%`);
    console.log(`${percentMonblan}%`);
    console.log(`${percentKilimandzharo}%`);
    console.log(`${percentK2}%`);
    console.log(`${percentEverest}%`);
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