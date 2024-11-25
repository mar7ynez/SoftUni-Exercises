function messageEncrypter(data) {

    let inputCount = Number(data.shift());
    let pattern = /([*@])([A-Z][a-z]{2,})\1: \[([A-Za-z])\]\|\[([A-Za-z])\]\|\[([A-Za-z])\]\|$/;

    for (let i = 0; i < inputCount; i++) {
        let validMsg = pattern.exec(data[i]);

        if (!validMsg) {
            console.log('Valid message not found!');
            continue;
        }
        console.log(`${validMsg[2]}: ${validMsg[3].charCodeAt()} ${validMsg[4].charCodeAt()} ${validMsg[5].charCodeAt()}`);
    }
}
messageEncrypter(["3",
    "*Request*: [I]|[s]|[i]|",
    "*Taggy@: [73]|[73]|[73]|",
    "Should be valid @Taggy@: [v]|[a]|[l]|",]);