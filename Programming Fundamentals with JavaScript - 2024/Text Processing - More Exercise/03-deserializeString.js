function deserializeString(data) {

    let info = data.shift();
    let charStorage = {};
    let findMax = [];

    while (info !== 'end') {
        let [char, idxData] = info.split(':');
        let idxs = idxData.split('/');

        if (!charStorage.hasOwnProperty(char)) {
            charStorage[char] = [];
        }
        idxs.forEach(idx => {
            charStorage[char].push(idx);
            findMax.push(idx);
        });

        info = data.shift();
    }
    let pattern = Array(Math.max(...findMax) + 1).fill('');

    for (let curChar in charStorage) {
        charStorage[curChar].forEach(curCharIdx => pattern.splice(Number(curCharIdx), 1, curChar));

    }
    console.log(pattern.join(''));
}
deserializeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']);