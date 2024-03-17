function activationKeys(data) {

    let rawKey = data.shift();
    let command = data.shift();

    while (command !== 'Generate') {
        if (command.includes('Contains')) {
            let [, substr] = command.split('>>>');
            let foundSubstrOrNot = contains(rawKey, substr);
            console.log(foundSubstrOrNot);

        } else if (command.includes('Flip')) {
            let [, secAction, startIdx, endIdx] = command.split('>>>');
            rawKey = flip(secAction, rawKey, Number(startIdx), Number(endIdx));
            console.log(rawKey);

        } else {
            let [, startIdx, endIdx] = command.split('>>>');
            rawKey = partSlice(rawKey, Number(startIdx), Number(endIdx));
            console.log(rawKey);
        }
        command = data.shift();
    }
    console.log(`Your activation key is: ${rawKey}`);

    function contains(rawKey, substr) {
        if (rawKey.includes(substr)) {
            return `${rawKey} contains ${substr}`;
        }
        return 'Substring not found!';
    }

    function flip(action, rawKey, startIdx, endIdx) {
        if (action === 'Upper') {
            let substrPart = rawKey.substring(startIdx, endIdx);
            rawKey = rawKey.replace(substrPart, substrPart.toUpperCase());
            return rawKey;
        }
        let substrPart = rawKey.substring(startIdx, endIdx);
        rawKey = rawKey.replace(substrPart, substrPart.toLowerCase());
        return rawKey;
    }

    function partSlice(rawKey, startIdx, endIdx) {
        let keyArr = rawKey.split('');
        keyArr.splice(startIdx, endIdx - startIdx);
        rawKey = keyArr.join('');
        return rawKey
    }
}
activationKeys((["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"]));