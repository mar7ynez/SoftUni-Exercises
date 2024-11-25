function serializeString(randomString) {

    randomString = randomString.shift().split('');
    let charStorage = {};

    for (let i = 0; i < randomString.length; i++) {
        if (!charStorage.hasOwnProperty(randomString[i])) {
            charStorage[randomString[i]] = [];

        }
        charStorage[randomString[i]].push(i);
    }
    for (let char in charStorage) {
        console.log(`${char}:${charStorage[char].join('/')}`);
        
    }
}
serializeString(["abababa"]);