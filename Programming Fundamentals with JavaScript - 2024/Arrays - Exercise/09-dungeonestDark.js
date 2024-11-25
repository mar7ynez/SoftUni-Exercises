function dungeonestDark(arr) {

    const rooms = arr.shift().split('|');

    let health = 100;
    let coins = 0;
    let isDead = false;

    for (let i = 0; i < rooms.length; i++) {
        let curRoom = rooms[i].split(' ');
        let curPart = curRoom[0];
        let curNum = Number(curRoom[1]);

        if (curPart === 'potion') {
            if (health + curNum > 100) {
                let healed = (100 + curNum) - (health + curNum);
                health = 100;

                console.log(`You healed for ${healed} hp.`);
            } else {
                health += curNum;
                console.log(`You healed for ${curNum} hp.`);

            }
            console.log(`Current health: ${health} hp.`);

        } else if (curPart === 'chest') {
            console.log(`You found ${curNum} coins.`);
            coins += curNum;

        } else {
            if (health - curNum > 0) {
                health -= curNum;
                console.log(`You slayed ${curPart}.`);

            } else {
                console.log(`You died! Killed by ${curPart}.`);
                console.log(`Best room: ${i + 1}`);
                isDead = true;
                break;

            }
        }
    }
    if (!isDead) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);

    }
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);

