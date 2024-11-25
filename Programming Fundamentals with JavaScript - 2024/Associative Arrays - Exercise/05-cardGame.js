function cardGame(data) {

    let cardRegister = {};
    let cardsMapper = {
        pts: {
            'J': 11,
            'Q': 12,
            'K': 13,
            'A': 14,
        },
        type: {
            'S': 4,
            'H': 3,
            'D': 2,
            'C': 1,
        }
    };

    for (let person of data) {
        let tokens = person.split(': ');
        let personName = tokens.shift();
        let cards = tokens.shift().split(', ')

        for (let card of cards) {
            if (!cardRegister.hasOwnProperty(personName)) {
                cardRegister[personName] = [];

            }
            if (!cardRegister[personName].includes(card)) {
                cardRegister[personName].push(card);

            }
        }
    }

    for (let name of Object.keys(cardRegister)) {
        let tempCardsPoints = 0;

        for (let curCard of cardRegister[name]) {
            let cardPower = curCard[0];
            let cardType = curCard[1];

            if (curCard.length > 2) {
                cardPower = curCard[0] + curCard[1];
                cardType = curCard[2];

            }
            let curCardPower = 0

            if (cardsMapper.pts.hasOwnProperty(cardPower)) {
                curCardPower = cardsMapper.pts[cardPower];


            } else {
                curCardPower = Number(cardPower);

            }
            if (cardsMapper.type.hasOwnProperty(cardType)) {
                curCardPower *= cardsMapper.type[cardType];

            }
            tempCardsPoints += curCardPower;
        }
        console.log(`${name}: ${tempCardsPoints}`);
    }
}
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]);