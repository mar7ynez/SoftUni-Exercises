function emojiDetector(data) {

    let randomString = data.shift();

    console.log(`Cool threshold: ${coolnessThreshold(randomString)}`);
    console.log(`${findAllValidEmojis(randomString).length} emojis found in the text. The cool ones are:`);
    console.log(`${findCoolOnesOnly(findAllValidEmojis(randomString), coolnessThreshold(randomString)).join('\n').trim()}`);

    function findCoolOnesOnly(emojis, threshold) {
        let coolEmojis = [];

        for (let emoji of emojis) {
            let curEmojiCoolness = 0;
            for (let i = 2; i < emoji.length - 2; i++) {
                curEmojiCoolness += Number(emoji[i].charCodeAt());

            }
            curEmojiCoolness > threshold ? coolEmojis.push(emoji) : curEmojiCoolness = 0;
        }
        return coolEmojis;
    }

    function findAllValidEmojis(randomString) {
        let pattern = /([:*]){2}([A-Z][a-z]{2,})\1{2}/g;
        let validEmojis = randomString.match(pattern);

        return validEmojis;
    }

    function coolnessThreshold(randomString) {
        let allNumbers = randomString.match(/\d/g).map(Number);
        let coolnessTarget = 1;

        for (let num of allNumbers) {
            coolnessTarget *= num;
        }
        return coolnessTarget;
    }
}
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);