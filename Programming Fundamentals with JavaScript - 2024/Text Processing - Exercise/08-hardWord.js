function hardWord(data) {

    let letter = data[0].split(' ');
    let words = data[1];

    letter.forEach(empty => {
        if (empty.includes('_')) {

            for (let word of words) {
                if (word.length === empty.length) {
                    letter.splice(letter.indexOf(empty), 1, word);
                    break;

                } else if (empty.includes('.') || empty.includes(',')) {
                    if (word.length === empty.length - 1) {
                        letter.splice(letter.indexOf(empty), 1, `${word}${empty[empty.length - 1]}`);
                        break;

                    }
                }
            }
        }
    })
    console.log(letter.join(' '));
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);