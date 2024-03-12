function winningTickets(data) {

    let info = data.split(/[\s,]+/g);
    let pattern = /(\@{6,10}|\${6,10}|\^{6,10}|\#{6,10})/gm;

    for (let curTicket of info) {
        if (curTicket.length !== 20) {
            console.log('invalid ticket');
            continue;

        }
        let validRightHalf = curTicket.substring(0, curTicket.length / 2).match(pattern);
        let validLeftHalf = curTicket.substring(curTicket.length / 2, curTicket.length).match(pattern);

        if (!validRightHalf || !validLeftHalf) {
            console.log(`ticket "${curTicket}" - no match`);
            continue;

        }
        if (validRightHalf && validLeftHalf) {
            let winSymbolsRight = String(validRightHalf);
            let winSymbolsLeft = String(validLeftHalf);

            if (winSymbolsRight.length === 10 && winSymbolsLeft.length === 10) {
                console.log(`ticket "${curTicket}" - 10${winSymbolsRight[0]} Jackpot!`);
                continue;

            } else if (winSymbolsRight[0] === winSymbolsRight[0]) {
                if (winSymbolsRight.length < winSymbolsLeft.length) {
                    console.log(`ticket "${curTicket}" - ${winSymbolsRight.length}${winSymbolsRight[0]}`);

                } else {
                    console.log(`ticket "${curTicket}" - ${winSymbolsLeft.length}${winSymbolsLeft[0]}`);

                }
            }
        }
    }
}
winningTickets('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@weemo@@@@@@ey');