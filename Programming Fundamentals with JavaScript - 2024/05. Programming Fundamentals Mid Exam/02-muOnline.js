function muOnline(data) {

    dungRooms = data.split('|');

    let health = 100;
    let bitcoins = 0;
    let dungLength = dungRooms.length;
    let isDead = false;

    for (let i = 0; i < dungLength; i++) {
        let curRoom = dungRooms.shift().split(' ');
        let [command, value] = curRoom;

        value = Number(value);

        switch (command) {
            case 'potion':
                if (health + value > 100) {
                    let healed = (100 + value) - (health + value);

                    health += healed;
                    console.log(`You healed for ${healed} hp.`);

                } else {
                    health += value
                    console.log(`You healed for ${value} hp.`);

                }
                console.log(`Current health: ${health} hp.`);

                break;

            case 'chest':
                if (!isDead) {
                    console.log(`You found ${value} bitcoins.`);
                    bitcoins += value;

                }

                break;

            default:
                if (health - value > 0) {
                    health -= value;
                    console.log(`You slayed ${command}.`);

                } else {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${i + 1}`);
                    isDead = true;
                }

                break;
        }
    }
    if (!isDead) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);

    }
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");